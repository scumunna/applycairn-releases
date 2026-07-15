---
name: start
description: Start or resume ApplyCairn from the first incomplete Career Memory, evidence, interview, review, master-resume, search, or recurring step. Use when the user says start, begin, resume, continue, or asks what to do next.
---

# Start ApplyCairn

Keep the user-facing journey to four steps: (1) install and type `start`, (2) upload a resume, (3) answer short Career Memory questions, and (4) review results and download the needed Markdown, DOCX, PDF, or complete workspace ZIP.

1. Call `get_workspace_status` first. The packaged MCP creates or resumes the canonical user-owned workspace, so `start` must work from any Codex task folder. Never create a second fallback workspace and never ask for YAML or a model API key.
2. Tell the user the reported workspace location. If the tool is missing or cannot start, say that ApplyCairn did not load, ask them to reinstall it from the official marketplace, and tell them to open a new Codex task. Do not claim onboarding succeeded.
3. Inspect resume sources, Career Inbox, evidence attachments, `accomplishments/accomplishments.md`, profile, frameworks, review dates, `master-resume/master-resume.md`, active packets, due check-ins, and unfinished checkpoints through the packaged tools.
4. Route in order: resume upload, `$extract-accomplishments`, `$intake-interview`, clarification through `$update-accomplishments`, `$build-master-resume`, then `$review-career-memory`, a due `$run-career-check-in`, dashboard, or `$daily-run`.
5. Ask one short, mic-friendly question at a time. Echo the interpreted answer, clarify ambiguity, and save only after confirmation.
   If the app shows a microphone or dictation control, invite the user to speak naturally; never claim ApplyCairn can turn the microphone on itself. Accept long spoken answers, summarize them into separate proposed facts, and confirm each fact before saving.
6. Report connector state only from tools or receipts available now. Use unavailable, disconnected, stale, or connected accurately. Never broadly scan an employer account; require explicit provider, account, scope, date range, and selected records.
7. Resume partial work from its last verified checkpoint; never repeat completed interviews or erase successful steps.

If an action fails, state exactly what remains safe, give one concrete recovery action, and offer a retry. For resume failures, name the accepted formats (PDF, DOCX, DOC, TXT, or Markdown), the 20 MB limit, and whether the file appears empty, corrupt, or mismatched. Never tell the user to edit configuration files.

Raw capture and local drafting are allowed. Retaining sensitive attachments requires the privacy gate; canonical claims require an exact proposal and confirmation. Sending, submitting, scheduling, profile edits, and destructive actions require an exact preview and explicit approval in the current conversation.
