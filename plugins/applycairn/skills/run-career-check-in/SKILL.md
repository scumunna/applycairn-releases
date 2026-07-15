---
name: run-career-check-in
description: Run ApplyCairn's weekly capture, monthly audit, quarterly roll-up, project, or review-preparation check-in. Use for recurring Career Memory maintenance, due check-ins, or career evidence reminders.
---

# Run a career check-in

Use `get_career_memory_dashboard` to select the due prompt, `update_career_memory_preferences` only for user-requested cadence or quiet-mode changes, `record_career_check_in` for the bounded outcome, and `capture_career_event` for any raw update. A scheduled run must not call proposal confirmation, evidence-copy, packet-download, connector-import, send, export, or deletion tools.

Select the due scope: weekly asks one tailored capture question; monthly audits gaps, numbers, proof, invisible work, responsibilities, and feedback; quarterly summarizes confirmed themes and next-period gaps. Ask one question at a time and stop after a confirmed update, clean no-op, snooze, or defer.

Route new material through `$capture-career-event`. Run `evidence-reviewer` and `privacy-reviewer`; preserve partial successes and record duplicate, stale, skipped, failed, or quiet-mode runs truthfully.

Scheduling is opt-in. Confirm cadence, time, timezone, workspace, scope, vacation pause, and source controls. An unattended run may create a local due item or draft only; it must never confirm a claim, broadly scan a connector, copy evidence, send, publish, or contact anyone. Claude Code has no ApplyCairn scheduler contract; offer the manual check-in command.
