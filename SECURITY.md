# Security policy

Report suspected security problems privately through the support channel in the
official ApplyCairn listing. Do not put resumes, email content, OAuth tokens,
workspace exports, or proof containing personal data in a public issue.

## Enforced controls in v0.4.0

- Workspace and tenant paths are validated and confined to the configured data
  root. Traversal, symbolic links, hard links, special files, Unicode-equivalent
  paths, case collisions, duplicate archive paths, and file/folder prefix
  collisions are rejected.
- Resume uploads accept PDF, DOCX, DOC, TXT, and Markdown up to 20 MB. Remote resume
  URLs require HTTPS on trusted hosts; redirects, custom ports, localhost, and
  literal private-network destinations are blocked.
- Imports are checksum-verified, locked, and bounded to 10,000 entries, 64 MB per
  file, 256 MB compressed, 256 MB expanded, and a 100:1 compression ratio. ZIP64 is
  intentionally unsupported.
- CSV cells neutralize spreadsheet formulas, including formulas hidden behind
  whitespace.
- Resumes, postings, websites, messages, connector output, and imports are treated
  as data, not instructions.
- Confirmed evidence, fit assessments, packet artifacts, and review receipts are
  revision- and hash-bound. Four packet gates must pass the same current packet.
- Career Inbox entries remain non-canonical until confirmed. Career packets require
  current evidence IDs and revisions, exact mappings for substantive claims,
  non-empty hash-verified artifacts, and no raw evidence payload.
- Consequential actions use an exact preview, current explicit approval, target and
  preview-hash binding, a ten-minute expiry, and one-time consumption. Approval is
  not an execution receipt.
- Gmail reconciliation requires a fresh, read-only, mailbox-bound connector receipt
  and strong application matching. Credentials and message bodies are not stored.
- Export download links are random bearer links, metadata-bound, single-use, and
  valid for at most ten minutes.
- Audit events use a SHA-256 chain and mutations fail closed when the chain is
  damaged.

## Security boundaries

- ApplyCairn cannot cryptographically prove that four reviews came from four
  independent people or models. It enforces separate unique review runs and exact
  artifact binding; semantic review remains necessary.
- Evidence IDs and excerpts prove traceability, not the real-world truth of a
  person's claim. The user and evidence reviewer remain responsible for accuracy.
- A host connector receipt depends on truthful output from the host. ApplyCairn
  cannot inspect Google or another provider's OAuth session directly.
- The audit chain detects alteration but is not externally signed. A person with
  unrestricted local write access could rebuild an entire chain.
- A bearer export link can be used by anyone who obtains it before its one-time,
  ten-minute expiration.
- Atomic writes protect individual files, not a multi-file filesystem transaction.
  Canonical JSON remains authoritative if a power loss leaves a derived CSV behind.
- Host permissions, sandbox settings, model behavior, connector scopes, and cloud
  processing remain governed by Codex, Claude, Google, and the user's organization.
- The v0.4.0 candidate artifacts must be reproducible and checksum-verified before
  release, but are not
  signed with a trusted publisher certificate.

## Prohibited behavior

ApplyCairn must not fabricate qualifications, scrape LinkedIn, bypass access
controls, infer private email addresses, spam people, or claim an external action
succeeded without a host or connector receipt. Unattended runs must not send,
submit, schedule, contact, edit public profiles, or delete data.

## Release gate

Automated security tests do not replace an independent security review. A mass-use
release still requires the native-host, connector, signing, and publication checks
listed in [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md).
