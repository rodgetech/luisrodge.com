import {
  HeroSection,
  BioSection,
  WorkExperienceSection,
  CurrentlyWorkingOnSection,
  TechStackSection,
  ProudMomentSection,
  FooterSection,
} from "@/components/sections";
import { PageSection } from "@/components/ui/page-section";
import { SiteNav } from "@/components/ui/site-nav";
import { SECTIONS } from "@/config/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[var(--z-skip)] focus-visible:rounded-md focus-visible:px-3 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:shadow-elevated focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Skip to content
      </a>

      <HeroSection />

      <main
        id="main-content"
        tabIndex={-1}
        className="page-x mx-auto w-full max-w-2xl flex-1 pb-[var(--nav-clearance)] outline-none"
      >
        <PageSection variant="first" id={SECTIONS.about.id}>
          <BioSection />
        </PageSection>

        <PageSection id={SECTIONS.work.id}>
          <WorkExperienceSection />
        </PageSection>

        <PageSection id={SECTIONS.building.id}>
          <CurrentlyWorkingOnSection />
        </PageSection>

        <PageSection id={SECTIONS.stack.id}>
          <TechStackSection />
        </PageSection>

        <PageSection variant="emphasis" id={SECTIONS.proud.id}>
          <ProudMomentSection />
        </PageSection>

        <PageSection variant="footer">
          <FooterSection />
        </PageSection>
      </main>

      <SiteNav />
    </div>
  );
}
