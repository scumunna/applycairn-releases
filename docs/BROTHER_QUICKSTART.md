# ApplyCairn quickstart

Use this page to hand ApplyCairn to a new Codex user.

## The whole setup: four steps

### Step 1: Install and type `start`

Install ApplyCairn v0.4.0 from the official ApplyCairn marketplace in Codex
Plugins. Open a new task and type `start`. ApplyCairn creates one local workspace
and shows you where it is. There is no config file and no model API key.

### Step 2: Upload your resume

Attach a non-empty PDF, DOCX, DOC, TXT, or Markdown resume under 20 MB. If you have
more than one, attach them all. ApplyCairn keeps the originals and proposes an
accomplishment inventory for review.

### Step 3: Build Career Memory

Answer one question at a time about work, projects, school, volunteering,
leadership, training, caregiving, and personal achievements. Type or use the
desktop app's microphone. ApplyCairn confirms each fact before saving it.

### Step 4: Review and use it

Confirm the proposed facts, then ask for a review, promotion, compensation,
manager, portfolio, interview-story, or job-search packet. Ask `show my downloads`
at any time to receive:

- accomplishments, master resume, and profile as Markdown;
- career packets as Word, PDF, and Markdown;
- each tailored resume as Word, PDF, and Markdown;
- each cover letter as Word, PDF, and Markdown; or
- one checksummed ZIP containing the complete workspace.

## What ApplyCairn asks about

When the app offers dictation, press `Ctrl+Shift+D` or use its microphone and speak naturally.
ApplyCairn will split a long answer into proposed facts and ask you to confirm each
one before saving it.

The interview covers:

- paid work;
- contracts and internships;
- personal projects;
- school and education;
- volunteering and community work;
- leadership and awards;
- certifications and training;
- caregiving and other life experience.

`accomplishments/accomplishments.md` is the only source for resume claims.
`master-resume/master-resume.md` is a broad resume rebuilt from confirmed evidence.
Tailored resumes and cover letters must trace back to the accomplishments file.

## Keep Career Memory current

Say `capture a career event` after a win, useful feedback, a milestone, a role
change, or a certification. The note enters the Career Inbox; it is not canonical
until you review the proposed fact and confirm its evidence. Say `run my career
check-in` for a weekly, monthly, quarterly, project-closeout, review-preparation,
role-transition, or offboarding review.

Private-growth notes stay out of employer-facing packets. A scheduled check-in may
write a local reminder or draft, but it cannot confirm a claim or scan a connector
broadly while unattended.

## Connect Gmail, or keep going without it

Gmail is optional. It helps reconcile recruiter and application-status messages;
it does not block the rest of ApplyCairn.

If ApplyCairn says Gmail is disconnected:

1. Open Codex **Plugins** and connect the official Gmail plugin directly to Google.
2. Start a new task and say `check Gmail again`.
3. Confirm the masked mailbox if asked.
4. If connection is unavailable, say `use manual updates` and enter status changes
   yourself.

Never paste a Gmail password, token, OAuth code, full message, or mailbox export
into chat. ApplyCairn uses read-only receipts for status reconciliation. It cannot
claim Gmail is connected from a demo or an old check.

ApplyCairn has no LinkedIn connector. It can use permitted public pages, URLs you
provide, and your official LinkedIn export. It does not scrape LinkedIn or send
messages or connection requests automatically.

## Turn on the daily rundown

After onboarding, say:

```text
run my daily update now
```

Review the first run. If it is correct, tell ApplyCairn the local time and timezone
you want and explicitly approve a Codex scheduled task. A schedule is active only
after Codex returns a host task receipt.

The computer must be on and Codex must be running at the scheduled time. The daily
run can research, score, reconcile, and update local files. It cannot send email,
submit an application, contact anyone, schedule an interview, edit a profile, or
delete data while unattended.

## If anything goes wrong

Say `start` again. ApplyCairn resumes the last verified checkpoint. It should state
what failed, what remains safe, one exact recovery action, and a retry option.

Use [Troubleshooting](TROUBLESHOOTING.md) if reinstalling, Gmail, resume upload,
scheduling, or workspace recovery needs more detail.

## Own, move, or delete your data

Say `show my downloads` to choose individual Markdown, Word, or PDF files. Say
`export all my ApplyCairn data` to create a checksummed local ZIP. On a fresh
installation, say `import my ApplyCairn export` and choose that ZIP. Import works
only before the new canonical workspace has been changed, never reconnects an
account, and refuses to overwrite existing user data.

To remove the canonical local copy, say `preview deleting my ApplyCairn data`.
Check the displayed folder, file count, byte count, and snapshot before approving.
If anything changes, ApplyCairn requires a new preview. Deletion does not remove
exports, system backups, desktop conversation history, or provider-held data.
