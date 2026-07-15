---
name: closeout-project
description: Close out a completed or changed project by reconciling milestones, final outcomes, lessons, evidence, and reusable accomplishments without erasing history.
---

# Close out a project

Use `search_career_memory` and `list_career_events` to reconcile existing milestones, `capture_career_event` for each raw final fact, `propose_career_accomplishments_revision` for the reviewed proposal, and `confirm_candidate_document_revision` only after the user confirms the exact current hash. Finish with `get_career_memory_dashboard`; never edit canonical files or state JSON directly.

1. Identify the project, period, goal, participants, milestones, and reason for closeout. Preserve prior events and decision-journal history.
2. Ask what shipped, changed, failed, was learned, and produced lasting quality, quantity, time, cost, revenue, risk, customer, reliability, growth, or team effects.
3. Reconcile milestones with the final outcome. Detect duplicate or contradictory numbers and preserve individual contribution separately from team credit.
4. Keep lessons and setbacks private unless the user selects them for development output. Route each final accomplishment through explicit confirmation and `$update-accomplishments`.
5. Run `evidence-reviewer` and the `privacy-reviewer` privacy gate. Report stale packets and framework coverage changes; never confirm claims or publish a retrospective unattended.
