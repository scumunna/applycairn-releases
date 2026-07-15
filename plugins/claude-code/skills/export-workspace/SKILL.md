---
name: export-workspace
description: Export the complete user-owned ApplyCairn workspace with checksums, privacy review, and no connector credentials.
---

# Export workspace

If the user wants only specific files, list the exact local paths for the available Markdown, DOCX, and PDF files. Do not force a complete export for a single resume or cover letter.

Run `privacy-reviewer`, validate the workspace, then use the packaged export capability. Include the Career Inbox, approved evidence and redactions, canonical accomplishments, private growth records, decision journal, frameworks, review cycles, check-ins, career packets, source receipts, `master-resume/master-resume.md`, profile, jobs, application records, audit history, and manifest. Preserve stable IDs, revisions, hashes, relative paths, and visibility labels. Exclude OAuth tokens, secrets, connector sessions, caches, dependencies, and version-control internals.

Verify schema version, paths, file counts, sizes, checksums, and that referenced evidence exists or is explicitly marked missing/reference-only. Report omissions and failures honestly. Create the archive only at the agreed local destination; uploading or sharing requires a separate exact preview and explicit approval.
