---
name: build-master-resume
description: Build or refresh ApplyCairn's broad derived master resume from the canonical accomplishments inventory. Use after evidence changes, completed intake, or when master-resume/master-resume.md is missing or stale.
---

# Build the master resume

1. Read only the current `evidenceReferences` from confirmed `accomplishments/accomplishments.md`. That file remains canonical; `master-resume/master-resume.md` is derived and must never become a new evidence source. Exclude conflicted, unverified, and metric-incomplete items even when their text remains in the questions section.
2. Write `master-resume/master-resume.md` as a broad, untailored inventory of contact details, summary options, skills, complete experience, projects, volunteer/community work, education, certifications, and awards.
3. Preserve exact titles, dates, metrics, scope, and evidence IDs. Exclude unresolved claims from resume-ready sections and list them under Questions.
4. Keep useful variants when the same evidence supports different truthful emphases; do not optimize for one posting or enforce a page limit.
5. Run `evidence-reviewer` to trace every line to canonical evidence and `privacy-reviewer` to enforce exclusions. Rebuild whenever the canonical inventory changes.

Tailored packets may use this file as an index, but every final claim must still be checked against `accomplishments/accomplishments.md`.
