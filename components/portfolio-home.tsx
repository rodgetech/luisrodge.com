/**
 * PORTFOLIO HOME (Preserved)
 *
 * This file contains the original personal portfolio homepage layout.
 * It is NOT rendered anywhere — it exists purely for easy restoration.
 * The individual section files in components/sections/ remain untouched.
 *
 * To restore: copy the JSX below back into app/page.tsx and restore
 * the getCachedContributions fetch + imports.
 */

import {
  HeroSection,
  BioSection,
  SocialLinksSection,
  WorkExperienceSection,
  GitHubActivitySection,
  TechStackSection,
  CurrentlyWorkingOnSection,
  LetsTalkSection,
} from "@/components/sections";
import { USER } from "@/config/site";
import { PageSection } from "@/components/ui/page-section";

type ContributionsProps = {
  contributions: Array<{ date: string; count: number; level: number }>;
  total: number;
};

export function PortfolioHome({ contributions, total }: ContributionsProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section with Cover Image */}
      <HeroSection />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 sm:px-12">
        <PageSection hideGrid className="mt-8">
          <BioSection />
        </PageSection>

        <PageSection>
          <SocialLinksSection />
        </PageSection>

        <PageSection id="work-experience">
          <WorkExperienceSection />
        </PageSection>

        <PageSection>
          <GitHubActivitySection contributions={contributions} total={total} />
        </PageSection>

        <PageSection>
          <TechStackSection />
        </PageSection>

        <PageSection id="currently-working-on">
          <CurrentlyWorkingOnSection />
        </PageSection>

        <PageSection id="lets-chat">
          <LetsTalkSection />
        </PageSection>

        {/* Footer */}
        <PageSection showBottomSeparator hideGrid>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} {USER.displayName}. All rights
              reserved.
            </p>
            <a
              href={`mailto:${USER.email}`}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {USER.email}
            </a>
          </div>
        </PageSection>
      </main>
    </div>
  );
}
