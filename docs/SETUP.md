# Setup

End users do not edit YAML, JSON, CSV, environment variables, or configuration
files. ApplyCairn does not ask for a model API key.

## Before installation

- Use an eligible Codex, ChatGPT, or Claude account for the chosen desktop host.
- Keep the host current enough to install plugins or MCP bundles.
- The packaged runtime requires Node.js 20.19 or newer from the host or system.
- Choose a local folder you control for the ApplyCairn workspace.
- Do not use ApplyCairn v0.2.1 for a new installation.

ApplyCairn itself has no software fee. Host plans, internet access, and third-party
services may have separate costs or usage limits.

## Codex desktop

1. Add `scumunna/applycairn-releases` as a GitHub plugin marketplace. The Codex
   command-line form is:

   ```sh
   codex plugin marketplace add scumunna/applycairn-releases
   ```

2. Open Plugins, select **ApplyCairn**, verify the ApplyCairn name and official
   repository, and choose **Install**.
3. Start a new task. Type `start` and send the message.
4. Add a supported resume when asked: PDF, DOCX, DOC, TXT, or Markdown, no larger
   than 20 MB.
5. Answer one short question at a time. Use the app microphone or the default
   `Ctrl+Shift+D` dictation shortcut when available. ApplyCairn cannot turn on the
   microphone itself.

`start` works from any Codex task folder. The packaged runtime locates its canonical
workspace; it must not create a second hidden fallback workspace.

## Claude Desktop

1. Download `ApplyCairn-0.4.0.mcpb` from the matching official GitHub release.
2. Compare its SHA-256 value with the checksum published in the same release.
3. Open the MCPB with Claude Desktop and choose a local data folder you control.
4. Start a new Claude conversation and type `start`.
5. Attach a supported resume and complete the guided interview.

The bundle includes its local server and starter workspace. It does not require an
Anthropic API key. The v0.4.0 candidate must pass checksum verification before
release but is not signed with
a trusted publisher certificate; the checksum and official repository establish
the available authenticity check for this candidate.

## Claude Code

1. In Claude Code, add the official marketplace:

   ```text
   /plugin marketplace add scumunna/applycairn-releases
   ```

2. Install the plugin:

   ```text
   /plugin install applycairn@applycairn
   ```

3. Restart Claude Code, open a new empty folder, and type `start` or
   `/applycairn:start`.

The plugin includes the compiled local MCP runtime and does not require an
Anthropic API key. The initializer creates a schema-v2 workspace and rejects an
occupied, uninitialized folder instead of overwriting it. Claude Code runs
`daily run` manually; this release does not claim a Claude scheduler. The matching
`ApplyCairn-Claude-Code-0.4.0.zip` is published for checksum verification and
manual inspection; marketplace installation is the normal path.

## Gmail: connect and recover

Gmail is optional. Without it, search, evidence work, scoring, packet creation,
interview preparation, and manual tracker updates still work.

ApplyCairn accepts Gmail as available only after the host returns a fresh receipt
for the user-confirmed masked mailbox, read-only message capability, mailbox
identification, and a successful scoped search. The receipt expires after 15
minutes. ApplyCairn stores fingerprints and minimal status evidence, not OAuth
tokens, addresses, subjects, or message bodies.

If Gmail shows **Disconnected**, **Unavailable**, or **Stale**:

1. In Codex, open Plugins, install or open the official Gmail plugin, choose
   **Connect**, and authenticate directly with Google. In Claude Desktop, open the
   host's Connectors area and connect or reconnect Google. Menu labels may change
   with host releases or be restricted by a workspace administrator.
2. Return to ApplyCairn in a new task or conversation and choose **Check again**, or
   say `check Gmail again`.
3. Confirm the masked mailbox if ApplyCairn detects a different account.
4. If connection is unavailable, choose **Use manual updates** and tell ApplyCairn
   the application status and source. Never paste a password, token, OAuth code,
   full email, or mailbox export into chat.

A sender domain or ATS name alone cannot change tracker status. Gmail evidence
must match the application with stronger signals and cannot replay an older or
contradictory update.

## LinkedIn

ApplyCairn does not ship a LinkedIn connector and must never show LinkedIn as
connected. It does not scrape LinkedIn, download private contact lists, automate
messages, or send connection requests.

Supported inputs are permitted public pages, user-provided public URLs, approved
APIs separately available to the host, and the user's official LinkedIn export.
Job and company research can continue without LinkedIn.

## Career Memory sources

Start with manual capture: say `capture a career event`, paste a short note, or add
an approved local file. ApplyCairn saves it to the Career Inbox first and shows any
proposed accomplishment before confirmation. You can also say `run my career
check-in`, `review my Career Memory`, or `map my evidence to this framework`.

If the host offers a trusted source connector, name the provider, account, date
range, and records you want considered. Availability is checked at that moment.
The presence of GitHub, Jira, Linear, calendar, Slack, Gmail, document, or
LinkedIn-export fields in an ApplyCairn record does not install or authorize a
connector. Broad employer-account scans are not part of the 0.4.0 contract.

## Daily updates

Run `daily update` once interactively. Review the jobs, company research, tracker
changes, failures, and recovery actions. Only after that run succeeds should the
user opt into a Codex scheduled task and confirm the time, timezone, workspace,
scope, and per-run job limit.

Codex scheduled tasks require the computer to be on and the Codex app to be
running. They use the host's unattended permissions. ApplyCairn limits scheduled
runs to reading, analysis, and local workspace writes. They cannot send email,
submit applications, contact people, schedule interviews, edit profiles, or delete
data.

If the daily briefing says the schedule is inactive or stale, open Codex
**Scheduled**, repair or recreate the task, confirm the exact workspace, then ask
ApplyCairn to check the scheduler again. Preferences alone never count as an active
schedule.

## Upgrade to v0.4.0

Export the workspace, remove the old runtime, install v0.4.0, start a new task, and
select the same workspace in Claude Desktop. The runtime upgrades schema-v1
metadata and canonical accomplishments to schema v2 and creates the Career Memory
ledger without changing existing claim verification states. Derived documents may
be marked stale and should be rebuilt. Import and rollback do not reconnect
connectors or schedules. See [Migration](MIGRATION.md).
