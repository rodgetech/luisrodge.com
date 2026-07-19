import { CompanyMark } from "@/components/experience/company-mark";
import { ExperienceReveal } from "@/components/experience/experience-reveal";
import { OutcomeList } from "@/components/experience/outcome-list";
import { TechMarks } from "@/components/experience/tech-marks";
import { SectionLabel } from "@/components/ui/section-label";
import {
  EXPERIENCE_PDF_HREF,
  EXPERIENCE_ROLES,
  groupExperienceByEndYear,
} from "@/config/experience";

export function ExperienceTimeline() {
  const chapters = groupExperienceByEndYear(EXPERIENCE_ROLES);
  let revealIndex = 0;

  return (
    <div className="flex flex-col gap-12">
      <SectionLabel emphasis>Experience</SectionLabel>

      <div className="flex flex-col gap-14">
        {chapters.map(([year, roles]) => (
          <section
            key={year}
            className="grid gap-6 sm:grid-cols-[5.5rem_1fr] sm:gap-8"
            aria-labelledby={`experience-year-${year}`}
          >
            <ExperienceReveal index={revealIndex++}>
              <p
                id={`experience-year-${year}`}
                className="font-serif text-4xl tracking-tight text-foreground/90 italic sm:sticky sm:top-6 sm:text-5xl"
              >
                {year}
              </p>
            </ExperienceReveal>

            <ol className="flex flex-col gap-10">
              {roles.map((role) => {
                const index = revealIndex++;
                return (
                  <ExperienceReveal key={role.id} index={index}>
                    <li className="flex flex-col gap-3 border-t border-border pt-6 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-6">
                      <div className="flex gap-3">
                        <CompanyMark role={role} />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <h2 className="section-title">{role.company}</h2>
                            <p className="text-meta shrink-0 tabular-nums">
                              {role.startDate} – {role.endDate}
                            </p>
                          </div>
                          <p className="text-meta mt-0.5 font-medium text-foreground/80">
                            {role.title}
                          </p>
                        </div>
                      </div>
                      <p
                        className={
                          role.flagship
                            ? "text-lead max-w-[48ch]"
                            : "text-body max-w-[48ch]"
                        }
                      >
                        {role.narrative}
                      </p>
                      <OutcomeList outcomes={role.outcomes} />
                      <TechMarks tech={role.tech} />
                    </li>
                  </ExperienceReveal>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <ExperienceReveal index={revealIndex}>
        <div className="flex flex-col gap-2 border-t border-border pt-8">
          <p className="text-meta">Prefer the PDF?</p>
          <a
            href={EXPERIENCE_PDF_HREF}
            download
            className="link-underline text-meta inline-flex min-h-11 w-fit items-center font-medium text-foreground"
          >
            Download full resume
          </a>
        </div>
      </ExperienceReveal>
    </div>
  );
}
