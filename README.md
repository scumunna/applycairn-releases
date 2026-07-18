<p align="center"><img src="assets/brand/applycairn-mark.svg" width="96" alt="ApplyCairn"></p>

# ApplyCairn 0.4.1

ApplyCairn is proprietary Private Career Memory for Codex and Claude Desktop. Capture work while it is fresh, confirm what becomes canonical, prepare evidence-linked reviews and career cases, and reuse the same accomplishments for an evidence-backed job search. The canonical workspace stays in a local folder the user controls. ApplyCairn does not charge a software fee or request a separate model API key; eligible host accounts and third-party services may have their own costs and limits.

The development source is private. This repository contains the installable runtime, required plugin files, checksums, license, and user documentation. Installed runtime files can be inspected; ApplyCairn is not open source.

![ApplyCairn command center](assets/screenshots/dashboard.png)

The product tour uses fictional demonstration data: [scumunna.github.io/applycairn](https://scumunna.github.io/applycairn/).

## Install in Codex desktop

1. Add this repository as a plugin marketplace:

   ```sh
   codex plugin marketplace add scumunna/applycairn-releases
   ```

2. Open Plugins, verify **ApplyCairn** and the official repository, and choose Install.
3. Start a new task and type `start`.

If v0.2.1 is installed, remove it, install v0.4.1, and start a new task. The user's existing workspace remains separate from the installed runtime; export before upgrading.

## Install in Claude Code

Run `/plugin marketplace add scumunna/applycairn-releases`, then `/plugin install applycairn@applycairn`. Restart Claude Code, open a new empty folder, and type `start`. The plugin includes the compiled local MCP runtime; no separate Anthropic API key is required. The release also includes `ApplyCairn-Claude-Code-0.4.1.zip` for checksum verification and inspection.

## Install in Claude Desktop

Download `ApplyCairn-0.4.1.mcpb` from the [v0.4.1 release](https://github.com/scumunna/applycairn-releases/releases/tag/v0.4.1), compare it with `release-assets/SHA256SUMS.txt`, open it with Claude Desktop, choose a local data folder, and type `start` in a new conversation. Use the same data folder when upgrading.

The artifacts are reproducible and SHA-256 verified. They are not signed with a trusted publisher certificate.

## What `start` does

ApplyCairn creates or resumes a local workspace, asks for a resume, and runs a one-question-at-a-time Career Memory interview. Raw Career Inbox notes remain proposals. `accomplishments/accomplishments.md` is the only claim source; downstream career and job-search packets use current confirmed evidence.

Source labels are not bundled connectors. Gmail is optional and separately authorized for read-only job-status reconciliation. ApplyCairn has no LinkedIn connector and does not scrape LinkedIn or automate messages. Codex scheduling is opt-in and host-dependent. Unattended work never confirms claims, broadly scans connectors, sends, submits, contacts, schedules, edits public profiles, or deletes data.

## Start here

- [New-user quickstart](docs/BROTHER_QUICKSTART.md)
- [Career Memory contract](docs/CAREER_MEMORY.md)
- [Setup and connector recovery](docs/SETUP.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Privacy](docs/PRIVACY.md)
- [Security](SECURITY.md)
- [Verified public claims](docs/CLAIM_MATRIX.md)
- [Release notes](RELEASE_NOTES.md)

## License and authenticity

Copyright 2026 ApplyCairn. All rights reserved. Permission to use ApplyCairn without a software fee does not grant permission to copy, modify, redistribute, rebrand, sublicense, or sell it. Verify artifacts against `release-assets/SHA256SUMS.txt` and install only from this repository.
