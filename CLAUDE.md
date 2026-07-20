# CLAUDE.md — 0xhunterkiller Portfolio

## Project Overview

Static portfolio site for Saai Sudarsanan (handle: `0xhunterkiller`).
Built with Next.js 15 (App Router, static export), React 19, Tailwind CSS v4, Framer Motion, TypeScript.
Font: Cascadia Code (local woff2) — monospace throughout, including body text.
Deployed to GitHub Pages at `0xhunterkiller.kernel9.com`.

## Stack

- **Framework:** Next.js 15.5, `output: "export"` (fully static, no server)
- **Styling:** Tailwind CSS v4 — no `tailwind.config`, uses `@import "tailwindcss"` in globals.css
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build:** `npm run build` → outputs to `./out`
- **Deploy:** GitHub Actions (`.github/workflows/static-next.yaml`) — triggers only when `.version` file changes

## Data Architecture — Single Source of Truth

All content lives in `data/`. Never hardcode content in components.

```
data/
  config.ts              # Site-wide: name, handle, role, company, bio, social links, resume URL, featured project
  aboutme/
    meData.ts            # promotions, milestones, skillClusters, projects, education, certifications
    timelineData.ts      # Full 2021–2026 month-by-month career timeline
  blog/
    blogsData.ts         # 22 blog posts (Medium, LinkedIn, Substack)
  artifacts/
    artifactsData.ts     # Index of self-contained learning HTML pages
```

### Adding an artifact
Drop the standalone `.html` into `public/artifacts/`, then add an entry to `artifactsData.ts`
with its `file` name. The pages carry their own CSS/fonts and open in a new tab — the site
never renders them inline, so their design is free to clash with the portfolio's.

```
```

### Key exports from meData.ts
- `promotions` — career arc: Intern → ASE → SWE I → Sr. SWE I (all at Swym)
- `milestones` — expandable achievement cards on the About page (highlight: true for cyan accent)
- `skillClusters` — skills grouped by domain (6 clusters)
- `projects` — notable projects (featured: true for Alfred)
- `education` — OMSCS (In Progress) + SASTRA B.Tech
- `certifications` — 9 certs with optional credly/coursera links

### timelineData.ts structure
Covers 2021–2026. Uses `TimelineYear` interface: `{ year, role, organization, highlights[] }`.
Each highlight: `{ title, date?, description?, tags?, link? }`.
**2026 is the most recent and must stay up to date** — check `.context/swym_2026.md` for source of truth.

## Design Language

- **Background:** Dark navy gradient `from-[#0d1b2e] via-[#080e1a] to-[#040810]` + 48px grid overlay
- **Primary accent:** `cyan-400` — current state, highlights, featured items
- **Secondary accent:** `blue-400/500` — standard links, section headers
- **Text:** `white` for headings, `gray-200/300` for body, `gray-500/600` for secondary
- **Cards:** `border border-white/[0.07] bg-white/[0.02]` (standard) or `border-cyan-500/25 bg-cyan-950/15` (featured/highlight)
- **Tags:** monospace `[tagname]` style with `font-mono text-[10px]`
- **Section headers:** `font-mono text-xs text-gray-600 uppercase tracking-[0.2em]` with trailing `h-px bg-white/[0.05]` divider
- **Layout:** Left-aligned, max-w-5xl, `px-6 md:px-12 lg:px-16`, `py-28` for pages with navbar

## Pages

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `app/page.tsx` | Homepage — hero, bio, CTAs, Alfred feature card |
| `/me` | `components/pages/MeComp.tsx` | About — arc, milestones, skills, education, projects, certs, writing |
| `/me/timeline` | `components/pages/TimelineComp.tsx` | Full detailed timeline from timelineData.ts |
| `/blog` | `components/pages/BlogComp.tsx` | Blog listing with search + tag filter |
| `/artifacts` | `components/pages/ArtifactsComp.tsx` | Index of standalone learning pages served from `public/artifacts/` |

## Navbar

Defined in `components/LayoutClient.tsx`. Hidden on `/` (homepage handles its own navigation).
Links: about · blog · home · resume ↓
Resume links to Google Docs export URL (PDF download) — configured in `data/config.ts`.

## Who Saai Is (Important Context)

- **Current role:** Senior Software Engineer I @ Swym Corporation (promoted Mar 2026)
- **3 promotions in 3 years:** Intern (Jan 2023) → ASE (Jul 2023) → SWE I (Jan 2025) → Sr. SWE I (Mar 2026)
- **Flagship project:** Alfred — internal AI ops assistant built in ~9 days (Apr 2026). Gemini 2.5 Flash + MCP + Kubernetes + Slack + Redis Streams.
- **Scale:** Handled BFCM 2025 at 1.01M peak RPM on Kubernetes
- **OMSCS:** Pursuing MS CS at Georgia Tech (in progress) — do not mention specific courses
- **Writing:** 22 articles across Medium, LinkedIn, Substack

## Source of Truth for Career Data

The `.context/` folder contains month-by-month work logs (swym_2023.md through swym_2026.md).
Always cross-reference these when updating timeline or milestone data — the data files may lag behind.
`.context/` is gitignored and stays local only.

## What NOT to Do

- Do not resurrect the old Learn section (a curriculum/roadmap listing) — it was intentionally removed. The `/artifacts` section is a different thing and is intentional.
- Do not add numeric stats to the homepage (removed intentionally)
- Do not mention specific OMSCS courses on the site
- Do not commit `out/`, `node_modules/`, or `.context/` (all gitignored)
- Do not use centered layouts — pages are left-aligned editorial style
- Do not add comments to code unless the why is genuinely non-obvious

## Deployment

1. Bump `.version` file
2. Push to `main`
3. GitHub Actions builds and deploys automatically
4. GitHub Pages source must be set to "GitHub Actions" in repo settings
5. `public/CNAME` contains `0xhunterkiller.kernel9.com` — do not remove it
