---
target: experience page
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-07-19T23-19-14Z
slug: app-experience
---
Method: dual-agent (A: [Critique Assessment A](169a0dd7-f86d-4307-83b9-815852972d45) · B: [Critique Assessment B](ad1c4d59-76ea-4adf-9d70-7717e407f767))

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Sticky years orient scroll on desktop; no “on Experience” nav state |
| 2 | Match System / Real World | 3 | End-year chapters slightly unnatural vs calendar intuition |
| 3 | User Control and Freedom | 3 | Home, skip, outreach dock, PDF exit — solid |
| 4 | Consistency and Standards | 3 | Logo vs monogram weight uneven across roles |
| 5 | Error Prevention | 3 | Static page; CTAs labeled clearly |
| 6 | Recognition Rather Than Recall | 2 | Mobile tech marks hide names (`sr-only` until `sm:`) |
| 7 | Flexibility and Efficiency | 2 | Linear scroll only; no year jump / collapse |
| 8 | Aesthetic and Minimalist Design | 2 | Years overpower hire signals; early roles same mass as flagships |
| 9 | Error Recovery | 3 | Content page — Home/skip adequate |
| 10 | Help and Documentation | 2 | PDF preference clear; unlabeled mobile icons; icon-only Home |
| **Total** | | **26/40** | **Acceptable** |

#### Anti-Patterns Verdict

**LLM assessment**: Not generic SaaS/résumé-template slop. Copy and role structure feel grounded and hireable. Main risk is the saturated **editorial-typographic** lane — sticky italic Newsreader years (48px) vs 18px company titles, hairline rules, monochrome restraint. Identity-preservation applies to Newsreader (committed brand); the issue is hierarchy, not the font choice.

**Deterministic scan**: `detect.mjs --json app/experience components/experience` → **0 findings** (`[]`, exit 0). No absolute-ban hits in markup.

**Visual overlays**: No reliable user-visible overlay. Browser MCP tabs failed to stay open; injection skipped. Fallback: headless screenshot of `/experience` (timeline + bottom nav visible).

#### Overall Impression

A quiet, on-brand career page that reads like the site — not a pasted PDF. The single biggest opportunity: **put stack and role identity above chronology theater** so a 30-second hiring skim lands on fit, not “2026.”

#### What's Working

1. **Voice** — Lived-in narratives (“unglamorous work,” “tribal knowledge”) match Curious · Shipping · Grounded.
2. **Role anatomy** — Company → dates → title → narrative → outcomes → tech is a clear, repeatable unit.
3. **Type discipline** — Source Sans carries body; Newsreader reserved for page label + years (not every heading).

#### Priority Issues

**[P1] Italic sticky years own the hierarchy**
- **Why**: Hireable-at-a-glance loses to magazine timeline grammar.
- **Fix**: Demote years (size/weight/sticky); promote company + title + tech.
- **Suggested command**: `/impeccable typeset`

**[P1] Mobile tech marks are icon-only**
- **Why**: Stack fit is the 30s question; 20px glyphs without names fail recognition.
- **Fix**: Always show tech names on mobile (icons as support).
- **Suggested command**: `/impeccable clarify`

**[P2] No progressive disclosure across career depth**
- **Why**: Early/short roles cost the same skim tax as flagships.
- **Fix**: Collapse or compress pre-flagship; weight recent shipping in first folds.
- **Suggested command**: `/impeccable distill`

**[P2] Floating SiteNav occludes mid-timeline content**
- **Why**: `nav-clearance` protects page end, not mid-scroll role bullets/tech.
- **Fix**: More scroll padding / section breathing, or reduce dock collision.
- **Suggested command**: `/impeccable harden`

**[P3] End-year grouping confuses chronology**
- **Why**: Sticky “2018” implies when work happened, not when it ended.
- **Fix**: Label “Ended YYYY”, group by start, or lean on date ranges alone.
- **Suggested command**: `/impeccable clarify`

#### Persona Red Flags

**Jordan (first-timer / recruiter skim)**: Small italic page label only; icon-only Home; monograms can read as unfinished next to BuildShip logo; dense 2018 stretch without recent/earlier cue.

**Casey (Distracted Mobile)**: Tech names hidden; years still large without sticky benefit; bottom dock overlaps mid-list content while scrolling.

**Morgan (Hiring Manager, 30s fit)**: Eyes hit years before stack; no top-of-page stack summary; flagships not distinct enough to skip early career; mobile stack scan fails without icon literacy.

#### Minor Observations

- Hairline rules under every role flirt with broadsheet default.
- `experience-reveal` uses `opacity: 0` + `both` fill-mode — reduced-motion OK, but animation-gated visibility is a latent risk.
- True Vine empty tech row is honest but visually thin.
- PDF CTA placement as alternate format works.

#### Questions to Consider

- Should Morgan’s 10-second memory be “2026” or “AWS + React production engineer”?
- Are sticky italic years deliberate brand, or magazine grammar fighting the hire brief?
- Is early career a longevity proof, or a collapsed footnote?
- On mobile, does a tech icon earn its pixel without its name?
