---
name: prepare-career-review
description: Prepare an annual, midyear, quarterly, probationary, or manager one-on-one review from confirmed ApplyCairn evidence. Use for self-evaluations, review questions, manager updates, or review rehearsal.
---

# Prepare a career review

Use `save_career_review_cycle` to record the bounded review, `search_career_memory` to retrieve confirmed evidence, `review_career_packet_readiness` as the fail-closed gate, `generate_career_packet` to render the immutable packet, and `list_career_packets` plus `download_career_packet_file` to verify the exact saved outputs. Never use `register_career_packet` to bypass generation or readiness.

1. Confirm purpose, review period, questions, audience, due date, and allowed visibility. Use only accomplishments confirmed at the current evidence revision.
2. Organize evidence by outcome, competency, goal, growth, and next-period priority. Keep private reflection separate unless the user explicitly selects it.
3. Cite accomplishment IDs and source locators. Label unresolved, qualitative, team-attributed, stale, or conflicting material; never invent a metric or convert feedback into fact.
4. Run independent manager, skip-level, HR, and skeptic readings, then `evidence-reviewer` and `privacy-reviewer`. Repair unsupported or overshared claims before approval.
5. Generate immutable Markdown, DOCX, and PDF outputs tied to the evidence revision. Exclude raw attachments unless the user explicitly approves redacted copies. Mark the packet stale after relevant evidence changes.
