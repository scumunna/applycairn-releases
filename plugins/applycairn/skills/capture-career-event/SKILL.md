---
name: capture-career-event
description: Capture a win, feedback, lesson, screenshot, document, metric, or dictated update into ApplyCairn's Career Inbox. Use when the user says log a win, save this feedback, or describes recent work.
---

# Capture a career event

Use the local ApplyCairn MCP tools; do not write Career Memory JSON directly:

- Call `capture_career_event` to create the raw inbox record, then `list_career_events` to verify the saved ID and status.
- When the user has answered the story questions and explicitly confirms the complete record, call `confirm_career_event` to create a resume-optional Career Story Record. This does not change `accomplishments.md`.
- Call `record_career_evidence_decision` only after the user chooses local copy, redacted copy, reference only, or cancel for the exact attachment.
- Call `propose_career_accomplishments_revision` only after clarification and privacy review. It creates a pending proposal, not a canonical claim.
- Call `confirm_candidate_document_revision` only after showing the exact proposal hash and receiving the user's explicit confirmation in the current conversation.
- Call `get_career_memory_dashboard` after confirmation to report changed coverage and stale outputs.

1. Accept text, mic-friendly dictation, approved local files, URLs, official exports, or explicitly selected connector records. Split long input into separate candidate facts without strengthening them.
2. Save raw material to the Career Inbox first with `capture_career_event`. Nothing is canonical, verified, resume-eligible, or review-eligible yet.
3. Before copying an attachment, run the `privacy-reviewer` privacy gate. Identify likely secrets, people or customer data, internal URLs, confidential metrics, and proprietary material; offer local copy, redacted copy, reference only, or cancel.
4. Ask one short question at a time for personal contribution, situation, action, result, business value, exact or honestly unavailable metric, scale, stakeholders, dates, competencies, and source. Detect duplicates, conflicts, and continuing milestones.
5. Show the exact proposed Career Story and evidence links. For a resume-optional Career Memory record, obtain the exact `CONFIRM THIS CAREER STORY` confirmation; for `accomplishments.md`, obtain the exact proposal hash confirmation through `$update-accomplishments`. Use `evidence-reviewer` to verify traceability.
6. Report what became better supported and which derived documents became stale. Never publish, send, broadly scan a connector, or confirm a claim unattended.
