---
name: proofread-review
description: Run ApplyCairn's mandatory evidence, ATS, human-writing, and privacy gates on a tailored application packet and repair failures at the source.
---

# Proofread review

Run `evidence-reviewer`, `ats-reviewer`, `proofreader`, and `privacy-reviewer` as separate reviewer runs against the same current packet ID. Give each a unique reviewer-run ID. A drafting agent cannot impersonate a reviewer or combine several roles into one pass. Require all four to pass.

- Evidence: every claim maps to confirmed `accomplishments/accomplishments.md` evidence; the master resume alone is insufficient.
- ATS: single column, standard headings, extractable text, truthful keywords, consistent dates, correct filenames, resume at most two pages, cover letter one page.
- Human: correct company/role, natural voice, grammar, tense, specificity, and no stale template text.
- Privacy: contact details and sensitive facts match profile exclusions; no secrets, hidden text, or unnecessary personal data.

Inspect the saved Markdown, DOCX, PDF, manifest hashes, extracted text, measured pages, company, role, contact snapshot, evidence revision, profile revision, and job fingerprint. Record each result with `record_packet_review`; reviewers never supply artifact hashes. PASS requires zero retained findings. Fix Markdown sources, call `save_application_packet` to create a new revision, and rerun every gate for at most three rounds. Never carry a review forward. Keep the packet unready while any gate fails. PASS never authorizes sending or submission.
