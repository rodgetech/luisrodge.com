import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { FooterSection } from "@/components/sections";
import { PageSection } from "@/components/ui/page-section";
import { SiteNav } from "@/components/ui/site-nav";
import { SITE_INFO, SITE_PATHS } from "@/config/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Career experience for ${SITE_INFO.name} — roles, outcomes, and stack in context.`,
  alternates: {
    canonical: SITE_PATHS.experience,
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[var(--z-skip)] focus-visible:rounded-md focus-visible:px-3 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-elevated focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        tabIndex={-1}
        className="page-x experience-page mx-auto w-full max-w-2xl flex-1 pb-[var(--nav-clearance)] outline-none"
      >
        <PageSection variant="first" className="pb-[calc(var(--section-space)+1.5rem)]">
          <ExperienceTimeline />
        </PageSection>

        <PageSection variant="footer">
          <FooterSection />
        </PageSection>
      </main>

      <SiteNav homeHref="/" />
    </div>
  );
}
