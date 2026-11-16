import Image from "next/image";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/home/social-icons";
import { SiteNavLinks } from "@/components/site/site-nav-links";
import { BTN_PRIMARY, BTN_SECONDARY, FOCUS, ICON_BTN } from "@/components/site/styles";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { HOME_INTRO } from "@/config/home";
import { cn } from "@/lib/utils";
import { CONTACT_MAILTO, SITE_PATHS, SOCIAL_LINKS, USER } from "@/config/site";

const SOCIALS = [
  { ...SOCIAL_LINKS.github, Icon: GitHubIcon },
  { ...SOCIAL_LINKS.x, Icon: XIcon },
  { ...SOCIAL_LINKS.youtube, Icon: YouTubeIcon },
  { ...SOCIAL_LINKS.linkedin, Icon: LinkedInIcon },
];

type SiteShellProps = {
  children: React.ReactNode;
  /**
   * The homepage's h1 is Luis's name. Other pages own their h1, so the name
   * drops to a paragraph there.
   */
  nameIsHeading?: boolean;
};

/**
 * Every page shares this frame: a sticky identity column (who, where, how to
 * reach him) and a main column the page fills. Scoped under `.home`, which
 * carries the palette, Geist and surfaces.
 */
export function SiteShell({ children, nameIsHeading = false }: SiteShellProps) {
  const Name = nameIsHeading ? "h1" : "p";

  return (
    <div className="min-h-dvh">
      <a
        href="#main-content"
        className="sr-only rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-5 lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-20">
        <aside className="animate-enter relative isolate pt-6 lg:sticky lg:top-0 lg:self-start lg:py-12">
          <div aria-hidden className="bg-dots pointer-events-none absolute -inset-x-5 top-0 -z-10 h-56 lg:h-96" />

          <SiteNavLinks />

          <Link href="/" aria-label={`${USER.fullName}, home`} className={`mt-8 block w-fit rounded-full ${FOCUS}`}>
            <Image
              src={USER.avatar}
              alt=""
              width={160}
              height={160}
              priority
              className="size-16 rounded-full object-cover shadow-[0_8px_24px_-8px_rgb(0_0_0/0.25)] outline -outline-offset-1 outline-black/10 lg:size-20 dark:outline-white/10"
            />
          </Link>
          <Name className="mt-5 text-3xl font-semibold tracking-tight">{USER.fullName}</Name>
          <p className="mt-1 text-[15px] text-muted-foreground">Software engineer in Cayo, Belize</p>

          <p className="mt-5 max-w-[34ch] text-[15px] text-pretty text-muted-foreground">
            <span className="font-medium text-foreground">{HOME_INTRO.hook}</span> {HOME_INTRO.openTo}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={CONTACT_MAILTO} className={BTN_PRIMARY}>
              <Mail aria-hidden className="size-4" />
              Email me
            </a>
            <a href={SITE_PATHS.resumePdf} target="_blank" rel="noopener" className={BTN_SECONDARY}>
              <FileText aria-hidden className="size-4" />
              Résumé
            </a>
          </div>

          <ul aria-label="Elsewhere" className="mt-4 -ml-2.5 flex items-center gap-0.5">
            {SOCIALS.map(({ name, url, Icon }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="me noopener" title={name} className={cn(ICON_BTN, "size-10 [&_svg]:size-[18px]")}>
                  <Icon />
                  <span className="sr-only">{name} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex min-w-0 flex-col pt-12 pb-10">
          <main id="main-content" tabIndex={-1} className="flex flex-col gap-14 outline-none">
            {children}
          </main>

          <footer className="mt-16 flex items-center justify-between border-t border-border/60 pt-6 text-sm text-muted-foreground">
            <p className="tabular-nums">© {new Date().getFullYear()} {USER.fullName}</p>
            <ThemeToggle className={cn(ICON_BTN, "-mr-2")} />
          </footer>
        </div>
      </div>
    </div>
  );
}
