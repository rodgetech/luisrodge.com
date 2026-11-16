export const USER = {
  firstName: "Luis",
  lastName: "Rodriguez",
  /**
   * The name the site leads with: page titles, the homepage h1, the byline,
   * and `name` in the Person schema. People search the real name, so it
   * carries the weight.
   */
  fullName: "Luis Rodriguez",
  /**
   * Kept as `alternateName` in the Person schema and nowhere else. It still
   * matters — it ties the aged @rodgetech identity to this one — but it is no
   * longer what any visible heading says.
   */
  displayName: "Luis Rodge",
  username: "rodgetech",
  tagline: "Full stack engineer who takes products from idea to launch",
  address: "Cayo, Belize, Central America",
  /** Structured-data breakdown of `address` — keep the two in sync. */
  addressRegion: "Cayo",
  addressCountry: "BZ",
  countryName: "Belize",
  phoneNumber: "+5016082077",
  email: "rodgetech@gmail.com",
  website: "https://www.luisrodge.com",
  jobTitle: "Software Engineer",
  avatar: "/me.png",
  ogImage: "/social/luis-rodriguez-og.png",
  timeZone: "America/Belize",
  keywords: [
    "rodgetech",
    "luis rodriguez",
    "software engineer belize",
    "full stack developer",
    "indie hacker",
  ],
  dateCreated: "2025-12-14", // YYYY-MM-DD
};

export const BOOKING_URL = "https://cal.com/luisrodge/15min";
export const BOOKING_CTA_LABEL = "Book a call";

export const CONTACT_MAILTO = `mailto:${USER.email}`;

export const BIO = {
  intro:
    "I'm a software engineer from Belize. I take products from idea to launch on web and mobile. I built esigna, an email signature app people use every day.",
} as const;

export const SITE_INFO = {
  name: USER.fullName,
  /**
   * Canonical origin. Must match the host Vercel serves after redirects —
   * the apex 308s to www, so www is canonical. Feeds metadataBase, canonicals,
   * sitemap, and structured data.
   */
  url: "https://www.luisrodge.com",
  ogImage: USER.ogImage,
  description: `${USER.fullName}, software engineer from Belize. Built esigna, an email signature app people use every day. Experience at BuildShip and Capacitive Media.`,
  keywords: USER.keywords,
};

export const SOCIAL_IMAGE = {
  url: SITE_INFO.ogImage,
  width: 1200,
  height: 630,
  alt: "Luis Rodriguez, software engineer from Belize, and esigna",
  type: "image/png",
} as const;

export const GITHUB_USERNAME = "rodgetech";

export const SOCIAL_LINKS = {
  x: {
    name: "X",
    url: "https://x.com/rodgetech",
    username: "@rodgetech",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rodriglu",
    username: "rodriglu",
  },
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/@rodgetech",
    username: "@rodgetech",
  },
  github: {
    name: "GitHub",
    url: `https://github.com/${GITHUB_USERNAME}`,
    username: GITHUB_USERNAME,
  },
};

/** Canonical site paths — import these instead of minting parallel string constants. */
export const SITE_PATHS = {
  experience: "/experience",
  hire: "/hire-a-software-developer-in-belize",
  resumePdf: "/resume.pdf",
} as const;

/** Homepage shows a tight stack; full set lives here for reference / resume. */
export const TECH_STACK = [
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "React", icon: "/stack/react.svg" },
  { name: "Next.js", icon: "/stack/nextjs.svg", invertInDark: true },
  { name: "NestJS", icon: "/stack/nestjs.svg" },
  { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
  { name: "AWS", icon: "/stack/aws.svg" },
  { name: "GCP", icon: "/stack/gcp.svg" },
  { name: "Supabase", icon: "/stack/supabase.png" },
  { name: "Python", icon: "/stack/python.svg" },
  { name: "JavaScript", icon: "/stack/javascript.svg" },
  { name: "HTML", icon: "/stack/html5.svg" },
  { name: "CSS", icon: "/stack/css3.svg" },
  { name: "jQuery", icon: "/stack/jquery.svg" },
  { name: "AngularJS", icon: "/stack/angularjs.svg" },
  { name: "Express.js", icon: "/stack/express.svg", invertInDark: true },
  { name: "MySQL", icon: "/stack/mysql.svg" },
  { name: "DigitalOcean", icon: "/stack/digitalocean.svg" },
  { name: "ASP.NET", icon: "/stack/dotnet.svg" },
  { name: "Ruby", icon: "/stack/ruby.svg" },
  { name: "Ruby on Rails", icon: "/stack/rubyonrails.svg" },
  { name: "Shopify", icon: "/stack/shopify.svg" },
  { name: "Tailwind CSS", icon: "/stack/tailwindcss.svg" },
  { name: "Convex", icon: "/stack/convex.png" },
  { name: "Docker", icon: "/stack/docker.svg" },
  { name: "PHP", icon: "/stack/php.svg" },
  { name: "Swift", icon: "/stack/swift.svg" },
  { name: "React Native", icon: "/stack/react.svg" },
  { name: "Expo", icon: "/stack/expo.svg", invertInDark: true },
  { name: "Claude Code", icon: "/stack/claude.svg" },
  { name: "Codex", icon: "/stack/openai.svg", invertInDark: true },
  { name: "herdr", icon: "/stack/herdr.svg", invertInDark: true },
  { name: "AI SDK", icon: "/stack/vercel.svg", invertInDark: true },
  { name: "OpenAI API", icon: "/stack/openai.svg", invertInDark: true },
  { name: "MCP & ChatGPT Apps", icon: "/stack/modelcontextprotocol.svg", invertInDark: true },
  { name: "Stripe", icon: "/stack/stripe.svg" },
  { name: "Dodo Payments", icon: "/stack/dodopayments.svg" },
  { name: "Clerk", icon: "/stack/clerk.svg" },
  { name: "PostHog", icon: "/stack/posthog.svg", invertInDark: true },
  { name: "Vercel", icon: "/stack/vercel.svg", invertInDark: true },
] as const;

export type TechStackItem = (typeof TECH_STACK)[number];
export type TechName = TechStackItem["name"];

const TECH_BY_NAME = Object.fromEntries(
  TECH_STACK.map((item) => [item.name, item]),
) as Record<TechName, TechStackItem>;

/** Resolve role/homepage tech by typed name. */
export function resolveTech(...names: TechName[]): TechStackItem[] {
  return names.map((name) => TECH_BY_NAME[name]);
}

/** Dark-mode tone for mono vs colored stack icons. */
export function techIconToneClass(item: TechStackItem): string {
  return "invertInDark" in item && item.invertInDark
    ? "dark:invert"
    : "dark:brightness-110";
}
