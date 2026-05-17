# Product Requirements Document

## Document Meta

| Field | Value |
|-------|-------|
| **Product Name** | GOK Portfolio |
| **Version** | 1.0 |
| **Owner** | GOK (Gowtham) |
| **Status** | In Progress |
| **Last Updated** | 2026-05-16 |

---

## 1. Product Overview

- **What:** A personal developer portfolio website that showcases projects, skills, and experience.
- **Why:** The owner needs a professional online presence to attract inbound job offers from recruiters and hiring managers.
- **Who:** Recruiters, hiring managers, and technical leads evaluating candidates.

---

## 2. Personas

### Persona 1 – Recruiter
- **Profile:** HR/talent professional, scans many portfolios quickly, non-technical
- **Goals:** Quickly confirm the candidate's role fit and contact them
- **Frictions:** Too much information, hard to find contact info, no resume
- **Success:** Reads name + role in 3 seconds, finds resume or email in under 30 seconds

### Persona 2 – Hiring Manager / Tech Lead
- **Profile:** Technical evaluator, checks code quality and problem-solving depth
- **Goals:** Validate real-world skills through projects and GitHub links
- **Frictions:** Vague project descriptions, no live demos or code links
- **Success:** Clicks GitHub, sees clean code, decides to move forward with interview

### Persona 3 – Owner (GOK)
- **Profile:** Developer maintaining their own portfolio
- **Goals:** Update projects and content without friction
- **Frictions:** CMS login flows, complex redeploy steps
- **Success:** Edits a TypeScript data file, pushes, site updates

---

## 3. Problem Statements

| # | Problem | Who | Urgency |
|---|---------|-----|---------|
| 1 | No public portfolio to share with recruiters | Owner | Critical |
| 2 | Recruiters can't quickly identify role + skills | Recruiter | Critical |
| 3 | Hiring managers can't verify project depth | Hiring Manager | Important |

---

## 4. Goals & Success Metrics

| Metric | Baseline | Target | Notes |
|--------|----------|--------|-------|
| Time to find contact info | N/A | <30 seconds | Recruiter persona |
| Projects visible above fold (desktop) | N/A | ≥1 project card | |
| Lighthouse Performance score | N/A | ≥90 | After Phase 3 |
| Lighthouse Accessibility score | N/A | ≥90 | After Phase 3 |

---

## 5. Scope

### In Scope (Current Release)
- Hero section with name, role, CTA
- Projects section (3–5 cards with tech stack, links)
- About section (bio)
- Skills section
- Contact (email or form)
- Resume download
- Dark / terminal aesthetic design

### Out of Scope
- Blog / articles → tracked in backlog.md
- CMS integration → backlog.md
- Authentication of any kind
- Analytics dashboard
- Multi-language support

### Assumptions & Constraints
- Content (real name, bio, projects) is TBD — placeholder-first approach
- No backend required — static site with local TS data files
- Deploy target: Vercel free tier

---

## 6. Epics & Features

### Epic 1: First Impression (MVP)
- **Persona:** Recruiter
- **Problem:** Problem 1, 2
- **Outcome:** Visitor identifies candidate role in <3 seconds and can contact them
- **Features:**
  1. Hero Section — name, role tagline, CTA buttons (Contact + Resume)
     - Success: Name and role visible on first render without scrolling (desktop + mobile)
     - Dependencies: Font setup, dark layout
  2. Navigation — logo/name left, section links right
     - Success: All section links scroll smoothly to their targets
     - Dependencies: Section IDs on all sections
- **Overall Success Criteria:** Recruiter can read name, role, and click contact within 30 seconds
- **Tag:** MVP

### Epic 2: Proof of Skill (MVP)
- **Persona:** Hiring Manager
- **Problem:** Problem 3
- **Outcome:** Visitor can evaluate project depth and click to GitHub/live demo
- **Features:**
  1. Projects Grid — cards with title, description, tech stack badges, GitHub/live links
     - Success: Cards render from local TS data file; links open correctly
     - Dependencies: `src/data/projects.ts`
  2. Skills Section — scannable list of languages, frameworks, tools
     - Success: Visible as a grid or tag cloud, no interaction required
     - Dependencies: `src/data/skills.ts`
- **Tag:** MVP

### Epic 3: Human Context (MVP)
- **Persona:** Recruiter + Hiring Manager
- **Problem:** Problem 1
- **Outcome:** Visitor understands who GOK is beyond the tech stack
- **Features:**
  1. About Section — bio paragraph, background
     - Success: Renders from local data; 2–4 sentences visible
     - Dependencies: `src/data/bio.ts`
- **Tag:** MVP

### Epic 4: Conversion (MVP)
- **Persona:** Recruiter
- **Problem:** Problem 1
- **Outcome:** Visitor can reach the owner or download resume without friction
- **Features:**
  1. Contact — email link (mailto) or simple form
     - Success: Click opens email client or submits form
     - Dependencies: Owner's email address
  2. Resume Download — button linking to PDF in /public
     - Success: Click downloads or opens PDF
     - Dependencies: Resume PDF placed in `/public/resume.pdf`
- **Tag:** MVP

---

## 7. Requirements Registry

### Stage 0: Foundations

| ID | Requirement | Priority | Status | Notes |
|----|-------------|----------|--------|-------|
| `V0-REQ-001` | Next.js 15 + Tailwind CSS v4 scaffold initialized | P0 | ✅ | Done in initial commit |
| `V0-REQ-002` | TypeScript configured | P0 | ✅ | |

### Stage 1: Core Experience — Phase 1 (Foundation UX)

| ID | Requirement | Priority | Status | Notes |
|----|-------------|----------|--------|-------|
| `V1-REQ-001` | Global dark background locked (not OS-preference dependent) | P0 | 🔲 | |
| `V1-REQ-002` | Fonts loaded — monospace accent + clean body font | P0 | 🔲 | |
| `V1-REQ-003` | Navigation bar — name/logo left, section links right | P0 | 🔲 | |
| `V1-REQ-004` | Hero section — placeholder name, role, tagline, 2 CTA buttons | P0 | 🔲 | |

### Stage 1: Core Experience — Phase 2 (Core Content)

| ID | Requirement | Priority | Status | Notes |
|----|-------------|----------|--------|-------|
| `V1-REQ-005` | Projects section with cards from local TS data file | P0 | 🔲 | |
| `V1-REQ-006` | About section with placeholder bio | P0 | 🔲 | |
| `V1-REQ-007` | Skills section with placeholder skill list | P1 | 🔲 | |

### Stage 2: Polish & Conversion

| ID | Requirement | Priority | Status | Notes |
|----|-------------|----------|--------|-------|
| `V2-REQ-001` | Contact section (mailto or form) | P0 | 📅 | |
| `V2-REQ-002` | Resume download button linking to /public/resume.pdf | P0 | 📅 | |
| `V2-REQ-003` | Scroll animations (subtle, respects prefers-reduced-motion) | P1 | 📅 | |
| `V2-REQ-004` | SEO meta tags + Open Graph | P1 | 📅 | |

### Stage 3: Launch

| ID | Requirement | Priority | Status | Notes |
|----|-------------|----------|--------|-------|
| `V3-REQ-001` | Vercel deployment live | P0 | 💡 | |
| `V3-REQ-002` | Lighthouse Performance ≥90 | P1 | 💡 | |
| `V3-REQ-003` | Lighthouse Accessibility ≥90 | P1 | 💡 | |

### Requirements Inbox

| Requirement | Date Added | Source | Notes |
|-------------|------------|--------|-------|
| - | - | - | - |
