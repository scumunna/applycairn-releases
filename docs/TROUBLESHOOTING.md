# Troubleshooting

ApplyCairn errors should state what failed, what remains safe, one concrete recovery
action, and a retry. If an error does not do that, capture the non-sensitive error
text and report it privately.

## `start` does nothing or ApplyCairn tools are missing

1. Confirm ApplyCairn v0.4.0 is installed and enabled from the official
   `scumunna/applycairn-releases` marketplace.
2. Remove v0.2.1 if it is still installed. Install v0.4.0 again; a stale Codex cache
   can retain the older first-launch defect.
3. Start a new task or conversation. Installed plugin changes may not appear in an
   already-open task.
4. Type `start` again.

Do not create a second workspace manually. If the packaged runtime cannot locate
the canonical workspace, it must fail visibly instead of creating a hidden fallback.

## The resume cannot be stored

- Use a non-empty PDF, DOCX, DOC, TXT, or Markdown file no larger than 20 MB.
- Confirm the file content matches its extension. Renaming a damaged file does not
  repair it.
- Remove password protection, macros, or unsupported wrappers and export a clean
  copy from the original application.
- If two versions have the same filename, upload both. ApplyCairn stores distinct
  content without silently overwriting a prior source.
- If a URL upload fails, attach the local file. Remote URLs are restricted to
  trusted HTTPS hosts and do not follow redirects.

After retrying, say `start`. A replacement resume must trigger extraction and
clarification; it must not silently replace confirmed accomplishments.

## Gmail is disconnected, stale, or using the wrong account

What still works: resume and accomplishment work, master resume, public-web job
research, scoring, packet creation, interview preparation, and manual tracking.

1. Open the current host's Plugins or Connectors area.
2. Connect or reconnect the official Gmail or Google connector directly with
   Google. Ask a workspace administrator if plugin access is managed.
3. Return in a new task and say `check Gmail again`.
4. If the masked mailbox changed, confirm the intended account or reconnect the
   previous one.
5. If it still fails, say `use manual updates`.

Gmail receipts expire after 15 minutes. A fresh check can therefore be required
even when the account was connected earlier. Never paste credentials or full email
content into chat.

## LinkedIn says disconnected

There is nothing to connect in ApplyCairn v0.4.0. The product has no LinkedIn
connector and must display connection claims as unsupported. Use permitted
public-web research, provide a public URL, or import your official LinkedIn export.
Do not authorize scraping or automated messages.

## The daily update did not run

1. Open Codex **Scheduled** and inspect the latest run.
2. Confirm the computer was on, Codex was running, and the task points to the exact
   ApplyCairn workspace.
3. Repair or recreate the scheduled task if the host receipt is missing or stale.
4. Say `run the failed daily stage again` to retry only the failed stage when safe.

A saved preference is not an active schedule. Claude users should type `daily run`
manually; this release does not claim unattended Claude scheduling.

## A daily stage partially failed

ApplyCairn preserves successful stages. Read the stage's recovery action, fix that
source, then retry only that stage. Gmail reconciliation cannot be recorded as
successful without a fresh read-only connector receipt. Disabled stages are
reported as skipped, not successful.

## A packet is not ready

A current APPLY or STRETCH assessment and four PASS receipts—evidence, ATS,
proofreading, and privacy—must bind the same immutable packet revision. Changes to
accomplishments, profile, posting, fit, or packet invalidate old receipts. Rebuild
the packet and rerun all four reviews.

For a career packet, confirm that every substantive paragraph and bullet maps
exactly to current evidence claim IDs, the evidence revision is current, raw
evidence is excluded, and evidence and privacy reviews pass on the same artifact.
Private-growth and private feedback records cannot be copied into an employer-
facing packet.

## A Career Memory item is missing from a packet

Open the Career Inbox and inspect the item's status, visibility, evidence links,
metric state, and possible-duplicate marker. Inbox, proposed, conflicted,
metric-incomplete, private-growth, and dismissed items are intentionally excluded.
Confirm or correct the proposal interactively, then rebuild stale derived files.
Do not edit structured JSON or weaken the verifier to force the item through.

## An approved action did not happen

Approval only authorizes one exact preview for one target for ten minutes. It does
not prove delivery or submission. If the host action failed, the preview changed,
or the approval expired, create a new preview and ask for approval again. Do not
mark the action complete without a host or connector receipt.

## Export or import fails

- Make a new export; download links expire after ten minutes and work once.
- Import only into the new, untouched canonical workspace. If anything has already
  been added or edited there, export or preserve it and start with a fresh workspace.
- Do not add secrets, tokens, logs, links, special files, duplicate paths, or case-
  colliding names to an archive.
- ZIP64 and archives over the documented limits are rejected intentionally.
- After import, type `start` and confirm the reported checkpoint, accomplishments,
  and master-resume state. Connector and scheduler records remain historical only.

## Safe support report

Include the ApplyCairn version, desktop host and version, operating system, failing
step, exact non-sensitive error, and whether retry worked. Exclude resumes, email
content, tokens, full workspace exports, personal paths, and private contact data.
