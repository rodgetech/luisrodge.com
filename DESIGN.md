---
name: Luis Rodge
description: Personal site for a full stack engineer — résumé density with a builder's hand.
colors:
  bright-paper: "oklch(0.995 0.002 106)"
  paper-tint: "oklch(0.965 0.003 106)"
  paper-tint-deep: "oklch(0.955 0.004 106)"
  card-white: "oklch(1 0 0)"
  rule-line: "oklch(0.91 0.004 106)"
  pressed-ink: "oklch(0.18 0.01 265)"
  ink-primary: "oklch(0.22 0.015 265)"
  muted-ink: "oklch(0.44 0.015 265)"
  focus-ring: "oklch(0.6658 0.01 265)"
  signal-red: "oklch(0.577 0.245 27.325)"
  night-paper: "oklch(0.145 0.008 265)"
  night-tint: "oklch(0.22 0.012 265)"
  night-rule: "oklch(0.28 0.012 265)"
  chalk-ink: "oklch(0.93 0.005 265)"
  muted-chalk: "oklch(0.72 0.015 265)"
typography:
  display:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.6vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  emphasis:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontStyle: "italic"
  title:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  page-title:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.5rem + 3.1vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.032em"
  page-lead:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.5
  claim-title:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  pill: "9999px"
spacing:
  prose: "0.75rem"
  section-inner: "1.125rem"
  footer: "1.5rem"
  section: "1.75rem"
  first: "2rem"
  emphasis: "2.25rem"
  page-x: "1.25rem"
  page-x-sm: "2rem"
  section-top: "2.75rem"
  section-top-emphasis: "3.25rem"
components:
  nav-cta:
    backgroundColor: "{colors.ink-primary}"
    textColor: "{colors.bright-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "2.75rem"
    padding: "0 0.875rem"
  nav-icon-button:
    backgroundColor: "{colors.paper-tint}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.pill}"
    size: "2.75rem"
  nav-shell:
    backgroundColor: "{colors.bright-paper}"
    rounded: "{rounded.2xl}"
    padding: "0.5rem"
  tech-chip:
    backgroundColor: "{colors.paper-tint}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.25rem 0.625rem"
  inline-link:
    textColor: "{colors.muted-ink}"
    typography: "{typography.body}"
  cta-pill:
    backgroundColor: "{colors.ink-primary}"
    textColor: "{colors.bright-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    height: "3rem"
    padding: "0 1.5rem"
---

# Design System: Luis Rodge

## Overview

**Creative North Star: "The Field Notebook"**

This is a working notebook, not a brochure. Entries are packed tight and separated by hairline rules rather than whitespace or cards. Nothing is enlarged to attract attention; the density itself is the argument, on the theory that a reader who is actually evaluating someone wants signal per scroll, not a guided tour. The page reads like a document a person maintains, not a page a team launched.

The material is paper and ink, and the two disagree about temperature on purpose. Surfaces sit at hue 106, a barely-there warm cast that keeps the background off clinical white. Ink sits at hue 265, cool and faintly blue, the color of a good pen rather than pure black. That warm-surface / cool-ink split is the single most distinctive property of the palette and it holds in both themes.

Against an entirely sans-serif page, one italic serif recurs: a section label, a year numeral, a photo caption. It appears rarely enough to register as a hand in the margin rather than a typographic system. Everything else stays out of the way. Motion is scarce and structural: the entry rule draws itself as a section comes into view, disclosures unfold rather than snap, and nothing else moves on its own.

**Key Characteristics:**
- Warm paper surfaces, cool blue-black ink, held apart by hue rather than tone
- Résumé-grade density in one 42rem column, never wider
- Hairline rules between sections instead of cards or panels
- One recurring italic serif gesture against an all-sans page
- Flat by default: depth is a 1px ring, not a drop shadow
- Motion is structural, not decorative: rules draw, disclosures unfold, nothing else moves

## Colors

A near-monochrome of warm paper against cool ink, with no brand accent at all — emphasis is carried by weight, size, and rule lines rather than by hue.

### Primary
- **Pressed Ink** `oklch(0.18 0.01 265)`: All headings, the display name, and any text that must be read first. Faintly blue rather than neutral black, which is what keeps the page from reading as a default stylesheet.
- **Ink Primary** `oklch(0.22 0.015 265)`: Filled surfaces that invert — the nav CTA pill background, the skip link. Sits one step lighter than Pressed Ink so a filled pill doesn't out-weigh a heading.

### Neutral
- **Bright Paper** `oklch(0.995 0.002 106)`: The page ground in light mode. Warm enough to avoid clinical white, far too subtle to read as cream.
- **Paper Tint** `oklch(0.965 0.003 106)`: Resting fill for chips, icon buttons, and muted blocks. The only "surface" the system has.
- **Paper Tint Deep** `oklch(0.955 0.004 106)`: Hover state one step below Paper Tint. Used sparingly.
- **Card White** `oklch(1 0 0)`: Pure white, reserved for genuinely lifted elements against the warm ground.
- **Rule Line** `oklch(0.91 0.004 106)`: Every section divider, input border, and link underline. This color does the structural work that cards do in other systems.
- **Muted Ink** `oklch(0.44 0.015 265)`: All body copy and metadata. Note that this is the *default* prose color, not a de-emphasis — headings step up to Pressed Ink rather than body stepping down.
- **Focus Ring** `oklch(0.6658 0.01 265)` light / `oklch(0.48 0.015 265)` dark: Focus-visible rings only, always 3px and at **full opacity**. The value is pinned to WCAG 1.4.11 — it measures 3.00:1 light and 3.03:1 dark against the page. Do not lighten it, and do not reintroduce the `/50` alpha it used to carry; that combination measured 1.51:1 and failed.

### Dark theme
The split inverts without flattening. **Night Paper** `oklch(0.145 0.008 265)` grounds the page, **Chalk Ink** `oklch(0.93 0.005 265)` carries headings, **Muted Chalk** `oklch(0.72 0.015 265)` carries body copy, and **Night Rule** `oklch(0.28 0.012 265)` replaces Rule Line. In dark mode the surfaces adopt the ink's cool hue rather than keeping the warm 106 cast; the warmth belongs to paper, not to darkness.

### Tertiary
- **Signal Red** `oklch(0.577 0.245 27.325)`: Destructive states only. Currently unused by any shipped surface.

### Named Rules

**The No Accent Rule.** This system has no brand color and does not want one. Emphasis comes from ink weight, type size, and rule lines. Introducing an accent hue would break the notebook premise and make the page look like every other portfolio.

**The Two Hues Rule.** Surfaces are hue 106, ink is hue 265, and nothing else enters the palette. New neutrals extend one of those two families; they never split the difference into a third.

## Typography

**Display / Body Font:** Source Sans 3 (with `ui-sans-serif`, `system-ui`, `sans-serif`)
**Accent Font:** Newsreader, italic only, weight 400 (with `ui-serif`, Georgia, serif)
**Mono Font:** system stack (`ui-monospace`, SFMono-Regular, Menlo) — declared, currently unused

**Character:** One humanist sans carries essentially the whole page across three weights (400/500/600), with tight negative tracking on every heading tier. A single italic serif interrupts it at rare intervals. The pairing works because the two faces are doing completely different jobs, not because they're stylistically matched.

### Hierarchy
- **Display** (600, `clamp(1.375rem → 1.75rem)`, 1.15, -0.02em): The name in the hero, and the h1 of any sub-page. Fluid but tightly bounded.
- **Headline** (600, 1.375rem, 1.25, -0.02em): Section labels — "About", "Experience", "Stack". The primary wayfinding tier. Sized to clear Title by a visible step; at 1.25rem the two tiers were only 1.11× apart and sections read as one undifferentiated run.
- **Emphasis** (Newsreader italic, 400, 1.375rem, 1.3, -0.01em): The serif substitute for Headline. Used once per page at most.
- **Title** (600, 1.125rem, 1.3, -0.015em): Entry titles inside a section — a company name, a project name, an FAQ question.
- **Lead** (500, 1rem, 1.55, max 40ch): The tagline directly under the display name. Steps down to 0.9375rem and drops its max-width under 640px.
- **Body** (400, 1rem, 1.7): All prose, colored Muted Ink. The generous 1.7 leading is what makes the density readable.
- **Label** (400, 0.875rem, 1.5): Metadata, timestamps, chips, footer, nav CTA text.

**Marketing tier** (`/hire` only, see the Quiet Ceiling Rule): **Page Title** (600, `clamp(2.125rem → 3.5rem)`, 1.03, -0.032em), **Page Lead** (500, `clamp(1.0625rem → 1.25rem)`, 1.5, max 54ch, full-ink not muted), and **Claim Title** (600, 1.375rem) for persuasive claims that must outrank reference material on the same page.

### Named Rules

**The Single Hand Rule.** Newsreader italic is reserved for one moment per page: an emphasis label, a numeral, or a caption. Never body copy, never a heading in the normal flow, never two instances competing in the same viewport. It reads as a hand in the margin precisely because it is rare — spread it and it becomes a typeface.

**The Quiet Ceiling Rule.** Display type stops at 1.75rem (28px) on `/` and `/experience`. This is deliberate density, not an oversight: those pages are documents, and documents don't shout. **The exception is spent.** `/hire-a-software-developer-in-belize` is the one top-of-funnel surface and it runs the marketing tier above, topping out at 3.5rem. That is a stated departure, not drift — do not "correct" it back to the ceiling, and do not extend the marketing tier to a third page without spending a new exception deliberately.

**The Tight Tracking Rule.** Every heading tier carries negative letter-spacing (-0.015em to -0.02em). Body and label copy carry none. Setting a heading at default tracking makes it read as unstyled.

## Layout

A single centered column at `max-width: 42rem` (`max-w-2xl`), never wider, on every page. Horizontal padding is `1.25rem`, stepping to `2rem` at 640px. There is no multi-column layout anywhere in the system and no grid beyond `flex-wrap` for chips.

Vertical rhythm is deliberately asymmetric: `2.75rem` above a standard section and `3.25rem` above an emphasis section, against `1.75rem` below. A section needs more air above its rule than below it, or the heading reads as belonging to the section that just ended. Inside a section, content stacks at `1.125rem` and prose paragraphs at `0.75rem`, and the label pulls toward its content with a negative margin so the two bind. The variation is what stops the page reading as a uniform list.

Sections are separated by the entry rule (see Components). That rule is the layout system — there are no cards, no panels, and no background changes between sections.

The floating nav is fixed to the bottom of the viewport, so every scrollable page reserves `calc(6rem + env(safe-area-inset-bottom))` of bottom padding. Anchor targets carry `4.25rem` of scroll margin so a jumped-to section clears the nav.

Safe-area insets are applied to the body on both horizontal edges, and the hero collapses to `5rem` in short landscape viewports.

### Named Rules

**The One Column Rule.** 42rem, centered, always. If content doesn't fit the column, the content gets shorter — the column does not get wider and does not split.

## Elevation & Depth

Flat by default, ring-first. Depth is communicated by a 1px ring and a tonal step, not by a drop shadow. The two shadow tokens both bundle a hairline ring with a very low-alpha lift, and they exist for the two elements that genuinely float above the page — the fixed nav and the hero avatar. Everything else sits directly on the paper.

### Shadow Vocabulary
- **Surface** (`0 1px 2px oklch(0.18 0.01 265 / 4%), 0 0 0 1px oklch(0.18 0.01 265 / 4%)`): The avatar ring and any element that needs to read as a physical object rather than a region. Effectively a ring with a hint of contact shadow.
- **Elevated** (`0 4px 16px oklch(0.18 0.01 265 / 8%), 0 0 0 1px oklch(0.18 0.01 265 / 4%)`): The floating nav and modal surfaces. In dark mode both tokens swap to a black shadow with a 6% white ring, because a dark shadow on a dark ground reads as nothing.

### Named Rules

**The Ring-First Rule.** When an element needs separation, reach for a 1px border in Rule Line before reaching for a shadow. Shadows are reserved for things that actually float above the scroll.

## Shapes

A moderate, consistent radius language built on a `0.5rem` base, stepping down to `0.25rem` and up through `0.75rem`, `1rem`, and beyond. Chips and inline controls take the `0.375rem` step; the nav shell takes `1rem`.

The one departure is the pill: nav CTAs and icon buttons are fully rounded at `9999px`, sized to a `2.75rem` (44px) touch target. That full round is the only place the system uses a shape as an affordance signal — everything round is tappable, everything rectangular is not.

There are no decorative shapes, no clipping, no angled sections, and no illustration. Form comes entirely from type, rules, and the two chip/pill silhouettes.

## Components

### Navigation
A floating pill dock fixed to the bottom center of the viewport, present on every page. The shell is `1rem` radius over `bg-background/95` with `backdrop-blur-sm`, a `border-border/60` hairline, and the Elevated shadow. Inside: a home control, a vertical hairline separator, the two co-equal outreach CTAs, another separator, and a theme toggle.

- **CTA pill:** Ink Primary fill, paper text, full round, `2.75rem` tall, Label typography at weight 600. Hover drops to 90% opacity — no color shift, no lift.
- **Icon button:** Paper Tint fill, Muted Ink icon at `0.875rem`, full round, `2.75rem` square. Hover moves the icon to Pressed Ink; the fill stays put.
- **Mobile:** CTA labels collapse to short forms ("Book", "Hi") with the full label preserved in an `sr-only` span.

### Chips
- **Style:** Paper Tint fill, `0.375rem` radius, `0.25rem 0.625rem` padding, Label typography, with a 14px monochrome-adjacent icon at 80% opacity.
- **Touch:** Under `pointer: coarse`, chips grow to a `2.75rem` minimum height and wider inline padding without changing mouse density.
- **Overflow:** Beyond the first five, chips collapse into a native `<details>` disclosure rather than a "show more" button.

### Inline links
Muted Ink text with a Rule Line underline at `4px` offset. Hover moves both text and underline to Pressed Ink. Under `pointer: coarse` the offset relaxes to `5px`. This is the system's only link treatment — there are no colored links.

### Entry rule
The workhorse of the entire layout, and the device that tells a reader a new entry has started.

- **Structure:** a full-width `1px` hairline in Rule Line (`::before`) carrying a short inked tick at the left margin (`::after`) — `2.25rem × 2px` in full Pressed Ink, `3.75rem` on the emphasis variant.
- **Why both:** the hairline alone measures `1.29:1` against paper. It is effectively invisible, which is why sections used to dissolve into each other. Raising Rule Line to fix that would turn every hairline on the site into a hard grey rule, so the tick does the announcing and the rule stays faint. **Do not raise `--border` to solve section legibility.**
- **Variants:** `first` (no rule), `default` and `emphasis` (rule + tick, differing in tick length and top rhythm), `footer` (plain hairline, no tick — it closes the page rather than opening an entry).
- **Motion:** both parts draw from the left as the section enters view, via `animation-timeline: view()`. The tick lands fast on an ease-out over `entry 0–38%`; the hairline then extends **linearly** over `entry 8–88%`. Linear is deliberate — on a scroll-driven timeline an ease curve races ahead of the scroll and reads as lag. Fully drawn at rest, so unsupported browsers simply render the rule.

### Masthead mark
The same tick at page-opening weight: `3.75rem × 3px`, sitting above the `/hire` h1 and drawing in over 620ms on load. It exists because that header was the only section carrying none of the page's structural vocabulary. Scroll-driven timing does not apply above the fold, which is why this one animates on load instead.

### Disclosure
`<details>` with a `.disclosure` class. Content unfolds via `::details-content` — `block-size` 0 → `auto` over 300ms on the standard ease-out, content fading in over 200ms, with `content-visibility` transitioned using `allow-discrete` so the box stays rendered through the *closing* transition. Depends on `interpolate-size: allow-keywords` set on `:root`. Where `::details-content` is unsupported the disclosure snaps, exactly as before — nothing depends on the animation.

### Modal
A native `<dialog>` filling the viewport with a transparent element background, a `bg-background/70 backdrop-blur-sm` scrim rendered as a full-bleed close button, and an `sr-only` heading for labeling. Escape and backdrop dismissal come from the platform rather than from custom handlers.

### Signature: the reveal that can't move
The experience timeline animates in with opacity alone — `0.88 → 1` over `0.55s` on `cubic-bezier(0.16, 1, 0.3, 1)` — because a transform on the ancestor breaks `position: sticky` on the year labels. The element is fully visible at rest and the animation only enhances, so the content ships even where animations never fire.

## Do's and Don'ts

### Do:
- **Do** open every section with the entry rule and its inked tick, and keep the rhythm asymmetric (`2.75rem` above, `1.75rem` below).
- **Do** keep every page in the single 42rem column.
- **Do** set body copy in Muted Ink and step *up* to Pressed Ink for headings, rather than starting at ink and stepping down.
- **Do** give every interactive target a `2.75rem` minimum touch dimension and a `focus-visible` ring at 3px, full opacity.
- **Do** keep reveal animations opacity-only and visible at rest, guarded by `prefers-reduced-motion: no-preference`.
- **Do** use `text-wrap: balance` on headings and `text-wrap: pretty` on prose — both are already wired into the type classes.

### Don't:
- **Don't** introduce a brand accent color. The palette is two hues and no accent by design.
- **Don't** wrap content in cards or panels. Rule lines and rhythm carry structure here.
- **Don't** set Newsreader in body copy, in a normal-flow heading, or twice in one viewport.
- **Don't** scale display type past `1.75rem` on `/` or `/experience`. The marketing tier belongs to `/hire` alone and its exception is already spent.
- **Don't** reach for a drop shadow where a `1px` ring would separate the element.
- **Don't** raise `--border` to make sections more legible. The tick exists so the hairline can stay faint; a darker hairline wrecks every rule on the site.
- **Don't** gate content on an animation. Every animated element here is fully rendered at rest and enhanced only where the browser supports it.
- **Don't** animate transform on any ancestor of a `position: sticky` element.
- **Don't** revive `components/ui/button.tsx` or the `--chart-*` / `--sidebar-*` tokens. They are unused shadcn scaffolding, and the nav builds its own pill and icon-button treatments instead.
