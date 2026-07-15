---
name: prepare-offboarding
description: Preserve permitted personal career evidence before a role transition or employer offboarding. Use when the user is leaving a role, changing teams, losing account access, or preparing an employment transition.
---

# Prepare offboarding

Use `search_career_memory`, `list_career_events`, and `list_career_evidence` to build the inventory. Use `capture_career_event` and `record_career_evidence_decision` for newly reviewed items. Call `export_workspace` only after showing its exact local destination and contents and receiving explicit approval in the current conversation; never treat export as permission to scan or copy an employer account.

Create a user-reviewed inventory of projects, outcomes, feedback, dates, public links, certifications, and contacts the user is permitted to retain. Never advise copying source code, customer or employee data, internal documents, credentials, confidential metrics, or other proprietary material.

Run the `privacy-reviewer` privacy gate on every source. Offer approved local copy, redacted copy, reference only, or cancel; reference only is the default when permission is unclear. Do not broadly scan employer accounts or bypass access controls.

Route proposed accomplishments through `$capture-career-event`, explicit confirmation, and `evidence-reviewer`. Produce a portability and missing-evidence checklist, not legal advice. Never message coworkers, export an account, or change a public profile unattended.
