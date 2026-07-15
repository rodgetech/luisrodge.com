import Link from "next/link";
import { BIO, SECTIONS, SOCIAL_LINKS } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function BioSection() {
  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.about.label}</SectionLabel>
      <p className="text-body text-pretty">{BIO.intro}</p>
      <p className="text-body text-pretty">{BIO.openTo}</p>
      <p className="text-body text-pretty">
        Sometimes I&apos;m on{" "}
        <Link
          href={SOCIAL_LINKS.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          YouTube
        </Link>{" "}
        too.
      </p>
    </SectionContent>
  );
}
