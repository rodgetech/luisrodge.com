import { FOOTER_TAGLINE, SOFT_PATH_SOCIALS, USER } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <SectionContent className="gap-[var(--section-inner)]">
      <nav
        aria-label="Social"
        className="text-meta flex flex-wrap items-center gap-x-1 gap-y-1"
      >
        {SOFT_PATH_SOCIALS.map((item, index) => (
          <span key={item.id} className="inline-flex items-center">
            {index > 0 ? (
              <span aria-hidden className="mx-1 text-border">
                /
              </span>
            ) : null}
            <a
              href={item.href}
              className="link-underline inline-flex min-h-11 items-center px-1"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          </span>
        ))}
      </nav>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <p className="text-meta max-w-[36ch] text-pretty">{FOOTER_TAGLINE}</p>
        <div className="text-meta flex flex-col gap-0.5 sm:items-end sm:text-right">
          <p className="tabular-nums">
            © {year} {USER.displayName}
          </p>
          <p>{USER.address}</p>
        </div>
      </div>
    </SectionContent>
  );
}
