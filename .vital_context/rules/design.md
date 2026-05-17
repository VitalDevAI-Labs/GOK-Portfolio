# UI / UX Design System — GOK Portfolio

## 1. Design Principles
- **Dark-first:** The site is always dark. No light mode, no OS toggle.
- **Terminal aesthetic:** Monospace accents, subtle green or cyan highlights, code-like feel.
- **Clarity over decoration:** Typography and whitespace do the work. No gratuitous animations.
- **Recruiter-speed:** Key info (name, role, contact) scannable in under 5 seconds.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token | HEX | Usage |
|-------|-----|-------|
| `bg.default` | `#0a0a0a` | Primary page background |
| `bg.surface` | `#111111` | Cards, nav background |
| `bg.border` | `#1f1f1f` | Borders, dividers |
| `text.primary` | `#e5e5e5` | Body text |
| `text.muted` | `#737373` | Secondary text, captions |
| `text.accent` | `#22d3ee` | Cyan — links, highlights, terminal cursor (adjust if preferred) |
| `text.inverse` | `#0a0a0a` | Text on light/accent backgrounds |
| `badge.bg` | `#1a1a1a` | Tech stack badge background |
| `badge.text` | `#a3a3a3` | Tech stack badge text |

> These are design intent tokens. Implement via Tailwind classes or CSS variables in `globals.css`.

### 2.2 Typography

| Role | Font | Weight | Size | Usage |
|------|------|--------|------|-------|
| Body | Inter (or system-ui) | 400 | 16px / 1.6 | Paragraphs, descriptions |
| Heading | Inter | 700 | 32–48px | Section titles |
| Hero name | Inter | 800 | 48–72px | The big name in Hero |
| Mono accent | JetBrains Mono (or Fira Code) | 500 | 13–14px | Nav, badges, role tagline, terminal hints |

Load via `next/font/google` in `layout.tsx`.

### 2.3 Spacing & Layout

- Base unit: `4px`
- Section padding: `py-24` (96px) top and bottom
- Container max width: `1200px`, centered, `px-6` sides
- Card padding: `p-6`
- Breakpoints: Tailwind defaults (sm: 640, md: 768, lg: 1024, xl: 1280)

---

## 3. Component Specs

### Nav
- Fixed top, full width, `bg.surface` with bottom border `bg.border`
- Left: Name or logo in mono font, accent color
- Right: Section links (Projects, About, Skills, Contact) in small mono text
- Active/hover state: accent color underline
- Mobile: hamburger or collapse links (Phase 3 concern)

### Hero
- Full viewport height (`min-h-screen`)
- Centered content, left-aligned text (or centered — TBD with owner)
- Stacked: tagline prefix (mono, muted) → Name (huge, primary) → Role (mono, accent) → One-liner (body, muted) → CTA buttons
- CTA Primary: "Get in Touch" — border accent, bg transparent, hover: fill accent
- CTA Secondary: "Download Resume" — ghost, muted border

### Project Card
- Dark surface bg, border `bg.border`
- Title (heading weight), description (body, muted), tech badges (mono, small)
- Footer: GitHub icon link, optional Live icon link
- Hover: subtle border accent glow

### Tech Badge
- Small pill: mono font, `badge.bg`, `badge.text`
- No interaction needed

### Section Title
- `text-3xl font-bold text.primary`
- Optional mono prefix: `// section-name` in accent color above the title

---

## 4. Interaction Patterns

| Pattern | Behavior |
|---------|----------|
| Nav links | Smooth scroll to section ID |
| CTA Contact | `mailto:` opens email client |
| CTA Resume | `<a download>` or opens PDF in new tab |
| Project GitHub | Opens in new tab |
| Hover states | Color shift or border glow, no scale transforms |

---

## 5. Accessibility

- Minimum contrast 4.5:1 for body text on dark backgrounds — verify `text.primary` (#e5e5e5) on `bg.default` (#0a0a0a)
- All interactive elements keyboard-focusable with visible focus ring
- Respect `prefers-reduced-motion` for any scroll animations added in Phase 3
- `alt` text on all images (profile photo if added)

---

## 6. Content & Tone

- **Voice:** Direct, confident, minimal — no marketing fluff
- **Microcopy:** Action-first ("View on GitHub", "Download Resume", "Get in Touch")
- **Placeholder text convention:** Use realistic-looking placeholders (e.g. "Full-Stack Engineer", "A builder who cares about...") not `[PLACEHOLDER]` brackets — so the site looks real while content is TBD
