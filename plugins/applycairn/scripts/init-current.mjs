import { randomUUID } from "node:crypto";
import {
  cp,
  lstat,
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  writeFile
} from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const pluginRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const current = process.cwd();
const bundledTemplate = resolve(pluginRoot, "assets/workspace-template");
const developmentTemplate = resolve(pluginRoot, "../../workspace-template");

async function directoryExists(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

const template = (await directoryExists(bundledTemplate))
  ? bundledTemplate
  : developmentTemplate;

if (!(await directoryExists(template))) {
  throw new Error(
    "ApplyCairn's starter workspace is missing. Reinstall the plugin and try again."
  );
}

const existing = (await readdir(current)).filter(
  (entry) => entry !== ".DS_Store"
);
if (existing.includes(".applycairn")) {
  const markerPath = resolve(current, ".applycairn/workspace.json");
  let marker;
  try {
    marker = JSON.parse(await readFile(markerPath, "utf8"));
  } catch {
    throw new Error(
      "This folder contains a damaged ApplyCairn workspace marker. Restore the folder from an ApplyCairn export, or open a new empty folder and type start again."
    );
  }
  if (
    marker?.schemaVersion !== 2 ||
    typeof marker.workspaceId !== "string" ||
    marker.workspaceId.length === 0
  ) {
    throw new Error(
      "This folder contains an unsupported ApplyCairn workspace marker. Import it with a compatible ApplyCairn version, or open a new empty folder and type start again."
    );
  }
  console.log("ApplyCairn workspace already exists in this folder.");
  process.exit(0);
}
if (existing.length > 0) {
  throw new Error(
    "This folder is not empty. Open ApplyCairn in a new empty folder so it cannot overwrite existing files."
  );
}

const staging = resolve(current, `.applycairn-init-${randomUUID()}`);
const movedEntries = [];
try {
  await cp(template, staging, {
    recursive: true,
    filter: (source) => basename(source) !== ".DS_Store"
  });
  const now = new Date().toISOString();
  const workspaceId = randomUUID();
  const manifest = {
    schemaVersion: 2,
    workspaceId,
    createdAt: now,
    updatedAt: now,
    revision: 0,
    createdBy: "cli",
    locale: "en-US"
  };
  await mkdir(resolve(staging, ".applycairn"), { recursive: true });
  await writeFile(
    resolve(staging, ".applycairn/workspace.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    {
      encoding: "utf8",
      mode: 0o600
    }
  );
  const auditPath = resolve(staging, "audit/events.jsonl");
  const priorAudit = await readFile(auditPath, "utf8").catch(() => "");
  const auditEvent = {
    schemaVersion: 1,
    id: randomUUID(),
    workspaceId,
    occurredAt: now,
    actor: { kind: "system", id: "applycairn-codex-plugin" },
    action: "workspace.initialized",
    resourceType: "workspace",
    outcome: "success",
    metadata: { workspaceVersion: 2 }
  };
  await writeFile(auditPath, `${priorAudit}${JSON.stringify(auditEvent)}\n`, {
    encoding: "utf8",
    mode: 0o600
  });
  for (const entry of await readdir(staging)) {
    try {
      await lstat(resolve(current, entry));
      throw new Error(
        `ApplyCairn stopped because ${entry} appeared while the workspace was being created. Your new file was preserved. Move it to a safe folder, then type start again.`
      );
    } catch (error) {
      if (
        error instanceof Error &&
        !error.message.includes("appeared while the workspace") &&
        /** @type {NodeJS.ErrnoException} */ (error).code === "ENOENT"
      ) {
        // The destination is still available.
      } else {
        throw error;
      }
    }
    await rename(resolve(staging, entry), resolve(current, entry));
    movedEntries.push(entry);
  }
  await rm(staging, { recursive: true, force: true });
  console.log(
    "ApplyCairn workspace created. Ask the user to add a resume, then continue onboarding."
  );
} catch (error) {
  await Promise.all(
    movedEntries.map((entry) =>
      rm(resolve(current, entry), { recursive: true, force: true })
    )
  );
  await rm(staging, { recursive: true, force: true });
  throw error;
}
