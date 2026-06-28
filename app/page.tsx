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
import { getCachedGitHubContributionsTotal } from "@/lib/github";

export default async function Home() {
  const githubTotal = await getCachedGitHubContributionsTotal();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <SiteNav />

      <main className="page-x mx-auto w-full max-w-2xl flex-1">
        <PageSection first id={SECTIONS.about.id}>
          <BioSection githubTotal={githubTotal} />
        </PageSection>

        <PageSection id={SECTIONS.building.id}>
          <CurrentlyWorkingOnSection />
        </PageSection>

        <PageSection id={SECTIONS.work.id}>
          <WorkExperienceSection />
        </PageSection>

        <PageSection id={SECTIONS.stack.id}>
          <TechStackSection />
        </PageSection>

        <PageSection id={SECTIONS.proud.id}>
          <ProudMomentSection />
        </PageSection>

        <PageSection>
          <FooterSection />
        </PageSection>
      </main>
    </div>
  );
}
