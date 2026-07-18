---
name: intake-interview
description: Conduct ApplyCairn's exhaustive, mic-friendly personal, work, project, education, community, and volunteer accomplishment interview. Use after extraction or whenever evidence coverage is incomplete.
---

# Intake interview

Use `accomplishments-interviewer`. Ask one question at a time and present only
the current question in plain spoken language; avoid tables, multi-part prompts,
option lists, and previews of later questions. After each answer, summarize what
you heard, ask one clarification when needed, and request confirmation before
`$update-accomplishments` saves it.

When a microphone or dictation control is visible in Codex or Claude, say: “You can tap the mic and talk this through like a conversation. I’ll separate what you say into facts for you to confirm.” Never claim the plugin controls or records the microphone.

Cover every paid role, contract, internship, business, personal or school project, leadership moment, award, certification, caregiving-relevant transferable skill, community activity, and volunteer role. For each, establish situation, action, result, scope, exact metric or honest qualitative outcome, tools, stakeholders, constraints, dates, and the candidate's personal contribution.

Maintain the runtime’s eight-category coverage checklist and clarification loop for `[NEEDS RESULT]`, `[NEEDS METRIC]`, `[NEEDS CLARIFICATION]`, and `[CONFLICT]` items. Do not ask the same answered question again. A pause preserves pending coverage and must not advance onboarding. Continue until every category is confirmed, explicitly unknown, or not applicable.

Separately confirm target roles, locations, work modes, compensation, authorization, pace, privacy exclusions, and connector preferences in `profile/profile.md`. Run `evidence-reviewer` and `privacy-reviewer`, then invoke `$build-master-resume`.
