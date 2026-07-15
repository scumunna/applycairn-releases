import { randomUUID } from "node:crypto";
import {
  cp,
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  writeFile
} from "node:fs/promises";
import { dirname, resolve } from "node:path";
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
  console.log("ApplyCairn workspace already exists in this folder.");
  process.exit(0);
}
if (existing.length > 0) {
  throw new Error(
    "This folder is not empty. Open ApplyCairn in a new empty folder so it cannot overwrite existing files."
  );
}

const staging = resolve(current, `.applycairn-init-${randomUUID()}`);
try {
  await cp(template, staging, {
    recursive: true,
    filter: (source) => !source.endsWith("/.DS_Store")
  });
  const now = new Date().toISOString();
  const workspaceId = randomUUID();
  const manifest = {
    schemaVersion: 1,
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
    metadata: { workspaceVersion: 1 }
  };
  await writeFile(auditPath, `${priorAudit}${JSON.stringify(auditEvent)}\n`, {
    encoding: "utf8",
    mode: 0o600
  });
  for (const entry of await readdir(staging)) {
    await rename(resolve(staging, entry), resolve(current, entry));
  }
  await rm(staging, { recursive: true, force: true });
  console.log(
    "ApplyCairn workspace created. Ask the user to add a resume, then continue onboarding."
  );
} catch (error) {
  await rm(staging, { recursive: true, force: true });
  throw error;
}
