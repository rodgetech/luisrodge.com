---
target: the new hire-a-software-developer-in-belize page
total_score: 22
max_score: 28
na_heuristics: 5,7,9
p0_count: 0
p1_count: 3
timestamp: 2026-08-09T16-24-50Z
slug: app-hire-a-software-developer-in-belize-page-tsx
---
⚠️ DEGRADED: single-context (harness policy forbids spawning sub-agents unless the user explicitly requests them)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No current-page indicator in the nav and no scroll wayfinding on an 800-word page |
| 2 | Match System / Real World | 4 | Plain buyer language throughout; "EOR" expanded inline on first use |
| 3 | User Control and Freedom | 3 | Home + CTAs always reachable in the fixed dock; no way to jump within the page |
| 4 | Consistency and Standards | 4 | Uses PageSection / SectionLabel / section-title exactly as the system defines them |
| 5 | Error Prevention | n/a | No forms, inputs, or destructive actions on the surface |
| 6 | Recognition Rather Than Recall | 3 | Everything visible, nothing buried; but no TOC means recalling what you scrolled past |
| 7 | Flexibility and Efficiency | n/a | Persuade surface; accelerators don't apply |
| 8 | Aesthetic and Minimalist Design | 2 | 13 identically-treated blocks; nothing directs attention, zero imagery |
| 9 | Error Recovery | n/a | No error states possible |
| 10 | Help and Documentation | 4 | The FAQ is genuine, task-focused documentation answering real buyer questions |
| **Total** | | **22/28** | **Good (79%)** |

## Design Specificity Verdict

**LLM assessment: category-interchangeable structurally, distinctive only in copy.**

Strip the words and this page is five stacked sections of `SectionLabel + (h3 + p) × N`. Any consultant in any country could ship this exact skeleton by swapping the text. The *copy* is strongly authored — the DST detail, English-as-official-language, the small-talent-pool admission are all first-hand and unfakeable. The *design* does nothing with any of it.

The sharpest symptom: three semantically different content types render identically. Persuasive claims ("One clock, all year"), a competitor list ("Local agencies and studios"), and an FAQ ("What time zone is Belize in?") all arrive as the same 1.125rem/600 heading over the same muted paragraph. The page has one texture for thirteen consecutive beats.

Measured from the rendered production HTML: **1 h1, 4 h2, 13 h3, 0 `<img>` tags.**

Against DESIGN.md's own "Field Notebook" north star, this is the failure mode the metaphor warns about. A notebook has varied entry rhythm — a sketch, a pasted clipping, a list, a long paragraph. This is thirteen identical ruled lines.

**Deterministic scan**: `detect.mjs` returned `[]` (exit 0, clean) on both `app/hire-a-software-developer-in-belize/page.tsx` and the rendered production HTML. No slop-pattern hits: no gradient text, no side-stripe borders, no glassmorphism, no uppercase tracked eyebrows, no identical card grids. **The detector and the design review disagree, and both are right** — the page commits no known slop patterns precisely because it commits to almost nothing visually. A clean detector run is a floor, not a ceiling.

**Visual overlays**: not available. No browser-automation tool is exposed in this session, so live-server injection, the `[Human]` tab, and console overlay reporting were all skipped. Evidence came from static analysis of the rendered HTML instead.

## Overall Impression

The writing is the best asset on this site and the layout treats it like a spec sheet. This is a conversion page where the primary action is a 14px underlined gray text link, sitting visually below its own supporting sentence.

Biggest opportunity: **give the page a spine.** One piece of proof and one real CTA would move it further than any amount of copy editing.

## What's Working

**The honest-competitors section is a genuine trust move.** Naming agencies and admitting the talent pool is small is rare, disarming, and the strongest conversion asset on the page. It also happens to be what makes the page linkable.

**The copy is specific in a way competitors cannot copy.** "The shift happens on your calendar, not mine" is a real observation from someone who lives it. The DST detail is checkable and correct.

**System discipline is exact.** Every token, class, and rhythm value matches DESIGN.md. Nothing is off-brand — the problem is the opposite of drift.

## Priority Issues

### [P1] The primary CTA is indistinguishable from a footnote

Rendered markup: `class="link-underline text-meta inline-flex min-h-11 ..."` — 14px, muted, underlined. It sits directly beneath two inline links ("experience page", "resume") styled *identically*. The only real CTA pill on the page lives in the fixed dock, which reads as chrome, not as this page's ask.

**Why it matters**: this page exists to convert a stranger with buying intent. After 800 words of persuasion the ask has less visual weight than a body paragraph.

**Fix**: give the in-content CTA the `CTA_PILL` treatment the nav already defines (`bg-primary`, full round, `h-11`), and let it sit alone with space around it. It's already a token in the system; it just isn't used here.

**Suggested command**: `/impeccable layout`

### [P1] Thirteen identical blocks, three different content types

Claims, competitor listings, and FAQ entries share one visual treatment. There's no signal that "Below US market rates" is a pitch and "What time zone is Belize in?" is a reference answer.

**Why it matters**: a scanning buyer can't triage. Everything is the same weight, so nothing is findable and the page reads longer than it is.

**Fix**: differentiate by kind. The four "Why Belize" claims can carry more weight or a distinct mark; the FAQ can compress into a `<details>` list (the pattern already exists in `TechStackSection`); the competitor block can go quieter than both.

**Suggested command**: `/impeccable layout`

### [P1] Zero imagery and zero proof on a Persuade surface

No `<img>` on the page. No face, no BuildShip, no Screen Mockups payout story, no stack marks — all of which already exist on the homepage.

**Why it matters**: this violates PRODUCT.md's own belief ladder ("Personable and clear → solid experience → building something interesting → reach out") and its "Person first, then proof" principle. The page asks a stranger to book a call having never shown them a person or a shipped thing. It is also the brand register's named failure mode: typography carrying the entire visual weight.

**Fix**: at minimum the avatar near the top, and one proof block before the CTA — the first-payout story is the strongest emotional asset available and is currently absent.

**Suggested command**: `/impeccable bolder`

### [P2] No wayfinding on an 800-word scroll

Five sections, no in-page nav, no anchors, no current-position indicator. The dock only offers Home, the two CTAs, and the theme toggle.

**Why it matters**: a buyer who wants rates or time zone info has to scroll and scan the whole page. On mobile that's a long, undifferentiated column.

**Fix**: a compact anchor list under the lead, or make the FAQ collapsible so the page's full shape is visible in roughly two screens.

**Suggested command**: `/impeccable layout`

### [P3] "And the honest caveat" is a category error

It sits as the fourth sibling under "Other ways to hire here", alongside agencies, marketplaces, and EOR. It isn't another way to hire — it's a caveat about the whole country.

**Why it matters**: minor, but it makes a scannable list momentarily incoherent, and it buries the most disarming line on the page inside a list of alternatives.

**Fix**: pull it out as its own beat, or fold it into the section intro where it will actually be read.

**Suggested command**: `/impeccable clarify`

## Persona Red Flags

**Jordan (First-Timer)** — a founder who has never hired offshore. Reaches "Working together" and finds no rates, no engagement length, no process, and no availability. "Bring the problem, not a spec" is charming but tells them nothing about what happens next or what it costs. The one concrete next step is a gray underlined link they may not register as the CTA. Abandons at the pricing question.

**Riley (Stress Tester)** — checks the claims. The DST detail holds up. Then looks for evidence Luis has done this before and finds a text link to `/experience` and nothing else — no client name, no outcome, no artifact, no testimonial. Notes that the page asserts capability without demonstrating it, and that the only proof requires leaving the page.

**Casey (Distracted Mobile)** — thumb-scrolls 13 identical blocks with no visual anchors to orient against. The dock CTA is correctly thumb-reachable (this is the page's saving grace on mobile), but the in-content CTA scrolls past unnoticed. Interrupted mid-page, returns, and has no way to tell where they were.

## Minor Observations

- Touch targets and focus rings are correct throughout (`min-h-11`, 3px `focus-visible` ring). Accessibility fundamentals are solid.
- Heading hierarchy is semantically clean: one h1, section h2s, entry h3s. Screen-reader navigation works.
- `text-display` caps at 1.75rem, so the h1 is only ~1.55× the h3s — a small delta for a page title carrying this much beneath it. Consistent with DESIGN.md's Quiet Ceiling rule, and this page is exactly the "future marketing surface" the rule carves out as an exception.
- The dock's `Book a call` and the in-content `Book a call` point to the same URL with different treatments and no relationship between them.
- `FooterSection` renders the same social row here as on the homepage — fine, but it means the page ends on soft links rather than the ask.

## Questions to Consider

- What if the four "Why Belize" claims were the visual centerpiece instead of the fourth of five equal sections?
- Does the FAQ need to be expanded by default, or is it reference material that should collapse?
- What would this page look like if it had to convert with the copy hidden — would anything remain?
- The most persuasive thing on the whole site is a screenshot of a payout notification. Why isn't it on the page whose only job is persuasion?
