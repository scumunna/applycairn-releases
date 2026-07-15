---
name: review-career-memory
description: Search, filter, and review ApplyCairn Career Memory, timeline, evidence coverage, gaps, readiness, and career health. Use for questions about past work, leadership examples, review readiness, or supported competencies.
---

# Review Career Memory

Keep this workflow read-only. Search confirmed accomplishments and raw Career Inbox entries separately; never present an inbox event as verified evidence.

Use only read tools: `search_career_memory`, `list_career_events`, `list_career_evidence`, `get_career_memory_dashboard`, and `list_career_packets`. Do not call a mutation, confirmation, connector-import, export, send, or deletion tool from this workflow.

Filter the timeline by date or review period, employer, role, project, competency, skill, outcome, evidence strength, and visibility. Answer conversational questions with accomplishment IDs, exact source locators, current evidence revision, and honest uncertainty.

Show freshness, goal coverage, competency breadth, recent growth, unresolved conflicts, missing metrics, evidence portability, stale outputs, and the three highest-value follow-ups. Treat a missing category as missing evidence, not inability.

Run `evidence-reviewer` on claim-based answers and `privacy-reviewer` before exposing sensitive source details. Never perform broad connector scans or include private reflection in employer-facing output.
