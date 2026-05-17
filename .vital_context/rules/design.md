# UI / UX Design System — GOK Portfolio (V2)

> **Active branch:** V-2-New-UX. This document reflects the V2 design spec.
> V1 tokens are preserved in git history on `main`.

---

## 1. Design Principles
- **Dark-first:** Always dark. No light mode, no OS toggle.
- **Violet accent:** `#a855f7` is the single accent color — never change it.
- **Serif + Mono hierarchy:** Merriweather for headings, Inter for body/UI, JetBrains Mono for code/badges/labels.
- **Glass + glow:** Frosted glass surfaces for overlapping UI (nav); violet glow for hover states and EdgeFrame.
- **Recruiter-speed:** Name, role, and contact findable in under 5 seconds.
- **Respect motion:** Any animations must respect `prefers-reduced-motion`.

---

## 2. Design Tokens

### 2.1 Color Palette (CSS variables in `globals.css`)

| CSS Variable | Value | Usage |
|---|---|---|
| `--bg` | `#0d0d0d` | Page background |
| `--bg-surface` | `#111111` | Cards, surfaces |
| `--bg-nav` | `rgba(17,17,17,0.48)` | Frosted nav background |
| `--bg-border` | `#222028` | Borders, dividers |
| `--bg-code` | `#0f0f11` | Code block backgrounds |
| `--text-primary` | `#e5e5e5` | Body text |
| `--text-muted` | `#9b9b9b` | Secondary text, captions |
| `--text-accent` | `#a855f7` | Violet — links, highlights, CTAs |
| `--badge-bg` | `#1a1a1a` | Tech stack badge bg |
| `--badge-text` | `#a3a3a3` | Tech stack badge text |

**Rule:** Never hard-code hex values in components. Always reference a CSS variable.

### 2.2 Category Badge Tokens

| Category | bg | text | border |
|---|---|---|---|
| GenAI | `--cat-genai-bg` `#1a0f26` | `--cat-genai-text` `#a855f7` | `--cat-genai-border` `#35163f` |
| Full-Stack | `--cat-fullstack-bg` `#0f1720` | `--cat-fullstack-text` `#7c3aed` | `--cat-fullstack-border` `#221029` |
| Cloud | `--cat-cloud-bg` `#08121a` | `--cat-cloud-text` `#60a5fa` | `--cat-cloud-border` `#072033` |
| Design | `--cat-design-bg` `#141018` | `--cat-design-text` `#f472b6` | `--cat-design-border` `#2a1624` |

### 2.3 Radius Tokens

| CSS Variable | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Small chips |
| `--radius-md` | `8px` | Buttons, nav CTA |
| `--radius-lg` | `12px` | Hero CTAs, cards |
| `--radius-xl` | `16px` | Large cards |
| `--radius-pill` | `999px` | Skill chips, pill badges |

### 2.4 Typography

| Role | Font | CSS Variable | Weight | Size |
|---|---|---|---|---|
| Hero heading | Merriweather | `--font-serif` | 900 | 64px/72px |
| Section heading (h1) | Merriweather | `--font-serif` | 700 | 34px/42px |
| Sub-heading (h2) | Merriweather | `--font-serif` | 700 | 24px/32px |
| Body text | Inter | `--font-inter` | 400 | 16px/26px |
| UI / labels (sm) | Inter | `--font-inter` | 500 | 14px/20px |
| Mono / badges / code | JetBrains Mono | `--font-mono` | 500 | 12–13px |

**Rule:** Use `--font-serif` for all `h1`, `h2`, `h3`, and hero display text. Use `--font-inter` for paragraphs, descriptions, captions. Use `--font-mono` for all badge labels, skill chips, nav links, and code snippets.

### 2.5 Spacing & Layout

- Base unit: `4px`
- Section padding: `96px` top/bottom, `24px` sides
- Container max-width: `1200px`, centered
- Card padding: `20–24px`
- Breakpoints: `lg: 1024px` (EdgeFrame glow toggles here)

---

## 3. Global Components

### EdgeFrame
- Fixed, `z-index: 40`, `pointer-events: none`, `aria-hidden="true"`
- Two 1px vertical lines at `max(24px, calc(50% - 600px))` from each side
- Color: `rgba(168,85,247,0.20)`, glow: `0 0 18px rgba(168,85,247,0.16)` on desktop
- Glow removed via media query at `max-width: 1023px`
- CSS classes: `.edge-line`, `.edge-line--glow` (defined in `globals.css`)

### TopNav
- Fixed, `z-index: 50`, height `60px`
- Background: `var(--bg-nav)` + `backdrop-filter: blur(12px)` (frosted glass)
- Logo: `--font-mono`, 20px, weight 700, `var(--text-accent)`
- Links: `--font-mono`, 13px, `var(--text-muted)`, gap 28px, hover → `var(--text-accent)`
- CTA "Let's Connect": filled `var(--text-accent)`, dark text `#0d0d0d`, `--radius-md`, hover: lift + glow

---

## 4. Component Specs

### Button — Primary
- bg: `var(--text-accent)`, color: `#0d0d0d`, radius: `--radius-lg`
- padding: `14px 24px`, font: `--font-mono` sm weight 600
- hover: `box-shadow: 0 12px 40px rgba(168,85,247,0.18)`

### Button — Secondary
- bg: `transparent`, color: `var(--text-primary)`, border: `1px solid rgba(255,255,255,0.06)`
- radius: `--radius-lg`, padding: `12px 20px`
- hover: `box-shadow: 0 8px 24px rgba(168,85,247,0.12)`

### Glass Card
- bg: `rgba(255,255,255,0.03)`, border: `1px solid rgba(255,255,255,0.06)`, radius: `--radius-md`
- hover: border → `rgba(168,85,247,0.22)`, shadow: `0 18px 48px rgba(168,85,247,0.14)`, `translateY(-6px)`

### Skill Chip
- font: `--font-mono`, bg: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.04)`
- radius: `--radius-pill`, padding: `8px 10px`
- hover: `box-shadow: 0 0 12px rgba(168,85,247,0.12)`, `translateY(-2px)`
- active: bg → `var(--text-accent)`, color → `var(--bg)`

### Tech Badge (project cards)
- font: `--font-mono`, 11–12px, color: `var(--badge-text)`, bg: `var(--badge-bg)`
- radius: `--radius-pill`, padding: `3px 10px`, border: `1px solid var(--bg-border)`

---

## 5. Interaction Patterns

| Element | Hover Behavior |
|---|---|
| Nav links | color → accent (0.2s) |
| Nav CTA | translateY(-2px) + violet glow |
| Primary CTA button | violet shadow deepens |
| Glass card | lift + border glow + shadow |
| Skill chip | lift + subtle glow |
| Project GitHub link | opacity 0.7 |

All transitions: `0.2s ease` unless specified.

---

## 6. Accessibility

- Minimum contrast 4.5:1 for body text — `#e5e5e5` on `#0d0d0d` ✓
- Nav CTA: `#0d0d0d` on `#a855f7` ≈ 5.2:1 ✓ WCAG AA
- All interactive elements keyboard-focusable with visible focus ring
- EdgeFrame: `aria-hidden="true"` — never receives focus
- Animations: respect `prefers-reduced-motion` (add in Phase V2-6)
- `alt` text on all images (avatar, project screenshots)

---

## 7. Assets & References

- Figma / design reference: attached UX mockup (see project notes)
- Icon library: none yet — use Unicode or inline SVG for arrows/links
- Profile photo: `/public/photo.jpg` (optional, used in About section)
- Resume: `/public/resume.pdf`
