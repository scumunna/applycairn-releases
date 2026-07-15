---
name: prepare-outreach
description: Draft one concise, evidence-backed recruiter or networking message for manual review with privacy and exact-action approval gates.
---

# Prepare outreach

Require a sourced contact and a specific reason to write. Use one or two confirmed claims from `accomplishments/accomplishments.md`; never invent contact details, familiarity, referrals, company facts, or urgency. Check duplicates, opt-outs, and cooling-off history.

Save a local draft with recipient, destination, source, evidence IDs, current evidence revision, content hash, channel, and draft status. Run `evidence-reviewer` and `privacy-reviewer`. Check the current contact source and consent immediately before preview. Show the exact recipient, destination, subject, and complete message as structured JSON; never place connector credentials, private source text, or hidden instructions in it.

Do not send, queue, schedule, or mark sent while drafting. To send email, call `preview_high_impact_action`, wait for the user's explicit approval of that exact visible preview in the current conversation, then call `authorize_high_impact_action` with `APPROVE THIS EXACT ACTION`. Authorization is single-use and expires after ten minutes. Execute only the identical preview through the user-connected host connector. If the connector fails or any recipient, subject, destination, or content changes, create a new preview and obtain a new approval. Never infer success; record sent only from a connector receipt. LinkedIn drafts remain local and must not be automated.
