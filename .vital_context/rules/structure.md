# Project Structure & Conventions — GOK Portfolio

## Repository Layout

```
GOK-Portfolio/
├── .claude/
│   └── agents/
│       └── pm.md               # PM sub-agent system prompt
├── .vital_context/             # Project documentation (this folder)
│   ├── CONTEXT.md              # Entry point — read first
│   ├── PRD.md                  # Requirements
│   ├── playbook.md             # Stage progress
│   ├── architecture.md         # Stack, data models, decisions
│   ├── reference.md            # Commands, quick lookups
│   ├── bugs.md                 # Known issues
│   ├── backlog.md              # Deferred ideas
│   ├── rules/
│   │   ├── structure.md        # This file
│   │   └── design.md           # Design system
│   └── tasks/
│       ├── index.md            # Task registry
│       └── task-*.md           # Individual task logs
├── public/
│   └── resume.pdf              # Resume (add when available)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, dark bg
│   │   ├── page.tsx            # Home — composes all section components
│   │   └── globals.css         # Global CSS, Tailwind base
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── projects.ts         # Project list
│   │   ├── skills.ts           # Skills list
│   │   └── bio.ts              # Owner bio, contact info
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| React components | PascalCase | `ProjectCard.tsx`, `Hero.tsx` |
| Data files | camelCase | `projects.ts`, `bio.ts` |
| Type/Interface | PascalCase | `Project`, `Bio`, `SkillGroup` |
| CSS classes | Tailwind utilities only | no custom class names unless necessary |
| Directories | kebab-case | `task-logs/` |
| Task files | `task-YYYYMMDD-NNN-name.md` | `task-20260516-001-phase1-foundation.md` |

---

## Module Boundaries

- **`src/components/`** — pure UI, no data fetching, no routing logic
- **`src/data/`** — static TypeScript data files; imported directly by components
- **`src/types/`** — shared interfaces; no logic, only types
- **`src/app/page.tsx`** — composes sections; imports components, passes no props (components import data directly)

---

## Import Convention

```typescript
// 1. React / Next.js
import { ... } from 'react'
import { ... } from 'next/...'

// 2. Third-party
import { ... } from 'some-lib'

// 3. Internal components
import Hero from '@/components/Hero'

// 4. Internal data / types
import { bio } from '@/data/bio'
import type { Project } from '@/types'
```

Use `@/` alias (configured in `tsconfig.json` as `src/*`).

---

## Tailwind v4 Notes

- No `tailwind.config.js` — configuration is done via CSS in `globals.css`
- Dark background is set globally on `<html>` or `<body>`, not via `dark:` class
- Custom colors/tokens are defined as CSS variables in `globals.css` if needed
