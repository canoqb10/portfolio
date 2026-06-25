# José Alberto Cano Govea — Portfolio

Personal portfolio site for José Alberto Cano Govea, Senior Frontend Engineer with 10+ years of experience building enterprise-grade web applications across FinTech, ML infrastructure, and e-commerce.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Package manager | pnpm |
| Runtime | React 19 |

## Features

- **Dark / Light theme** — auto-detects `prefers-color-scheme`, persists to `localStorage`, flash-free via inline script in `<head>`
- **Bilingual (EN / ES)** — full UI and content translations, toggled from the navbar
- **Fully static** — no server runtime required, deployable to any CDN
- **Responsive** — mobile-first, tested from 375 px to 1440 px
- **Accessible** — semantic HTML, `aria-label` on interactive elements, focus-visible styles
- **Smooth animations** — scroll-triggered `FadeIn`, staggered children, `AnimatePresence` transitions

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Design tokens (@theme), CSS layers, badge token system
│   ├── layout.tsx          # Root layout — ThemeProvider + LanguageProvider + anti-flash script
│   └── page.tsx            # Single page — assembles all sections in order
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar: theme toggle, lang toggle, active section tracking
│   │   └── Footer.tsx      # Footer with nav links and social links
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Fullscreen hero with availability badge and CTAs
│   │   ├── About.tsx        # About me with current/previous roles
│   │   ├── Experience.tsx   # Accordion timeline (single open at a time)
│   │   ├── Skills.tsx       # Technical skill groups + soft skills section
│   │   ├── Projects.tsx     # Featured projects with problem/impact cards
│   │   ├── Achievements.tsx # Stat cards with animated counters
│   │   ├── Education.tsx    # Academic degrees + certifications
│   │   └── Contact.tsx      # Social links + contact form (mailto)
│   │
│   └── ui/
│       ├── Badge.tsx        # Themed badge/chip — reads CSS custom properties for colors
│       ├── Button.tsx       # Reusable button
│       ├── FadeIn.tsx       # Scroll-triggered fade animation wrapper
│       ├── SectionHeader.tsx # Eyebrow + title + gradient highlight
│       └── SocialIcons.tsx  # LinkedIn and GitHub SVG icons
│
├── data/
│   └── portfolio.ts        # All personal content (bilingual) — single source of truth
│
├── i18n/
│   ├── context.tsx         # LanguageProvider + useTranslation hook
│   └── ui.ts               # All UI strings in EN and ES
│
└── theme/
    └── context.tsx         # ThemeProvider + useTheme hook
```

## Architecture Decisions

### Single source of truth
All personal data (experience, skills, projects, education, achievements) lives in `src/data/portfolio.ts`. Bilingual fields use the shape `{ en: string; es: string }`. Updating content never requires touching components.

### i18n pattern
Client-side only. `LanguageProvider` wraps the app and exposes `{ lang, setLang, t }` via `useTranslation()`. UI strings are in `src/i18n/ui.ts`; content strings are in `src/data/portfolio.ts` accessed as `field[lang]`.

### Theme system
`ThemeProvider` sets `data-theme` on `<html>` and persists to `localStorage`. An inline `<script>` in `<head>` runs synchronously before the first paint to prevent flash. Color tokens are CSS custom properties — dark defaults in `:root`, light overrides in `[data-theme="light"]`.

### Badge/chip token system
Badge colors are CSS custom properties (`--bdg-*`) rather than inline Tailwind classes. Dark defaults are declared in `:root` **before** `[data-theme="light"]` so equal-specificity cascade resolves correctly. Eight variants are defined: `frontend`, `backend`, `database`, `devops`, `testing`, `tools`, `soft`, and `default`.

### CSS layer architecture
Tailwind v4 uses explicit `@layer` blocks. Unlayered custom CSS outranks `@layer utilities` regardless of specificity. Base resets that must be overridable (e.g. `a { color: inherit }`) are placed inside `@layer base`.

## Running Locally

**Prerequisites:** Node.js 20+, pnpm 9+

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# Opens at http://localhost:3000 (or 3001 if 3000 is taken)

# Type-check
pnpm tsc --noEmit

# Production build
pnpm build

# Serve production build
pnpm start
```

## Adding the CV PDF

The resume download button expects a PDF at:

```
public/jose-alberto-cano-govea-frontend-engineer.pdf
```

Place the file there before deploying. To change the filename, update `cvUrl` in `src/data/portfolio.ts`.

## Deploying to Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra configuration needed
4. Click **Deploy**

No environment variables are required.

## Customizing Content

All personal content is in **`src/data/portfolio.ts`**. Bilingual fields follow this shape:

```ts
title: { en: "Your English text", es: "Tu texto en español" }
```

Plain string fields (names, URLs, dates) are single strings. UI labels (button text, section headings) are in `src/i18n/ui.ts`.
