# ApplyCairn for Claude Code

Install from the official GitHub marketplace:

```text
/plugin marketplace add scumunna/applycairn-releases
/plugin install applycairn@applycairn
```

Restart Claude Code, open a new empty folder, and type `start`; `/applycairn:start` runs the same workflow. The plugin includes 25 skills, 8 read-only reviewer agents, a starter workspace, and its compiled local MCP runtime. It does not require an Anthropic API key.

For local development only, load it with `claude --plugin-dir ./plugins/claude-code`.

ApplyCairn v0.4 keeps a private Career Memory for quick capture, evidence review, recurring check-ins, performance reviews, promotions, compensation cases, role justification, project closeout, offboarding, and job applications. Raw Career Inbox items stay separate from canonical `accomplishments/accomplishments.md`; every reusable claim requires explicit confirmation.

Claude Code runs daily and Career Memory check-ins manually. It must report that no ApplyCairn scheduler is available instead of claiming a recurring task was created. Connectors are read only and explicitly scoped; broad scans, unattended claim confirmation, evidence copying, external messages, applications, profile changes, and deletion are prohibited without the required current approval.
