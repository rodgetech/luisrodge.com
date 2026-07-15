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
import { SiteDock } from "@/components/ui/site-dock";
import { SECTIONS } from "@/config/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroSection />

      <main className="page-x mx-auto w-full max-w-2xl flex-1 pb-24">
        <PageSection first id={SECTIONS.about.id}>
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

        <PageSection id={SECTIONS.proud.id}>
          <ProudMomentSection />
        </PageSection>

        <PageSection>
          <FooterSection />
        </PageSection>
      </main>

      <SiteDock />
    </div>
  );
}
