import { FOOTER_TAGLINE, SOFT_PATH_SOCIALS, USER } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <SectionContent className="gap-6 border-t-0 pt-0 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3">
        <p className="section-title max-w-[28ch]">{FOOTER_TAGLINE}</p>
        <nav
          aria-label="Social"
          className="text-meta flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          {SOFT_PATH_SOCIALS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="link-underline"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="text-meta flex flex-col gap-1 sm:items-end sm:text-right">
        <p className="tabular-nums">
          © {year} {USER.displayName}
        </p>
        <p>{USER.address}</p>
      </div>
    </SectionContent>
  );
}
