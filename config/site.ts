export const USER = {
  firstName: "Luis",
  lastName: "Rodriguez",
  displayName: "Luis Rodge",
  username: "rodgetech",
  tagline: "Full stack engineer who takes products from idea to launch",
  address: "Cayo, Belize, Central America",
  phoneNumber: "+5016082077",
  email: "rodgetech@gmail.com",
  website: "https://rodgetech.com",
  jobTitle: "Software Engineer",
  avatar: "/me.png",
  ogImage: "/me.png",
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

export const CONTACT_CTA_LABEL = "Say Hi";
export const CONTACT_MAILTO = `mailto:${USER.email}`;

/** Co-equal primary actions — book a call and say hi. Shared by hero + dock. */
export const OUTREACH_CTAS = [
  {
    id: "book",
    href: BOOKING_URL,
    label: BOOKING_CTA_LABEL,
    shortLabel: "Book",
    external: true,
  },
  {
    id: "email",
    href: CONTACT_MAILTO,
    label: CONTACT_CTA_LABEL,
    shortLabel: "Hi",
    external: false,
  },
] as const;

export type OutreachCtaId = (typeof OUTREACH_CTAS)[number]["id"];

export const FOOTER_TAGLINE = "Always building and shipping.";

export const BIO = {
  intro:
    "I'm a software engineer from Belize. I take products from idea to launch on web and mobile. Currently building an iOS app solo.",
  openTo: "Open to full time roles, contract MVPs, and building with founders.",
} as const;

export const SECTIONS = {
  about: {
    id: "about",
    label: "About",
  },
  building: {
    id: "currently-working-on",
    label: "Building",
  },
  work: {
    id: "work-experience",
    label: "Experience",
  },
  stack: {
    id: "stack",
    label: "Stack",
  },
  proud: {
    id: "proud-moment",
    label: "Proud moment",
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;

export const SITE_INFO = {
  name: USER.displayName,
  url: "https://rodgetech.com",
  ogImage: USER.ogImage,
  description: `${USER.firstName} ${USER.lastName}, full stack engineer from Belize who takes products from idea to launch. Building Video Journal. Open to full-time roles and founder partnerships.`,
  keywords: USER.keywords,
};

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

export const WORK_EXPERIENCE = {
  mostRecent: {
    company: "BuildShip",
    logo: "/buildship.png",
    title: "Software Engineer",
    startDate: "2023",
    endDate: "2025",
    responsibilities: [
      "Shipped templates and sample apps that took founders from idea to a working backend on BuildShip's visual platform",
      "Owned weekly product demos end-to-end — wiring real APIs into flows people could clone and launch from",
      "Turned support and live sessions into product fixes, cutting time-to-first-integration for new teams",
      "Improved platform documentation and onboarding for developer-facing launches",
      "Hosted community sessions that fed engineering priorities from real user friction",
    ],
    highlightCount: 3,
  },
  resumeUrl: "/resume.pdf",
};

/** Homepage shows a tight stack; full set lives here for reference / resume. */
export const TECH_STACK = [
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "React", icon: "/stack/react.svg" },
  { name: "Next.js", icon: "/stack/nextjs.svg" },
  { name: "NestJS", icon: "/stack/nestjs.svg" },
  { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
  { name: "AWS", icon: "/stack/aws.svg" },
  { name: "Supabase", icon: "/stack/supabase.png" },
  { name: "Python", icon: "/stack/python.svg" },
  { name: "JavaScript", icon: "/stack/javascript.svg" },
  { name: "Ruby", icon: "/stack/ruby.svg" },
  { name: "Ruby on Rails", icon: "/stack/rubyonrails.svg" },
  { name: "Tailwind CSS", icon: "/stack/tailwindcss.svg" },
  { name: "Convex", icon: "/stack/convex.png" },
];

export const TECH_STACK_HOMEPAGE_COUNT = 8;

export const VIDEO_JOURNAL = {
  name: "Video Journal",
  description:
    "A TikTok style video journaling app for iOS. Writing never captured how I actually felt. With video, I can go back and see myself, not just the story I wrote down.",
  highlights: ["Feed", "Streaks", "Transcription", "iCloud sync"],
  techStack: ["Swift", "iOS", "SwiftUI", "AVFoundation"],
  videoSrc: "/videos/videojournalapp.mp4",
  iconSrc: "/journalapp-icon.png",
};

export const PROUD_MOMENT = {
  paragraphs: [
    "I've learned a lot from talented people and from shipping real products. But the moment that stayed with me was simpler: a payout notification from Screen Mockups — the first thing I built alone that a stranger actually paid for.",
    "That first internet dollar wasn't about the amount. It was proof I could ship something real enough for someone to open their wallet. That's the builder I want to be.",
  ],
  image: "/first-payout.png",
  imageAlt:
    "iPhone lock screen showing a Dodo Payments payout notification for Screen Mockups",
  link: {
    label: "See Screen Mockups on TrustMRR",
    url: "https://trustmrr.com/startup/screen-mockups",
  },
};
