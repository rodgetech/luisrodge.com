import { SITE_PATHS, USER } from "@/config/site";

/**
 * Content for /hire-a-software-developer-in-belize.
 *
 * Target intent is commercial: someone shopping for contract or MVP help who
 * has typed a Belize-shaped query. The page wins on first-hand facts the
 * ranking incumbents (programmatic directory pages) don't have, so every claim
 * here must stay literally true. Check the time zone copy against current DST
 * rules before editing it.
 */

export const HIRE_PAGE = {
  slug: SITE_PATHS.hire,
  title: "Hire a Software Developer in Belize",
  description:
    "An honest guide to hiring a software developer in Belize. Time zones, language, how contracts work, and what the talent pool actually looks like. Written by a full stack engineer based in Cayo.",
  lead: `I'm ${USER.firstName} ${USER.lastName}, a full stack engineer based in ${USER.addressRegion}, Belize. I build MVPs and ship production software for founders and small teams.`,
  subLead:
    "If you're weighing Belize as a place to hire, this is the guide I wish existed, including the parts that argue against me.",
} as const;

/** Differentiators vs. the LatAm alternatives buyers are usually comparing. */
export const WHY_BELIZE = [
  {
    id: "timezone",
    title: "One clock, all year",
    body: "Belize sits at UTC-6 and does not observe daylight saving time. From roughly November to March that's identical to US Central. The rest of the year it lines up with US Mountain and sits an hour behind Central. Your overlap never disappears. The shift happens on your calendar, not mine.",
  },
  {
    id: "language",
    title: "English is the official language",
    body: "Belize is the only country in Central America where English is the official language. Not English as a second language, not a bilingual policy. It's the language of school, government, and business. Nothing gets lost on standups, specs, or code review.",
  },
  {
    id: "overlap",
    title: "Real overlap with US teams",
    body: "A normal Belize workday covers a normal US workday. No 5am standups, no working around a team you never actually meet, no waiting a full cycle for an answer. If you've hired across ten time zones before, this is the difference you already felt.",
  },
  {
    id: "cost",
    title: "Below US market rates",
    body: "Cost of living here is a fraction of a US metro, and rates reflect that. You're not paying a US senior salary for senior work. You're also not in a marketplace where the lowest bid sets both the price and the quality.",
  },
] as const;

/** Kept honest on purpose. This section is why the page deserves to rank. */
export const OTHER_OPTIONS = {
  intro:
    "I'm one person, which makes me right for some work and wrong for other work. If what you need doesn't match what's above, here's where else to look.",
  options: [
    {
      id: "agencies",
      title: "Local agencies and studios",
      body: "If you need a full team, ongoing staffing, or coverage that survives someone taking a holiday, a studio is the better structure. Idea Lab Studios, Castlebridge Systems, and 501 Enterprise are the established names locally.",
    },
    {
      id: "marketplaces",
      title: "Marketplaces",
      body: "Upwork and Freelancer both have Belize-based developers. You'll trade curation for volume and escrow, which is a fair swap for small, well-specified jobs.",
    },
    {
      id: "eor",
      title: "Employer of Record, for full-time hires",
      body: "You can employ someone in Belize without opening an entity here. An EOR handles payroll, contributions, and compliance. That's the standard route when you want headcount rather than a contract.",
    },
    {
      id: "honest",
      title: "And the honest caveat",
      body: "Belize is a country of roughly 400,000 people. The developer pool is small, and anyone telling you there's a deep bench of specialists in any given niche is selling you something. Depth is the real limitation here. The time zone, the language, and the rates are not.",
    },
  ],
} as const;

export const HIRE_CTA = {
  heading: "Working together",
  body: "The work I take on is usually one of two shapes. Taking an idea to a launched MVP, or joining a small team to ship a product that's stuck. Web and mobile, front to back.",
  scopeNote:
    "Fastest way to find out if it's a fit is a short call. Bring the problem, not a spec.",
} as const;

/**
 * FAQ copy is deliberately declarative and self-contained: these answers are
 * the units an AI Overview or LLM will lift, and they have to survive being
 * quoted without the surrounding page.
 */
export const HIRE_FAQ = [
  {
    question: "What time zone is Belize in?",
    answer:
      "Belize is UTC-6 all year and does not observe daylight saving time. That matches US Central Time during the US winter and US Mountain Time during the US summer, so a Belize-based developer overlaps a full US workday in either season.",
  },
  {
    question: "Do software developers in Belize speak English?",
    answer:
      "Yes. English is the official language of Belize, the only country in Central America where that's the case. It's the language of instruction in schools and the language of business, so no translation layer is needed on technical work.",
  },
  {
    question: "How do you pay a contractor in Belize?",
    answer:
      "Most engagements settle by international bank transfer or a service like Wise or Deel. A contractor invoices you directly and handles their own taxes locally. If you want to employ someone full-time instead, an Employer of Record can run payroll without you registering a company in Belize.",
  },
  {
    question: "Is it cheaper to hire a software developer in Belize?",
    answer:
      "Generally yes, compared with hiring in a US metro. Rates track a much lower cost of living. The saving is real, but it isn't the main reason to hire here. The time zone overlap and English being the official language are what separate Belize from cheaper offshore options.",
  },
  {
    question: "How large is the software talent pool in Belize?",
    answer:
      "Small. Belize has a population of roughly 400,000 and only a fraction works in ICT. That makes it a poor fit for scaling a large team quickly, and a good fit for hiring one or two senior people who overlap your working day.",
  },
] as const;

export const HIRE_PROOF_LINKS = {
  experience: SITE_PATHS.experience,
  resume: SITE_PATHS.resumePdf,
} as const;
