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
  proof: "/projects/first-payout-notification.webp",
  proofAlt:
    "iPhone notification: Screen Mockups, your payout of USD 127.79 has been initiated",
  description:
    "The first thing I built alone that a stranger paid for. Retired now, but it's where this started.",
} as const;

export type TechGroup = { label: string; tech: TechStackItem[] };

/**
 * Highlighted on its own: the agentic workflow, then concrete AI shipped to
 * users. Every "shipped" line is verified against the esigna codebase.
 */
export const AI_SECTION = {
  intro: "I work agent-first, with several coding agents running side by side, locally and in the cloud. I also ship AI to real users and test it like any other feature.",
  workflow: { label: "Workflow", tech: resolveTech("Claude Code", "Codex", "herdr") },
  usedFor: { label: "Used for", items: ["Planning features", "Fast iteration", "Code review", "ICP research"] },
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
