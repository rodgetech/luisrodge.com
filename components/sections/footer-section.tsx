import { FOOTER_TAGLINE, USER } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <SectionContent className="gap-6 border-t-0 pt-0 sm:flex-row sm:items-end sm:justify-between">
      <p className="max-w-[22ch] text-title font-semibold tracking-tight text-foreground text-balance">
        {FOOTER_TAGLINE}
      </p>

      <div className="text-meta flex flex-col gap-0.5 sm:items-end sm:text-right">
        <p>
          © {year} {USER.displayName}
        </p>
        <p>{USER.address}</p>
      </div>
    </SectionContent>
  );
}
