---
name: daily-run
description: Run or optionally schedule ApplyCairn's idempotent Career Memory, discovery, tracker, deadline, and briefing workflow with truthful connector reporting and partial-failure recovery.
---

# Daily run

For a run now:

1. Verify onboarding and inspect actual connector/tool availability. Never infer connection from documentation, prior state, or a demo.
2. Check due Career Memory reminders through `$run-career-check-in`, then run `$discover-jobs`, refresh `$target-companies`, reconcile `$update-tracker`, and show `$show-dashboard` results.
3. Check new or changed evidence, unresolved Career Inbox items, review dates, stale career packets, jobs, expirations, follow-ups, deadlines, and interviews. A daily run may create a local reminder or draft, but may not confirm an accomplishment, copy an attachment, send, submit, schedule interviews, or edit profiles.
4. Append the run ledger by recording each stage under one run ID and the current date in the confirmed IANA timezone. Include exact evidence receipts and `itemsProcessed`; every connector failure must include `recoveryAction`. Discovery and assessment must stay within `maxJobsPerRun`. Disabled discovery or tracker review must be recorded as skipped, never successful. If Gmail reconciliation was requested, that stage cannot succeed without citing a fresh read-only `connector-check:<id>` receipt for the confirmed mailbox. Repeating the exact terminal result is idempotent; changing a terminal result requires a new run ID. Preserve successful writes and continue independent steps after a partial failure.
5. Run `privacy-reviewer` on connector use and the final report. State unavailable, disconnected, stale, partial, or connected precisely. Never broaden a source beyond the explicitly approved provider, account, scope, date range, and selected records.

Every skipped or failed step must end with a recovery action the user can take. For Gmail, say what still completed without email, then offer these exact paths: **Connect Gmail** (identify the current desktop host, guide the user through its in-app plugin or connector flow, request read-only access, and verify with a fresh receipt), **Check again**, or **Use manual updates**. Never ask for a password, token, or OAuth secret in chat. For LinkedIn, do not show a connect action unless a trusted host connector is actually available; offer safe public-web research and manual profile review instead. For scheduler failures, explain that Codex Desktop must be open on the computer and offer to repair or recreate the local scheduled task. Preserve successful stages and retry only the failed stage when safe.

For recurrence, first run the complete workflow once and show the result. Only after that test passes, ask whether the user wants to opt in and confirm cadence, local time, timezone, workspace, and scope. Do not create a schedule for the developer or infer consent.

Codex desktop Scheduled tasks may run the local project, plugin, and skills in the background only while the computer is on and the Codex app is running. Because unattended tasks use `approval_policy=never`, the scheduled workflow is strictly read, analyze, and write-local-reminder-or-draft-only: never confirm claims, copy evidence, broadly scan sources, send email, submit applications, delete data, schedule interviews, contact people, or change public profiles. Create it only through host-supported automation after explicit approval in the current conversation. After the host confirms success, call `record_scheduler_receipt` promptly with the returned task ID, exact canonical workspace, matching cadence, timezone, and host timestamp; never mark the scheduler active from preferences alone or reuse a stale receipt.

Claude Code has no ApplyCairn scheduler contract. Report that truthfully and offer the manual daily command; never claim a schedule exists without a host receipt.
