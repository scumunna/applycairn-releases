---
name: start
description: Start or resume ApplyCairn from the first incomplete Career Memory, evidence, interview, review, master-resume, search, or recurring step. Use when the user says start, begin, resume, continue, or asks what to do next.
---

# Start ApplyCairn

Keep the user-facing journey calm and sequential. Show only the current action or
question. Do not display a roadmap, a checklist of future tasks, or a menu of
alternatives during onboarding. Finish the current step, confirm what happened,
and then reveal exactly one next step.

1. Verify `.applycairn/workspace.json`; initialize only an empty folder with the packaged initializer. Never ask for YAML or a model API key.
2. Inspect resume sources, Career Inbox, evidence attachments, `accomplishments/accomplishments.md`, profile, frameworks, review dates, `master-resume/master-resume.md`, active packets, due check-ins, and unfinished checkpoints.
3. Ask what the user wants help with first in their own words. Do not present a list of career modes. Route to only the current workflow: resume upload, `$extract-accomplishments`, `$intake-interview`, clarification through `$update-accomplishments`, `$build-master-resume`, `$review-career-memory`, a due `$run-career-check-in`, dashboard, or `$daily-run`.
4. Ask one short, mic-friendly question at a time. Echo the interpreted answer, clarify one ambiguity if needed, and save only after confirmation. Never ask two unrelated questions in one turn.
   If the app shows a microphone or dictation control, invite the user to speak naturally; never claim ApplyCairn can turn the microphone on itself. Accept long spoken answers, summarize them into separate proposed facts, and confirm each fact before saving.
5. Report connector state only from tools or receipts available now. Use unavailable, disconnected, stale, or connected accurately. Never broadly scan an employer account; require explicit provider, account, scope, date range, and selected records.
6. Resume partial work from its last verified checkpoint; never repeat completed interviews or erase successful steps. When resuming, name only the current checkpoint and one recovery action.

If an action fails, state exactly what remains safe, give one concrete recovery action, and offer a retry. For resume failures, name the accepted formats (PDF, DOCX, DOC, TXT, or Markdown), the 20 MB limit, and whether the file appears empty, corrupt, or mismatched. Never tell the user to edit configuration files.

Raw capture and local drafting are allowed. Retaining sensitive attachments requires the privacy gate; canonical claims require an exact proposal and confirmation. Sending, submitting, scheduling, profile edits, and destructive actions require an exact preview and explicit approval in the current conversation.
