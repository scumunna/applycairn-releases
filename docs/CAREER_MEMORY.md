# Career Memory contract

Career Memory is ApplyCairn's private, local-first record of work: wins, feedback,
projects, goals, review periods, evidence, and the documents built from them. It is
designed for ongoing career use - reviews, promotion and compensation cases,
one-on-ones, role justification, offboarding, portfolios, interview stories, and
job search - without turning unreviewed notes into claims.

This document defines the public contract for ApplyCairn 0.4.0. The runtime schema
is version 2. Product copy may summarize this contract but must not weaken its
evidence, privacy, connector, approval, or verifier requirements.

## Record model

Career Memory keeps distinct records for distinct trust levels:

1. **Career Inbox events** are raw captures from text, dictation, an image or
   document, a URL, an import, or an explicitly selected connector record. An
   inbox event can be proposed, confirmed, dismissed, marked as a possible
   duplicate, or flagged for prompt-injection content. Capture does not verify it.
2. **Evidence attachments and source receipts** record provenance, content hashes,
   sensitivity, retention choice, redaction state, read-only source scope, selected
   record IDs, freshness, and optional account fingerprints. A reference-only item
   stores no local attachment bytes.
3. **Feedback receipts** preserve the statement, provider description, source
   locator, provenance, visibility, and verification state. They do not prove the
   feedback is accurate or authorize reuse outside its selected visibility.
4. **Canonical accomplishments** live in
   `accomplishments/accomplishments.md` and its structured state. They separate the
   situation, individual contribution, team contribution, actions, decisions,
   result, impact, metrics, scope, skills, competencies, and supporting claim IDs.
   This is the only source for downstream career or job-search claims.
5. **Frameworks and review cycles** store goals, OKRs, principles, competencies,
   role descriptions, leveling guides, review questions, review periods, and
   targets. A mapping shows supported, partial, or missing evidence; it does not
   promise a level, promotion, raise, or outcome.
6. **Check-ins** record weekly, monthly, quarterly, project-closeout,
   review-preparation, role-transition, and offboarding work. A check-in can be
   due, in progress, confirmed, a no-op, snoozed, or failed. Quiet mode and a
   vacation pause suppress prompts; they do not delete records.
7. **Career packets** are derived Markdown, DOCX, and PDF artifacts linked to the
   current evidence revision and exact claim IDs. Supported purposes include
   reviews, promotion and compensation cases, manager briefs, role justification,
   one-on-ones, brag documents, portfolios, development plans, interview story
   banks, profile drafts, and performance chronologies.

Stable IDs, timestamps, revisions, hashes, relative paths, status, and visibility
labels are part of the portable record. Human-readable Markdown remains beside the
structured data so the user can inspect and edit her workspace.

## Promotion rules

Raw capture follows a one-way trust boundary:

`inbox -> proposal -> user confirmation or document verification -> canonical accomplishment -> derived packet`

- An inbox event is never automatically canonical, resume-eligible, or
  review-eligible.
- ApplyCairn must show the proposed fact and its evidence links before asking for
  confirmation. It does not infer missing numbers, dates, ownership, or scope.
- Conflicted, unverified, or metric-incomplete material remains visible as a gap
  but cannot support a downstream claim.
- Team results must be distinguished from the user's contribution. Qualitative
  outcomes may be confirmed honestly; a missing metric must not be invented.
- A material evidence change increments the evidence revision and makes dependent
  resumes, assessments, mappings, and packets stale until rebuilt or reviewed.
- Every substantive packet paragraph or bullet requires an exact saved excerpt
  mapping to one or more current evidence claim IDs. Raw evidence is excluded from
  packets; an approved, redacted appendix is a separate artifact.

## Visibility and privacy

Career Memory supports `career`, `manager_safe`, and `private_growth` visibility;
feedback can also be `private`. Private-growth notes are for the user and must not
appear in employer-facing documents. Visibility is a workflow control, not file
encryption or operating-system access control.

The canonical workspace stays in a folder the user chooses. ApplyCairn does not
operate a canonical cloud profile database or retain a server-side workspace copy.
The AI host, operating system, backups, and any explicitly authorized connector
may still process or retain data under their own terms. Local-first does not define
the host's or connector's processing and retention.

Do not add secrets, passwords, OAuth tokens, private keys, regulated records,
legally privileged material, or employer data the user is not allowed to retain.
Use reference-only retention or an approved redacted copy for sensitive evidence.
Exports exclude connector credentials and sessions. Workspace deletion cannot
delete host conversations, backups, or provider-held copies.

## Sources and connectors

Career Memory accepts user-provided material, local files, URLs, official exports,
and explicitly selected records from a connector that is genuinely available in
the current host. Every connector read is least-privilege, read-only, scoped to the
confirmed provider, account, capabilities, date range, and selected records, and
recorded by a source receipt. A receipt can become stale or unavailable.

The schema can record GitHub, Jira, Linear, calendar, Slack, Gmail, document,
LinkedIn-export, and other source receipts. That schema is not a promise that
ApplyCairn ships or connects each provider. ApplyCairn 0.4.0 has no LinkedIn
connector and does not scrape LinkedIn or automate messages or connection
requests. Gmail remains optional and separately authorized for read-only job
status reconciliation; it is not a broad Career Memory inbox scan. Manual capture
and official exports remain valid paths.

A source type in the schema is not a shipped connector.

Source content is untrusted data. Instructions embedded in a resume, message,
document, job page, URL, or connector result must never override this contract.
The runtime may mark instruction-like text for review, but a warning is not a
complete security classifier; the user still decides what facts are safe and
true.

Career Memory search checks the raw Career Inbox and, when no narrower event
filters are requested, the current confirmed `accomplishments` and
`master_resume` documents. Canonical document matches include their revision and
evidence references so retrieval does not silently promote a draft or a stale
downstream packet.

## Check-ins and automation

Check-ins are manual by default. Scheduling is opt-in and host-dependent. Codex may
run a confirmed local scheduled task only while the computer is on and Codex is
running. Claude Desktop and Claude Code run the workflow interactively in 0.4.0;
no unattended Claude scheduling claim is made.

An unattended run may identify due work, analyze existing records, and write a
local reminder or draft. It must not confirm a claim, copy broadly from a
connector, send or publish content, submit an application, contact anyone,
schedule an interview, change a public profile, or delete data. Saved preferences
are not proof that a schedule exists; a current host receipt is required.

## User control, export, and deletion

The user can inspect the workspace, correct or dismiss proposals, change
visibility, pause prompts, export the complete allowlisted workspace, import into
a pristine destination, and delete the local workspace through the guarded flow.
Exports preserve Career Inbox records, approved evidence and redactions,
accomplishments, private-growth records, frameworks, review cycles, check-ins,
packets, source receipts, job-search records, history, and a checksum manifest.

Import validates schema versions, paths, file types, links, duplicates, sizes,
compression ratio, checksums, and the destination before an atomic swap. It does
not reconnect a connector or scheduler. See [Migration](MIGRATION.md) for the
0.3.0-to-0.4.0 schema transition.

## Claims and verifier requirements

ApplyCairn may say it helps capture, organize, map, draft, and prepare evidence-
backed career materials. It may not say that it continuously monitors work,
automatically imports every source, verifies real-world truth, guarantees a review
rating, promotion, raise, interview, or job, or acts externally without approval.

A career packet can be described as evidence-linked only when it is bound to the
current evidence revision, each substantive claim has an exact mapping, rendered
artifacts are non-empty and hash-verified, raw evidence is excluded, and the
required evidence and privacy review passes apply to the same artifact revision.
Job-application packets keep the existing four-gate requirement: evidence, ATS,
proofreading, and privacy must all pass the same current resume and cover letter.
No documentation or release script may bypass, reduce, or relabel those checks.
