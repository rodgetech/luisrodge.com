import { CONTACT_MAILTO, SOCIAL_LINKS } from "@/config/site";

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
  {
    id: "email",
    href: CONTACT_MAILTO,
    label: "Email",
    external: false,
  },
] as const;

export type DockSocialItemId = (typeof DOCK_SOCIAL_ITEMS)[number]["id"];
