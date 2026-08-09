# SEO

Working plan and progress log for ranking luisrodge.com. Update the **Status** table and the **Log** whenever something ships.

**Goal:** be findable by someone anywhere in the world who searches for a software developer in Belize, and by founders searching for contract/MVP help.

**Canonical origin:** `https://www.luisrodge.com` (the apex 308s to www). This value lives in `SITE_INFO.url` in `config/site.ts` and feeds `metadataBase`, every canonical, the sitemap, and the structured data. Change it in one place only.

---

## Status

| Item | State | Where |
|---|---|---|
| Canonical URLs point at the live domain | ✅ Done 2026-08-09 | `eed0183` |
| `robots.txt` | ✅ Live | `app/robots.ts` |
| `sitemap.xml` (3 URLs) | ✅ Live | `app/sitemap.ts` |
| `Person` + `WebSite` JSON-LD | ✅ Live | `components/seo/structured-data.tsx` |
| Google Search Console verification file | ✅ Live | `public/google257c1b1f2cfd6f0f.html` |
| `/hire-a-software-developer-in-belize` + `FAQPage` schema | ✅ Live 2026-08-09 | `4617d72` |
| Hire page reshape: proof, stack chips, rates still missing | ✅ 2026-08-09 | see Log |
| Focus ring contrast (WCAG 1.4.11) | ✅ Fixed 2026-08-09 | `f6a68c2` |
| Submit sitemap in Search Console | ⬜ **User action** | — |
| Request indexing on all 3 URLs | ⬜ **User action** | — |
| Bing Webmaster Tools | ⬜ **User action** | — |
| Validate schema at validator.schema.org | ⬜ **User action** | — |
| Update social profiles to link luisrodge.com | 🟡 GitHub done; X / YouTube / LinkedIn pending | — |
| `/belize` ecosystem primer | ⬜ Not started | Phase 2 |
| `/projects/[slug]` case studies | ⬜ Not started | Phase 2 |
| `/writing` | ⬜ Not started | Phase 2 |
| Backlink / local-press push | ⬜ Not started | Phase 3 |

**Live URLs** (all verified 200 on 2026-08-09): `/`, `/experience`, `/hire-a-software-developer-in-belize`, `/robots.txt`, `/sitemap.xml`, `/google257c1b1f2cfd6f0f.html`

---

## Settled decisions

Recorded so they don't get relitigated.

### The old domain is gone, and we're not buying it back

`rodgetech.com` lapsed and was drop-caught on **2026-05-22** (registrar DropCatch.com, NameBright DNS). It's now listed on HugeDomains for **$995** and serves a for-sale page.

We are not buying it. The equity isn't there:

- The old site was a client-rendered SPA. The May 2025 Wayback capture returns essentially no server HTML, so there was little indexable content and little ranking equity to lose.
- The backlink profile was thin and mostly self-owned — searching `"rodgetech.com"` surfaces our own GitHub and X profiles, not third-party editorial links.
- The npm package and GitHub repos never linked to it.
- A personal-name domain is a *better* fit than `rodgetech.com` for the entity we're building. "RodgeTech" reads like an agency; "software developer in Belize" is a person query.

**Revisit only if it drops under ~$250**, as a defensive redirect. Otherwise that money buys more ranking movement in Phase 3.

**Consequence:** the 301 route is closed. The only equity recovery available is manually updating links we control (see Status).

### `luisrodge.com` registered 2026-06-14

The domain is new. This is the real constraint on timelines, not anything we build.

### The SERP for "software developer in Belize" is mixed-intent

Live check on 2026-08-09 — page one is Clutch, The Manifest, Glassdoor salaries, LinkedIn jobs, herohunt.ai, sapphiresolutions, and a 2023 Hopkins Belize blog post.

Two conclusions:

1. **There is a real gap** — no individual ranks, and several incumbents are thin programmatic pages.
2. **But Google has decided the query doesn't mean "one freelancer."** It means vendor directories, salary research, and job listings. A portfolio homepage is a poor intent match.

So: **don't rank the portfolio for that query — rank a resource for it, and let the resource sell.** That's what `/hire-a-software-developer-in-belize` is.

### The hire page leads with contract/MVP work

Chosen 2026-08-09. The Belize queries are dominated by outsourcing and vendor-shopping intent, so contract framing swims with the SERP rather than against it.

⚠️ **`PRODUCT.md` still says both audiences get equal weight.** That's now inconsistent with this decision and should be reconciled — every impeccable command reads `PRODUCT.md` before doing design work.

### Volume expectations are deliberately modest

"Software developer in Belize" is likely under ~50 searches/month globally, and a meaningful share is job seekers and salary researchers rather than hirers. **Judge this on capture rate over a few high-intent searches, not on traffic.**

Stack and service queries ("hire a Next.js developer", "SwiftUI MVP developer") have far more volume and no geographic ceiling — that's what the case studies in Phase 2 are for.

⚠️ **No keyword data has been validated.** Every volume and difficulty estimate here is judgment. The OpenSEO account is at **0 credits**. Top it up before investing in more pages.

---

## The plan

### Phase 0 — Unblock ✅ Complete

Canonical URLs, `robots.txt`, `sitemap.xml`, `Person` + `WebSite` JSON-LD.

The critical bug: canonicals pointed at `rodgetech.com`, naming a domain we no longer own as the authoritative version of every page.

### Phase 1 — Entity 🟡 In progress

The identity is fragmented: display name "Luis Rodge", legal name "Luis Rodriguez", `@rodgetech` on X/GitHub/YouTube, domain `luisrodge.com`. Search engines and LLMs resolve people through corroborated identity graphs, so four unlinked identities are four weak entities instead of one strong one.

- ✅ `sameAs` in the JSON-LD ties all four profiles to the domain
- ✅ `name` = Luis Rodriguez, `alternateName` = Luis Rodge
- ✅ `PostalAddress` (Cayo, BZ) + `hasOccupation.occupationLocation` (Belize) carry the geo signal
- 🟡 Social profiles need to point back — GitHub done, X / YouTube / LinkedIn pending

**Keep the `@rodgetech` handles.** They're aged accounts with history and they're now the strongest `sameAs` signals. Keep the handle, drop the domain.

### Phase 2 — Ranking surface 🟡 In progress

Google ranks pages, not sites. Before the hire page there were two pages totaling ~400 words, both answering "who is Luis Rodge?" — a question nobody types.

| Page | Job | State |
|---|---|---|
| `/hire-a-software-developer-in-belize` | Capture buying intent | ✅ Live, ~810 words |
| `/belize` ecosystem primer | Attract links (the linkable asset) | ⬜ |
| `/projects/[slug]` case studies | Prove + rank on stack queries, no geo ceiling | ⬜ |
| `/writing` | Freshness + compounding long tail | ⬜ |

**Do not build thin geo pages** ("...in Belize City", "...in Belmopan"). That's what the weak incumbents do, and on a zero-authority domain it reads as spam. Two strong pages beat twenty thin ones.

### Phase 3 — Authority ⬜ Not started — this is the hard part

The domain has essentially no backlinks. **Nothing in Phase 2 ranks without this.** Phase 2 builds the store; Phase 3 is the road to it.

- **Profile links:** LinkedIn, GitHub bio, X, YouTube, dev.to, Hashnode, Stack Overflow, Product Hunt, Peerlist, TrustMRR (already there)
- **Belize local press — the unfair advantage.** Amandala, 7 News Belize, Channel 5, Breaking Belize News, Belize Chamber of Commerce, BELTRAIDE, Belize Tech Hub. "Belizean engineer earns first international revenue from a product built solo" is a publishable local story, and those domains are old, authoritative, and topically perfect.
- **Directories that accept solo operators:** Clutch and The Manifest both allow one-person shops — and they already own the target SERP.
- **Guest post on hopkinsbz.com** — currently page one for the exact target term.

### Phase 4 — AI answer visibility ⬜ Not started

"Who can I hire in Belize" increasingly gets asked to ChatGPT/Perplexity rather than typed into Google, and those answers are assembled from the same directory corpus plus schema-marked pages. Requires: presence in the directories they read, clean `Person` / `FAQPage` schema (✅ done), and facts stated in plainly extractable declarative sentences (✅ the hire page FAQ is written for this).

Bing Webmaster Tools matters here — ChatGPT's search grounding leans on Bing's index.

---

## Target queries

Unvalidated (0 OpenSEO credits). Ordered by intent strength, not volume.

**Primary — commercial**
- hire a software developer in Belize
- software developer in Belize
- hire Belizean developer
- outsource software development Belize

**Secondary — informational, feeds the hire page and `/belize`**
- Belize software developer rates
- Belize developer time zone
- Belize tech industry / talent pool

**Brand**
- luis rodge · luis rodriguez belize developer · rodgetech

**Non-geo, higher ceiling — for Phase 2 case studies**
- hire a Next.js developer · SwiftUI MVP developer · fractional engineer for MVP

---

## Measurement

| Signal | Where | Expect |
|---|---|---|
| First data appears | Search Console | 48–72h after indexing request |
| Impressions for "belize" queries | Search Console → Performance | 2–3 weeks |
| Rank #1 for own name | Manual check | **Within 30 days — if not, something is broken** |
| Long tail ("hire belizean developer") | Rank tracking | 3–5 months |
| "Software developer in Belize" page 1 | Rank tracking | 6–12 months, and only with Phase 3 |

**The KPI that actually matters** is inbound bookings and emails attributable to organic search, not impressions.

Don't read anything into an empty Performance tab before ~3 weeks. That's normal for a domain registered in June 2026.

---

## Known gaps

- **No rates on the hire page.** A real filter for buyers, and a query people type. Needs Luis's numbers. Still the largest remaining gap.
- **No availability signal.** Nothing says whether Luis is free, or from when.
- **No engagement terms.** IP ownership especially — the thing people are quietly most anxious about when hiring across a border.
- **No testimonial.** PRODUCT.md records none on hand. One line from BuildShip would outweigh a lot of copy.
- **`PRODUCT.md` audience is stale** — see Settled decisions.
- **Dark-mode body contrast unverified.** `muted-chalk` `oklch(0.72 0.015 265)` on `night-paper` `oklch(0.145 0.008 265)` is every word of body copy in dark mode; never got a correct measurement.
- **Stale index entries.** Google still has `rodgetech.com` / `me.rodgetech.com` indexed under the old brand, now resolving to a for-sale page. Decays on its own over a few months. Don't fight it — just get luisrodge.com indexed.
- **Local git remote** still points at `v2.rodgetech.com`; GitHub redirects, but fix with `git remote set-url origin git@github.com:rodgetech/luisrodge.com.git`.

---

## Log

**2026-08-09**
- Found and fixed the blocker: canonicals pointed at `rodgetech.com`, which lapsed 2026-05-22 and now serves a HugeDomains sale page. `/experience` was naming a third party's domain as its authoritative version. (`eed0183`, PR #7)
- Added `robots.txt` and `sitemap.xml` — both previously 404. (`eed0183`)
- Added `Person` + `WebSite` JSON-LD with the `sameAs` graph. Phone deliberately excluded: it's in config but rendered nowhere, so publishing it would expose a number that isn't currently public. (`eed0183`)
- Added the Google Search Console verification file. Must stay in the repo — Google re-checks it and revokes verification if it 404s. (`58db388`, PR #8)
- Decided against buying `rodgetech.com` back at $995.
- Chose contract/MVP as the lead audience for the hire page.
- Shipped `/hire-a-software-developer-in-belize` (~810 words) with `FAQPage` schema, sitemap entry at priority 0.9, and a homepage link for crawlability. (`4617d72`)
- Corrected a factual error in the time zone claim: Belize is UTC-6 year round, matching US **Central in winter and Mountain in summer** — not Central year round, as first stated.
- Critiqued the hire page (22/28). Snapshot in `.impeccable/critique/`. Three P1s: invisible CTA, thirteen identically-treated blocks, zero imagery or proof.
- **Corrected the company names.** Research found all three originals came from one stale Clutch list with no independent corroboration: Castlebridge Systems' site is unedited template boilerplate with a leftover placeholder name and nothing published since May 2024; Idea Lab Studios is an advertising agency, not an app developer; 501 Enterprise is a managed-IT and security-camera firm. Dropped Castlebridge, recategorized the rest, and the copy now warns readers that Belize "top developer" directory lists are unreliable — which is a first-hand observation a directory page structurally cannot make.
- Reshaped the page against the critique: proof block with the payout screenshot, byline with the avatar, a real CTA pill, FAQ collapsed into disclosures, and the caveat pulled out of the hiring-options list.
- Added payment rails from experience (Bill.com, Rippling, Remitly) and the **BZD/USD 2:1 peg**, fixed since 1976 — a checkable no-FX-risk advantage over LatAm alternatives.
- Added the stack as chips: the page previously named zero technologies, which cost both buyer confidence and every non-geo stack query.
- Fixed the site-wide focus ring, which failed WCAG 1.4.11 at 1.51:1. Full palette audit found every text pairing already passing in both themes.
- Design pass: entry rules with an inked tick so section starts are legible (the hairline alone measured 1.29:1), scroll-driven rule draw, disclosure animation, and a bolder masthead. `DESIGN.md` updated to match.
