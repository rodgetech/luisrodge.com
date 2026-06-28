import { SECTIONS, USER } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { SocialLinksSection } from "./social-links-section";

type BioSectionProps = {
  githubTotal: number;
};

export function BioSection({ githubTotal }: BioSectionProps) {
  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.about.label}</SectionLabel>
      <p className="text-body whitespace-pre-line">{USER.longBio.trim()}</p>
      <SocialLinksSection githubTotal={githubTotal} />
    </SectionContent>
  );
}
