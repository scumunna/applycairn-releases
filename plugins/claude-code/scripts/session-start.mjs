import { access } from "node:fs/promises";
import { resolve } from "node:path";

try {
  await access(resolve(process.cwd(), ".applycairn/workspace.json"));
  console.log(
    "ApplyCairn workspace detected. Say `start` to resume, or `daily` to run the daily review."
  );
} catch {
  // Stay silent outside a ApplyCairn workspace.
}
