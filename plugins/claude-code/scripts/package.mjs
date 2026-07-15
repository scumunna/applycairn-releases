import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { basename, resolve } from "node:path";
import {
  deterministicZip,
  filesBelow,
  normalizeTimes
} from "../../../scripts/release-utils.mjs";

const root = resolve(import.meta.dirname, "..");
const repo = resolve(root, "../..");
const output = resolve(repo, "dist/claude-code/applycairn");
const releaseStaging = resolve(repo, "release-build/claude-code");
const runtime = resolve(repo, "plugins/applycairn/mcp/server.cjs");
const manifest = JSON.parse(
  await readFile(resolve(root, ".claude-plugin/plugin.json"), "utf8")
);
const archive = resolve(
  repo,
  `release-assets/ApplyCairn-Claude-Code-${manifest.version}.zip`
);

await access(runtime).catch(() => {
  throw new Error(
    "The compiled ApplyCairn MCP runtime is missing. Run pnpm build:codex-runtime before packaging Claude Code."
  );
});
await rm(resolve(repo, "dist/claude-code"), { recursive: true, force: true });
await rm(releaseStaging, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const item of [
  ".claude-plugin",
  ".mcp.json",
  "skills",
  "agents",
  "hooks",
  "scripts",
  "LICENSE",
  "README.md"
]) {
  await cp(resolve(root, item), resolve(output, item), {
    recursive: true,
    filter: (source) =>
      !source.endsWith("/.DS_Store") &&
      !source.endsWith("/scripts/validate.mjs")
  });
}
await mkdir(resolve(output, "mcp"), { recursive: true });
await cp(runtime, resolve(output, "mcp/server.cjs"));
await cp(
  resolve(repo, "workspace-template"),
  resolve(output, "assets/workspace-template"),
  {
    recursive: true,
    filter: (source) => !source.endsWith("/.DS_Store")
  }
);
if (process.argv.includes("--zip")) {
  await mkdir(resolve(repo, "release-assets"), { recursive: true });
  await mkdir(releaseStaging, { recursive: true });
  await cp(output, resolve(releaseStaging, "applycairn"), {
    recursive: true,
    filter: (source) => basename(source) !== ".DS_Store"
  });
  await normalizeTimes(resolve(releaseStaging, "applycairn"));
  await rm(archive, { force: true });
  const entries = (await filesBelow(resolve(releaseStaging, "applycairn"))).map(
    (entry) => `applycairn/${entry}`
  );
  await deterministicZip(releaseStaging, archive, entries);
}
console.log(process.argv.includes("--zip") ? archive : output);
