import Image from "next/image";
import { SECTIONS, WORK_EXPERIENCE } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function WorkExperienceSection() {
  const { mostRecent } = WORK_EXPERIENCE;

  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.work.label}</SectionLabel>

      <div className="flex gap-4">
        <div className="relative mt-0.5 h-10 w-10 shrink-0">
          <Image
            src={mostRecent.logo}
            alt={mostRecent.company}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="section-title text-balance">{mostRecent.company}</h3>
              <p className="text-body text-[0.875rem] leading-relaxed">
                {mostRecent.title}
              </p>
            </div>
            <p className="text-meta shrink-0 tabular-nums">
              {mostRecent.startDate} to {mostRecent.endDate}
            </p>
          </div>

          <ul className="flex flex-col gap-3 text-body text-[0.875rem] leading-relaxed">
            {mostRecent.responsibilities
              .slice(0, mostRecent.highlightCount)
              .map((responsibility) => (
                <li key={responsibility} className="relative pl-4">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.65em] size-1 rounded-full bg-muted-foreground/50"
                  />
                  {responsibility}
                </li>
              ))}
          </ul>

          <p>
            <a href={WORK_EXPERIENCE.resumeUrl} download className="link-underline">
              Full resume
            </a>
          </p>
        </div>
      </div>
    </SectionContent>
  );
}
