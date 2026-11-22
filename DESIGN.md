---
name: Luis Rodriguez
description: Personal portfolio for a software engineer. A personal dashboard in the marclou.com mold — neutral, dense, proof-first.
colors:
  background: "#ffffff"
  foreground: "#0a0a0a"
  card: "#ffffff"
  primary: "#171717"
  primary-foreground: "#fafafa"
  muted: "#f5f5f5"
  muted-foreground: "#737373"
  border: "#e5e5e5"
  ring: "#a1a1a1"
  live: "#35c26d"
  dark-background: "#0a0a0a"
  dark-foreground: "#fafafa"
  dark-card: "#171717"
  dark-muted: "#262626"
  dark-muted-foreground: "#a1a1a1"
  dark-border: "#ffffff1a"
  dark-live: "#47cf79"
typography:
  family: "Geist, ui-sans-serif, system-ui, sans-serif"
  page-title: { fontSize: "1.875rem", fontWeight: 600, letterSpacing: "-0.025em" }
  name: { fontSize: "1.875rem", fontWeight: 600, letterSpacing: "-0.025em" }
  section-header: { fontSize: "15px", fontWeight: 500 }
  entry-title: { fontSize: "1rem", fontWeight: 600 }
  lead: { fontSize: "17px", lineHeight: 1.625 }
  body: { fontSize: "15px", color: "muted-foreground" }
  meta: { fontSize: "0.875rem", color: "muted-foreground" }
  stat: { fontSize: "1.875rem", fontWeight: 600 }
rounded:
  base: "0.625rem"
  button: "8px"
  card: "1.125rem"
  pill: "9999px"
shadows:
  surface: "0 0 0 1px #0000000f, 0 1px 2px -1px #0000000f, 0 2px 4px 0 #0000000a"
  surface-hover: "0 0 0 1px #00000014, 0 1px 2px -1px #00000014, 0 2px 4px 0 #0000000f"
  dark-surface: "0 0 0 1px #ffffff14"
spacing:
  section-gap: "3.5rem"
  header-to-content: "1.25rem"
  entry-inner: "0.5rem–0.75rem"
  page-x: "1.25rem"
---

# Design System: Luis Rodriguez

## Overview

A personal dashboard modelled on marclou.com: pure neutral grays, Geist throughout, soft ring-shadow cards, and dense, proof-first content. The page should read like a builder's profile, not a brochure: real numbers, real products, one clear ask.

Tokens live in `app/globals.css` under `.home`, which sits on `<body>`, so every route (including 404 and error) shares them. `components/site/site-shell.tsx` is the shared frame; pages fill only its main column.

## Layout

- **Identity column** (sticky, 18–20rem on desktop; first block on mobile). Each fact once: Work / Experience page switcher, avatar (links home), name, "Software engineer in Cayo, Belize", the hook in foreground weight followed by availability, Email me (primary) and Résumé (secondary) buttons, and an icon-only social row (names in tooltips and for screen readers).
- **Main column.** Pages own their h1; on the homepage the name is the h1. Sections are 3.5rem apart, header-to-content 1.25rem.
- **Footer.** A hairline, © and the theme toggle. Nothing else.

### Homepage order

1. **Things I've built.** esigna is the only raised card on the page: icon, name, "Used every day" live badge, the $500+ revenue figure (the largest number in the column), description, and a screenshot on the right (hidden on mobile). Screen Mockups sits under it, flat: the real payout-notification crop, name, "First internet dollar" badge, one sentence, and a link to its open-source repo.
2. **Building with AI.** One foreground sentence, then labeled rows: Workflow (Claude Code, Codex, herdr chips), Agents handle / I handle (outlined text tags), Shipped in esigna (three bold-lead lines, each verified against the esigna code), Built with (chips).
3. **Experience.** BuildShip only, rendered by the same `RoleItem` as `/experience`, with "Full experience" linking there.
4. **GitHub.** A flat contribution heatmap read from the public profile and revalidated daily. Grayscale levels from `muted` to `foreground/90`, fluid square cells, scrolls from the newest week below 40rem, and hides itself if GitHub is unreachable.
5. **Stack.** Labeled rows (Web, Mobile, Product & infra). No CSS frameworks or utility libraries.

### Other pages

- **`/experience`:** page title and one line, then Recent roles in full (narrative, outcomes, tech) and Earlier roles in brief.
- **`/hire-a-software-developer-in-belize`:** a Read surface. 17px lead, 15px relaxed prose at 65ch, a two-column Why Belize grid, a muted (not raised) caveat panel, a hairline FAQ with an animated disclosure, and one "Book a call" button.
- **404 and error:** the shared shell with a title, one line and a secondary button.

## Components

- **Section header** (`components/home/section-header.tsx`): 15px medium title over a faint hairline, optional "see all" link on the right. No counts.
- **Tech chip** (`components/ui/tech-chip.tsx`): muted fill, 14px icon, 0.875rem label; grows to a 44px target under coarse pointers. Mono brand marks set `invertInDark`.
- **Labeled rows** (`components/home/tech-groups.tsx`): `dl` with an 8.5rem label column from `sm` up, stacked on mobile.
- **Buttons** (`components/site/styles.ts`): 36px tall, 8px radius. Primary is filled `primary`; secondary is `card` with the surface ring.
- **Role item** (`components/experience/role-item.tsx`): mark, company and dates on one line, title below, indented body.

## Rules

- **One raised surface per page.** Cards are for the thing that matters most; everything else is flat under a section header.
- **Say it once.** Identity lives in the identity column; the main column never repeats it.
- **Every number is literally true.** Revenue, usage and counts are hand-maintained in `config/home.ts`.
- **Green means live.** `--live` is the only accent hue, used for the pulsing "live" dot.
- **Focus is always visible:** 3px `ring` at full opacity on every interactive element (`FOCUS` in `components/site/styles.ts`).
- **Measure:** prose and bullets cap at 60–65ch; bullet copy is never larger than the featured card's copy.
- **Motion:** one entrance (`animate-enter`, staggered) on the identity column and first section, the live-dot ping, and the FAQ disclosure. All disabled under `prefers-reduced-motion`.
