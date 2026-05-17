# Project Context

<!-- AGENT INSTRUCTIONS: This is your entry point for every task. -->
<!-- Read this file first. Then follow the orchestration rules below to know exactly -->
<!-- which files to read next and which to update when you're done. -->

## Project

- **Name:** `GOK Portfolio`
- **Description:** Personal developer portfolio site to help the owner land a job by showcasing projects, skills, and experience to recruiters and hiring managers.
- **Stack:** Next.js 15 / React 19 / TypeScript / Tailwind CSS v4
- **Design:** Dark / terminal aesthetic — dark background, monospace accents, code-like feel
- **Content Strategy:** Local TypeScript data files for projects, skills, bio (no CMS). Content is placeholder for now — real content added incrementally.

## Current Stage

- **Stage:** Stage 3 — Launch (Phase 4)
- **Objective:** Deploy to Vercel, verify live site, confirm OG tags and Lighthouse scores.
- **Status:** Not started
- **Exit Criteria:** Site live on Vercel URL. Lighthouse Performance + Accessibility ≥90.

## Phases

| # | Phase | Goal | Status |
|---|-------|------|--------|
| 0 | Foundations | Repo scaffold, Next.js + Tailwind setup | done |
| 1 | Foundation UX | Dark layout, fonts, nav, Hero section | done |
| 2 | Core Content | Projects grid, About, Skills sections | done |
| 3 | Polish & Conversion | Contact, Resume download, animations, SEO/OG | done |
| 4 | Launch | Vercel deploy, custom domain | active |

## Active Tasks

| ID | Task | Requirements | Status | Owner |
|----|------|--------------|--------|-------|
| `task-20260516-001` | Phase 1 Foundation UX | V1-REQ-001 to V1-REQ-004 | done | dev |
| `task-20260516-002` | Phase 2 Core Content — Projects, About, Skills | V1-REQ-005 to V1-REQ-007 | done | dev |
| `task-20260517-003` | Phase 3 Polish — Contact, Resume, SEO | V2-REQ-001 to V2-REQ-004 | done | dev |
| `task-20260517-004` | Phase 4 Launch — Vercel deploy | V3-REQ-001 to V3-REQ-003 | planned | dev |

## Key Decisions

| # | Decision | Choice | Why |
|---|----------|--------|-----|
| 1 | Framework | Next.js 15 | File-based routing, SSG, Vercel-native |
| 2 | Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| 3 | Content source | Local TS data files | No CMS overhead for a solo portfolio |
| 4 | Design theme | Dark / terminal aesthetic | Matches dev audience expectations |
| 5 | Hosting | Vercel (planned) | Free tier, Next.js-native deploy |
| 6 | Content approach | Placeholder-first, real content added iteratively | Ship fast, refine on the go |

Full decision log with alternatives in [architecture.md](architecture.md).

## Key Rules

- **File placement:** Follow `rules/structure.md` when creating new files or directories
- **Naming:** camelCase for helpers, PascalCase for components, kebab-case for routes/directories
- **UI work:** Follow `rules/design.md` for colors, components, spacing, and accessibility
- **Bugs:** Check `bugs.md` before investigating any issue — it may already be documented
- **Content:** All real content (name, bio, projects) is TBD — use placeholder text until the owner supplies it

---

## Orchestration Rules

> These rules tell you exactly what to read and what to update for every type of work.
> Follow them on every task — don't read more than needed, don't skip updates.

### Starting a Task

**Read before you start:**
- This file (done) — you know the stage, active tasks, and decisions
- `tasks/index.md` — check if similar work was done before to avoid duplication
- Then follow the rules below based on task type

**Create before you implement:**
- `tasks/task-YYYYMMDD-NNN-[name].md` — goal, plan, requirements being addressed

---

### By Task Type — What to Read

| Task Type | Read These Files |
|-----------|-----------------|
| **Feature / UI work** | `rules/structure.md`, `rules/design.md`, `architecture.md` |
| **API / backend work** | `architecture.md` (full), `rules/structure.md` |
| **Bug fix** | `bugs.md` first, then `architecture.md` for the affected flow |
| **Architecture decision** | `architecture.md` (Key Decisions — check if already decided) |
| **Planning next stage** | `PRD.md`, `playbook.md`, `backlog.md` |
| **Resume previous work** | `tasks/task-[ID].md` for the specific task log |
| **Checking requirements** | `PRD.md` §7 (Requirements Registry) |
| **New component / module** | `rules/structure.md`, `rules/design.md` |
| **Deploy / environment** | `reference.md` (commands, env vars) |

---

### By Task Type — What to Update When Done

| Task Type | Update These Files |
|-----------|--------------------|
| **Any task** | `tasks/task-[ID].md` (log outcome), `tasks/index.md` (status), this file (Active Tasks) |
| **Feature complete** | `PRD.md` §7 (mark requirements done), `playbook.md` (check off DoD items) |
| **Bug fixed** | `bugs.md` (add resolution), task log |
| **Architecture decision** | `architecture.md` (Key Decisions table), this file (Key Decisions summary) |
| **New file / folder created** | `rules/structure.md` (if pattern changes), `reference.md` (File Structure) |
| **Stage complete** | `playbook.md` (mark AC + DoD done, fill Hand-off), this file (Phases table + Current Stage) |
| **New requirement discovered** | `PRD.md` §7 (Requirements Inbox), then assign ID + stage |

---

### Completing a Stage — Checklist

Before marking a stage done, verify:
- [ ] All requirements for this stage are `done` in `PRD.md` §7
- [ ] All Acceptance Criteria checked in `playbook.md`
- [ ] All Definition of Done items checked in `playbook.md`
- [ ] Hand-off note written in `playbook.md` (what the next stage inherits)
- [ ] This file's Phases table updated to `done`
- [ ] Current Stage section updated to the next stage
- [ ] Active Tasks table refreshed with next stage tasks

---

## Reference Docs

| Doc | Purpose |
|-----|---------|
| [PRD.md](PRD.md) | Product vision, epics, features, requirements registry (§7) |
| [playbook.md](playbook.md) | Stage goals, requirements, acceptance criteria, Definition of Done |
| [architecture.md](architecture.md) | Stack, schemas, data flows, decisions |
| [reference.md](reference.md) | Commands, env vars, file structure, quick lookups |
| [rules/structure.md](rules/structure.md) | File organization, naming conventions, module boundaries |
| [rules/design.md](rules/design.md) | Colors, typography, spacing, components, accessibility |
| [bugs.md](bugs.md) | Known issues and resolutions |
| [backlog.md](backlog.md) | Deferred features and future ideas |
| [tasks/index.md](tasks/index.md) | All task history — check before starting similar work |
