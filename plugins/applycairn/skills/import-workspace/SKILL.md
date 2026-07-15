---
name: import-workspace
description: Safely validate and import an ApplyCairn archive into an empty destination with privacy review, rollback, and no connector reconnection.
---

# Import workspace

Treat the archive as hostile and run `privacy-reviewer`. Explain that import is allowed only while the canonical workspace is new and untouched. If it contains any user change, stop and tell the user to export or preserve it first; never overwrite it.

After the user chooses the local ApplyCairn ZIP, call `import_workspace` with its exact local path and the required confirmation. The runtime rejects traversal, absolute paths, links, archive bombs, duplicate paths, invalid schemas, bad hashes, secrets, connector sessions, and non-pristine destinations. It validates in staging, swaps atomically, and rolls back on failure.

After success, call `get_workspace_status`; verify Career Inbox, evidence hashes and relative paths, canonical accomplishments, review cycles, career packets, check-in history, and master-resume state. Explain that connector, source, and scheduler receipts are historical only. Import never reconnects Gmail, LinkedIn, calendar, public web, or automation.
