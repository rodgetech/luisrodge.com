import { resolveTech, type TechStackItem } from "@/config/site";

/**
 * Homepage content. The page follows marclou.com's personal-dashboard format:
 * a sticky identity column and a stack of product, experience and stack cards.
 *
 * Every number here must stay literally true. Update ESIGNA.revenue as it grows.
 */

export const HOME_INTRO = {
  hook: "I build products people use every day.",
  openTo: "Open to full-time roles, contract work, and building with founders.",
} as const;

export const ESIGNA = {
  name: "esigna",
  url: "https://esigna.app/?ref=luisrodge.com",
  icon: "/projects/esigna-icon.png",
  screenshot: "/projects/esigna.webp",
  screenshotAlt:
    "esigna homepage: a professional email signature, made in minutes",
  revenue: "$500+",
  revenueLabel: "in gross revenue",
  usage: "Used every day",
  description:
    "Email signatures made in minutes. Pick a template, add a headshot, paste it into Gmail, Outlook or Apple Mail. Also runs inside ChatGPT. Designed, built and grown solo.",
} as const;

/** Brief mention only: the product is retired, but the first dollar matters. */
export const SCREEN_MOCKUPS = {
  name: "Screen Mockups",
  badge: "First internet dollar",
  repo: "https://github.com/rodgetech/ai-screen-mockups-app",
  proof: "/projects/first-payout-notification.webp",
  proofAlt:
    "iPhone notification: Screen Mockups, your payout of USD 127.79 has been initiated",
  description:
    "The first thing I built alone that a stranger paid for. Retired now, but it's where this started, and the app is open source.",
} as const;

export type TechGroup = { label: string; tech: TechStackItem[] };

/**
 * Highlighted on its own: the agentic workflow, then concrete AI shipped to
 * users. Every "shipped" line is verified against the esigna codebase.
 */
export const AI_SECTION = {
  // esigna's commit count is from its git history (1,348 on 2026-11-22). Keep it a floor ("1,300+") so it never overstates.
  intro: "I haven't written code by hand in months. I decide what to build, write the spec, and Claude Code and Codex write and review it, side by side. That's how esigna, built solo, has 1,300+ commits since June.",
  workflow: { label: "Workflow", tech: resolveTech("Claude Code", "Codex", "herdr") },
  split: [
    { label: "Agents handle", items: ["Writing the code", "Code review", "Tests", "Refactors", "Customer research"] },
    { label: "I handle", items: ["What to build", "The spec", "What ships"] },
  ],
  shipped: {
    label: "Shipped in esigna",
    items: [
      { title: "ChatGPT app", body: "An MCP server with 13 tools, so people create and edit their signature without leaving the chat." },
      { title: "Agent evals", body: "A harness that gives a model the same tools ChatGPT gets and scores the designs it makes." },
      { title: "Signature import", body: "Paste an existing signature and a model reads it into structured, editable fields." },
    ],
  },
  builtWith: { label: "Built with", tech: resolveTech("MCP & ChatGPT Apps", "AI SDK", "OpenAI API") },
} as const;

/** Kept lean on purpose: no CSS frameworks or utility libraries. */
export const STACK_GROUPS: TechGroup[] = [
  { label: "Web", tech: resolveTech("TypeScript", "React", "Next.js", "NestJS", "PostgreSQL") },
  { label: "Mobile", tech: resolveTech("Swift", "React Native", "Expo") },
  {
    label: "Product & infra",
    tech: resolveTech("Supabase", "Convex", "Stripe", "Dodo Payments", "Clerk", "PostHog", "Vercel", "AWS", "Docker"),
  },
];

/** The aside under the Stack rows: sarcastic, but literally true. */
export const STACK_ASIDE = {
  summary: "Not that it even matters anymore",
  body: [
    "Agents write the code now, so this list is what I reach for out of habit, not what I'm tied to. Say \"use Postgres\" or \"actually, make it Convex\" and that's what gets built.",
    "Tell me your stack and I'll ship in it. My real stack is a clear spec, decent taste, and a lot of tokens.",
  ],
} as const;
