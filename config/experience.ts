import {
  resolveTech,
  type TechStackItem,
} from "@/config/site";

export type CompanyMarkModel =
  | { kind: "monogram"; text: string }
  | { kind: "logo"; src: string; fit: "contain" }
  | { kind: "logo"; src: string; fit: "cover"; surface: "dark" | "muted" };

export type ExperienceSection = "featured" | "earlier";

export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  mark: CompanyMarkModel;
  section: ExperienceSection;
  narrative: string;
  outcomes: string[];
  tech: TechStackItem[];
};

export type ExperienceYearChapter = {
  year: string;
  roles: ExperienceRole[];
};

export type ExperiencePageModel = {
  chapters: ExperienceYearChapter[];
  earlier: ExperienceRole[];
};

/**
 * Role packages for /experience.
 * Story facts follow resume.pdf; tech marks are role-true tools (confirmed by Luis).
 */
export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: "capacitive",
    company: "Capacitive Media",
    title: "Website Engineer",
    startDate: "2019",
    endDate: "2026",
    mark: { kind: "logo", src: "/capacitive.png", fit: "contain" },
    section: "featured",
    narrative:
      "Kept production web apps and ad tooling shipping on AWS — migrations, Dockerized internals, and the unglamorous work that keeps revenue reporting honest.",
    outcomes: [
      "Moved apps onto AWS with CloudFormation so infrastructure lived as code, not tribal knowledge",
      "Built ETL pipelines for ad-spend analysis and clearer reporting",
      "Dockerized a legacy management tool and rewrote the ad revenue reconciliation app in React",
    ],
    tech: resolveTech("React", "AWS", "Docker", "NestJS"),
  },
  {
    id: "buildship",
    company: "BuildShip",
    title: "Software Engineer",
    startDate: "2023",
    endDate: "2025",
    mark: { kind: "logo", src: "/buildship.png", fit: "contain" },
    section: "featured",
    narrative:
      "Strengthened the builder community around a visual backend platform — demos, templates, livestreams, and the support loops that help people actually ship.",
    outcomes: [
      "Created demos and community-driven templates builders could clone and launch from",
      "Produced and hosted weekly YouTube videos and live streams",
      "Improved docs and direct support across email, Discord, and meetings",
    ],
    tech: resolveTech("TypeScript", "Next.js", "React", "GCP"),
  },
  {
    id: "dealer-spike",
    company: "Dealer Spike Belize",
    title: "Technical Support",
    startDate: "2018",
    endDate: "2018",
    mark: { kind: "logo", src: "/dealerspike.png", fit: "contain" },
    section: "earlier",
    narrative:
      "Short contract on frontend fixes and UI mockups for foreign-clientele tickets.",
    outcomes: [
      "Shipped approved UI mockups into production for client sites",
    ],
    tech: resolveTech("JavaScript", "HTML", "CSS", "jQuery"),
  },
  {
    id: "idealab",
    company: "Idealab Studios",
    title: "Full Stack Developer",
    startDate: "2018",
    endDate: "2018",
    mark: { kind: "logo", src: "/idealab.png", fit: "contain" },
    section: "earlier",
    narrative:
      "Built and maintained SaaS products for local institutions — REST APIs, hosting moves, and bringing a legacy CMS into the present.",
    outcomes: [
      "Versioned existing APIs and shipped new REST endpoints for internal and external use",
      "Migrated sites from shared hosting onto delegated VPS setups",
    ],
    tech: resolveTech("AngularJS", "Express.js", "MySQL", "DigitalOcean"),
  },
  {
    id: "belizing",
    company: "Belizing",
    title: "Software Engineer",
    startDate: "2017",
    endDate: "2018",
    mark: {
      kind: "logo",
      src: "/belizing.png",
      fit: "cover",
      surface: "dark",
    },
    section: "earlier",
    narrative:
      "Payments and booking infrastructure for tourism — Stripe between tourists and suppliers, plus portals and versioned API docs for mobile.",
    outcomes: [
      "Shipped Belizing Payments REST API for mobile consumption",
      "Integrated Stripe for tourist ↔ supplier transactions",
      "Built admin and supplier portals for payments, deposits, and archives",
    ],
    tech: resolveTech("ASP.NET", "Ruby", "Ruby on Rails", "React"),
  },
  {
    id: "gitz",
    company: "Gitz Office Supplies",
    title: "Ecommerce Administrator",
    startDate: "2016",
    endDate: "2017",
    mark: {
      kind: "logo",
      src: "/gitz.png",
      fit: "cover",
      surface: "muted",
    },
    section: "earlier",
    narrative:
      "Stood up the core ecommerce stack for gitz.bz and the utility scripts staff used for inventory and orders.",
    outcomes: [
      "Built storefront infrastructure and SaaS-backed custom tiers for site customers",
    ],
    tech: resolveTech("Python", "Shopify"),
  },
  {
    id: "true-vine",
    company: "True Vine Adventures",
    title: "Technical Maintainer",
    startDate: "2011",
    endDate: "2012",
    mark: { kind: "monogram", text: "TV" },
    section: "earlier",
    narrative:
      "Part-time: booking site and PayPal payments that put a tourism company online.",
    outcomes: [
      "Launched and maintained the booking site on a LAMP stack",
      "Kept the site and PayPal payments infrastructure running",
    ],
    tech: resolveTech("PHP"),
  },
];

/** Featured year-chapters + flat earlier list — the shape /experience actually renders. */
export function getExperienceSections(
  roles: ExperienceRole[] = EXPERIENCE_ROLES,
): ExperiencePageModel {
  const featured = roles.filter((role) => role.section === "featured");
  const earlier = roles.filter((role) => role.section === "earlier");

  const chapters = new Map<string, ExperienceRole[]>();
  for (const role of featured) {
    const list = chapters.get(role.endDate) ?? [];
    list.push(role);
    chapters.set(role.endDate, list);
  }

  return {
    chapters: [...chapters.entries()].map(([year, yearRoles]) => ({
      year,
      roles: yearRoles,
    })),
    earlier,
  };
}
