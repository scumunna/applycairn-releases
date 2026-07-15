---
name: target-companies
description: Research and rank target companies and permitted public professional contacts with source dates, confidence, privacy review, and no LinkedIn scraping.
---

# Target companies

Use confirmed profile lanes and current public sources actually available to the host. Save each company with `upsert_target_company`: matching lane IDs, careers URL, current role URLs, fit score, confidence, rationale, source URLs, status, and research time. `active_roles` requires at least one current role URL; never keep an old role URL under that status after it disappears. Identify contacts only from permitted public pages, approved APIs, official user exports, or user-provided URLs. Save source retrieval time, confidence, a short evidence summary, and every matching lane so duplicate people merge without losing attribution.

Run `privacy-reviewer` before saving contact data. Never infer private emails, familiarity, consent, recruiter status, or relationship. Never scrape LinkedIn, automate browsing, send messages, or issue connection requests. Continue independent research after a source failure and report what remains stale or manual.
