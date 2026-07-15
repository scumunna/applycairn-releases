# Your ApplyCairn Workspace

This folder is your portable, local job-search record. It contains Markdown, CSV, JSON, and the documents you add or generate. You can open and edit the human-readable files with ordinary desktop apps.

Start by placing a PDF or DOCX resume in `resume-inbox/`. ApplyCairn will guide you from there a few questions at a time.

Your confirmed accomplishments are the only claim source. ApplyCairn derives `master-resume/master-resume.md` as a broad resume, but every tailored packet must still trace directly to confirmed accomplishments. User-approved recurring-work preferences live in `automations/automations.json`; only a matching host receipt proves an actual schedule exists.

## Privacy and control

- No YAML configuration is needed.
- No separate model API key is needed; an eligible desktop-host account is still required.
- Canonical records stay in this folder. The AI host and any service you connect process data under their own terms.
- ApplyCairn never submits an application, sends a message, schedules an interview, or edits a public profile without your explicit approval.
- `applycairn export` creates a portable backup.
- `applycairn delete-local --yes` permanently removes this local workspace after safety checks.

Do not commit this folder to a public source-control repository because it will contain personal information.
