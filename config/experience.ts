import { TECH_STACK } from "@/config/site";

export type ExperienceTech = {
  name: string;
  icon: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  monogram: string;
  logo?: string;
  flagship?: boolean;
  narrative: string;
  outcomes: string[];
  tech: ExperienceTech[];
};

function tech(...names: string[]): ExperienceTech[] {
  return names.map((name) => {
    const match = TECH_STACK.find((item) => item.name === name);
    if (!match) {
      throw new Error(`Missing TECH_STACK icon for "${name}"`);
    }
    return { name: match.name, icon: match.icon };
  });
}

/** Locked role packages for /experience — see .scratch/experience-page/handoff.md */
export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: "capacitive",
    company: "Capacitive Media",
    title: "Website Engineer",
    startDate: "2019",
    endDate: "2026",
    monogram: "CM",
    flagship: true,
    narrative:
      "Kept production web apps and ad tooling shipping on AWS — migrations, internal systems, and the unglamorous work that keeps revenue reporting honest.",
    outcomes: [
      "Moved apps onto AWS with CloudFormation so infrastructure lived as code, not tribal knowledge",
      "Built ETL pipelines for ad-spend analysis and clearer reporting",
      "Rewrote the internal ad revenue reconciliation tool in modern React",
    ],
    tech: tech("React", "AWS", "TypeScript", "PostgreSQL"),
  },
  {
    id: "buildship",
    company: "BuildShip",
    title: "Software Engineer",
    startDate: "2023",
    endDate: "2025",
    monogram: "BS",
    logo: "/buildship.png",
    flagship: true,
    narrative:
      "Helped founders go from idea to working backend on a visual platform — demos, templates, docs, and the community loops that turn support into product.",
    outcomes: [
      "Shipped cloneable templates and sample apps founders could launch from",
      "Owned weekly product demos end-to-end with real API wiring",
      "Turned live sessions and support into fixes that shortened time-to-first-integration",
    ],
    tech: tech("TypeScript", "Next.js", "React", "Supabase"),
  },
  {
    id: "dealer-spike",
    company: "Dealer Spike Belize",
    title: "Technical Support",
    startDate: "2018",
    endDate: "2018",
    monogram: "DS",
    narrative:
      "Short contract on frontend fixes and UI mockups for foreign-clientele tickets.",
    outcomes: [
      "Shipped approved UI mockups into production for client sites",
    ],
    tech: tech("JavaScript", "React"),
  },
  {
    id: "idealab",
    company: "Idealab Studios",
    title: "Full Stack Developer",
    startDate: "2018",
    endDate: "2018",
    monogram: "IS",
    narrative:
      "Built and maintained SaaS products for local institutions — APIs, hosting moves, and modernizing a legacy CMS.",
    outcomes: [
      "Versioned REST APIs for internal and external consumers",
      "Migrated sites from shared hosting onto delegated VPS setups",
    ],
    tech: tech("Ruby", "Ruby on Rails", "PostgreSQL"),
  },
  {
    id: "belizing",
    company: "Belizing",
    title: "Software Engineer",
    startDate: "2017",
    endDate: "2018",
    monogram: "BZ",
    narrative:
      "Payments and booking infrastructure for tourism — Stripe for tourists and suppliers, plus an admin portal and versioned API docs for mobile.",
    outcomes: [
      "Shipped Belizing Payments REST API for mobile consumption",
      "Integrated Stripe for tourist ↔ supplier transactions",
    ],
    tech: tech("Ruby on Rails", "PostgreSQL", "JavaScript"),
  },
  {
    id: "gitz",
    company: "Gitz Office Supplies",
    title: "Ecommerce Administrator",
    startDate: "2016",
    endDate: "2017",
    monogram: "GZ",
    narrative:
      "Stood up the core ecommerce stack for gitz.bz and the utility scripts staff used for inventory and orders.",
    outcomes: [
      "Built the storefront infrastructure and SaaS-backed custom tiers for site customers",
    ],
    tech: tech("JavaScript"),
  },
  {
    id: "true-vine",
    company: "True Vine Adventures",
    title: "Technical Maintainer",
    startDate: "2011",
    endDate: "2012",
    monogram: "TV",
    narrative:
      "Part-time: booking site and PayPal payments that put a tourism company online.",
    outcomes: [
      "Launched and maintained the booking site on a LAMP stack",
    ],
    tech: [],
  },
];

export const EXPERIENCE_PDF_HREF = "/resume.pdf";
export const EXPERIENCE_PAGE_PATH = "/experience";

export function groupExperienceByEndYear(roles: ExperienceRole[]) {
  const map = new Map<string, ExperienceRole[]>();
  for (const role of roles) {
    const list = map.get(role.endDate) ?? [];
    list.push(role);
    map.set(role.endDate, list);
  }
  return [...map.entries()];
}
