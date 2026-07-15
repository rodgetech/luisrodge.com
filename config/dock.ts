import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  CONTACT_CTA_LABEL,
  CONTACT_MAILTO,
  SOCIAL_LINKS,
} from "@/config/site";

/** Co-equal primary actions — book a call and say hi. */
export const DOCK_CTA_ITEMS = [
  {
    id: "book",
    href: BOOKING_URL,
    label: BOOKING_CTA_LABEL,
    external: true,
  },
  {
    id: "email",
    href: CONTACT_MAILTO,
    label: CONTACT_CTA_LABEL,
    external: false,
  },
] as const;

export type DockCtaItemId = (typeof DOCK_CTA_ITEMS)[number]["id"];

/** Soft path for visitors not ready to contact. */
export const DOCK_SOCIAL_ITEMS = [
  {
    id: "github",
    href: SOCIAL_LINKS.github.url,
    label: "GitHub",
    external: true,
  },
  {
    id: "linkedin",
    href: SOCIAL_LINKS.linkedin.url,
    label: "LinkedIn",
    external: true,
  },
  {
    id: "x",
    href: SOCIAL_LINKS.x.url,
    label: "Twitter",
    external: true,
  },
] as const;

export type DockSocialItemId = (typeof DOCK_SOCIAL_ITEMS)[number]["id"];
