# Privacy policy

Effective for ApplyCairn v0.4.0 release candidate. Last updated July 15, 2026.

## What ApplyCairn stores

ApplyCairn keeps the canonical job-search workspace in a local folder selected or
controlled by the user. Depending on the workflow, that folder can contain raw
Career Inbox events, evidence attachments, source and feedback receipts, confirmed
accomplishments, private-growth notes, goals and frameworks, review cycles,
check-ins, career packets, resumes, jobs, company research, tracker history,
application packets, approvals, interviews, outreach drafts, and audit records.

ApplyCairn does not operate a canonical cloud profile database and does not retain
a server-side copy of that workspace. The local runtime does not use Career Memory
or job-search data to train an ApplyCairn model and does not sell that data.

Raw Career Inbox material is not a verified claim. Visibility labels separate
career, manager-safe, private-growth, and private feedback uses. ApplyCairn excludes
private-growth and private feedback material from employer-facing output, but the
labels do not encrypt files or replace operating-system permissions.

## Host and connector processing

The user's desktop AI host processes prompts, attachments, and tool results under
the host's own terms and account settings. Google and any other connector provider
process authorized data under their own terms. Local-first storage does not mean
that host model or connector processing is offline.

ApplyCairn does not request an OpenAI or Anthropic model API key. It also does not
store Gmail OAuth credentials. Gmail receipts retain only the minimum evidence
needed for reconciliation: a masked-mailbox fingerprint, message fingerprint,
sender domain, detected status, match signals, and event time. Addresses, subjects,
message bodies, passwords, tokens, and OAuth codes are excluded from those receipts.

ApplyCairn has no LinkedIn connector. It must not record LinkedIn as connected. A
user may provide public URLs or an official export, which then becomes part of the
user-controlled workspace.

Career Memory can store read-only source receipts for explicitly selected records.
Supported receipt labels include GitHub, Jira, Linear, calendar, Slack, Gmail,
documents, LinkedIn exports, and other sources. These labels do not mean those
connectors are installed or available. ApplyCairn must verify the current host
tool, account, scope, date range, and selected records before a connector read.

## Public website analytics

The public website at `https://scumunna.github.io/applycairn/` loads the Google
Analytics 4 tag for measurement ID `G-RZ85K4JD4B`. Analytics storage is denied by
default; page-view measurement and analytics storage are enabled only after a
visitor chooses **Allow analytics**. Advertising storage, advertising user data,
personalization, Google Signals, and ad-personalization signals remain disabled in
the website code.

Google may process public-website usage and device data under its own terms. The
public website has no resume upload form and cannot access a user's local
ApplyCairn workspace, so resumes, accomplishments, job records, and application
packets are not sent through this website tag. Visitors can reopen **Analytics
choices** from the footer to change future collection and can use browser controls
to remove existing cookies.

## Export, import, and deletion

Users can export the complete portable workspace, including canonical records,
approved evidence and redactions, private-growth records, artifacts, reviews,
approvals, connector receipts, histories, and workflow ledgers. Exports exclude
access tokens and connector sessions. Importing
an archive does not reconnect an account. Import is accepted only into a new,
untouched canonical workspace; ApplyCairn validates the archive in staging and
rolls back instead of overwriting existing user data.

Downloadable export links are single-use bearer links and expire after ten minutes.
Anyone who obtains a valid link during that window could use it once, so do not
share it. Local exports do not create a public URL.

The default portable ZIP is checksummed but not encrypted. The local CLI also
supports an `.acx` passphrase-protected export using AES-256-GCM; the passphrase
is never stored in the workspace and cannot be recovered by ApplyCairn. Keep it
separate from the encrypted file.

Deleting the local workspace permanently removes ApplyCairn's canonical copy from
that location after a separate destructive approval bound to the displayed path,
file count, byte count, and current content snapshot. Any intervening workspace
change requires a new preview. Deletion does not remove copies
already exported, files backed up by the operating system, host conversation
history, connector-provider data, or data retained under another provider's terms.
Revoke Gmail or other host connections separately in the host's account settings.

## Logs and audit records

ApplyCairn audit events describe workflow operations and use a tamper-evident hash
chain. They exclude resume text, generated packet contents, access tokens, and
email bodies. Some local records necessarily include company names, job titles,
source URLs, evidence IDs, statuses, and timestamps so the workflow remains
traceable.

## User choices

Users can continue without Gmail, avoid LinkedIn-derived inputs, decline daily
scheduling, keep check-ins manual, enable quiet mode or a vacation pause, edit or
dismiss proposals, correct confirmed accomplishments, export the workspace, revoke
host connectors, and delete the local workspace. Consequential external actions
require a current exact preview and explicit approval.

For a suspected privacy or security issue, use the private support channel in the
official ApplyCairn listing. Do not attach personal data to a public report.
