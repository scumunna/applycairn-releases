# ApplyCairn 0.4.0 release candidate

ApplyCairn 0.4.0 expands the product from an evidence-backed job-search workspace
into Private Career Memory: a local record for capturing work, preparing reviews
and career cases, and carrying confirmed evidence into a job search.

## Career Memory

- Capture wins, feedback, project milestones, role changes, certifications, and
  private-growth notes in a Career Inbox. Raw captures remain proposals until the
  user confirms them or a document supports them.
- Keep evidence attachments, feedback receipts, source receipts, accomplishments,
  goals and frameworks, review cycles, check-ins, and generated packets as linked
  records with stable IDs, revisions, timestamps, hashes, visibility, and
  provenance.
- Separate individual contribution from team outcomes, support exact and honest
  qualitative metrics, mark conflicts and missing details, and make dependent
  materials stale after a material evidence change.
- Map current confirmed evidence to goals, OKRs, principles, competencies, role
  descriptions, leveling guides, review questions, and current or target levels.
- Prepare review, promotion, compensation, manager, role-justification, one-on-one,
  brag-document, portfolio, development-plan, interview-story, profile-draft, and
  performance-chronology materials in Markdown, DOCX, and PDF.
- Run manual weekly, monthly, quarterly, project-closeout, review-preparation,
  role-transition, and offboarding check-ins, with quiet mode, snooze, vacation
  pause, no-op, and visible failure states.

## Evidence and privacy boundaries

- `accomplishments/accomplishments.md` remains the only canonical claim source.
  Career Inbox notes, the master resume, frameworks, job descriptions, and source
  content are navigation or input, never proof.
- Every substantive career-packet claim requires an exact saved excerpt mapping to
  current evidence claim IDs. Rendered artifacts must be non-empty and
  hash-verified. Raw evidence is excluded unless the user creates a separate
  approved redacted appendix.
- `private_growth` and private feedback records stay out of employer-facing output.
  Visibility labels are workflow controls, not encryption.
- Source receipts are read-only and scoped to the confirmed provider, account,
  capabilities, date range, and selected records. Provider labels in the schema do
  not mean a connector is shipped or connected.
- Gmail remains optional and separately authorized for read-only application
  reconciliation. ApplyCairn has no LinkedIn connector, does not scrape LinkedIn,
  and does not automate LinkedIn messages or connection requests.

## Migration and compatibility

- Existing schema-v1 workspaces migrate to schema v2 without changing workspace
  identity, evidence verification states, exact values, or accomplishment history.
- The migration initializes Career Memory and new coaching fields with safe
  defaults. It does not promote old notes, infer metrics, reconnect connectors or
  schedules, or authorize external actions.
- Derived materials may become stale after migration. Career packets require
  current evidence and privacy review; application packets retain the four-gate
  evidence, ATS, proofreading, and privacy requirement on the same artifacts.
- Export before upgrading. Imports still require a pristine destination and never
  reconnect accounts or automation.

## Automation and claims

Check-ins are manual by default. Codex scheduling remains opt-in, local, and
host-dependent; the computer must be on and Codex running. Claude workflows are
interactive in this release. Unattended work may create local reminders or drafts,
but cannot confirm claims, broadly scan connectors, send, submit, contact,
schedule, publish, edit a public profile, or delete data.

Final 0.4.0 tool, resource, skill, agent, and test counts will be published only
from the clean package and test verifiers. The candidate must also pass docs,
version, checksum, extraction, private-source leak, migration, rollback, and
tamper checks before release. Artifacts are not signed with a trusted publisher
certificate.

## Positioning

Approved: “Private Career Memory for evidence-backed reviews, promotions,
compensation cases, role justification, and job search.”

Do not claim continuous workplace monitoring, automatic ingestion from every work
tool, automatic truth verification, unattended claim confirmation, LinkedIn sync,
automatic applications, or guaranteed ratings, promotions, raises, interviews, or
jobs.
