---
name: update-accomplishments
description: Clarify, reconcile, add, or correct verified evidence in ApplyCairn's canonical accomplishments inventory. Use for interview answers, new evidence, conflicts, missing metrics, or user corrections.
---

# Update accomplishments

1. Ground each proposed change in a source or an explicit user statement. Ask one short clarification at a time.
2. Reflect the exact proposed fact, metric status, date, personal versus team contribution, scope, visibility, source, and linked evidence back to the user. Save only after explicit confirmation; a raw Career Inbox event or attachment is never confirmation.
3. Update `accomplishments/accomplishments.md`; preserve evidence IDs, source locators, uncertainty, and prior confirmed history. Never silently resolve a conflict or delete evidence.
   Keep structured evidence items synchronized. Only user-confirmed or document-verified, metric-complete items belong in `evidenceReferences`; retain unresolved items in the document and coverage queue without making them resume-eligible.
4. Run `evidence-reviewer` for traceability and `privacy-reviewer` for exclusions and sensitive data.
5. Mark career packets, framework mappings, interview stories, `master-resume/master-resume.md`, affected fit assessments, and unsent application packets stale after a material change. Never rewrite immutable outputs, sent artifacts, or history.
   The runtime invalidates the confirmed master resume after a profile or accomplishment change; rebuild it instead of treating the prior file as current.
6. Invoke `$build-master-resume` after the canonical inventory passes both gates; report unresolved items separately.
