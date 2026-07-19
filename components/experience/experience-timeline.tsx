import { ExperienceReveal } from "@/components/experience/experience-reveal";
import { RoleEntry } from "@/components/experience/role-entry";
import {
  getExperienceSections,
  type ExperienceRole,
  type ExperienceYearChapter,
} from "@/config/experience";
import { SITE_PATHS } from "@/config/site";

type TimelineRole = {
  role: ExperienceRole;
  reveal: number;
  priorityMark: boolean;
};

type TimelineChapter = {
  year: string;
  yearReveal: number;
  roles: TimelineRole[];
};

type TimelineEarlier = {
  headingReveal: number;
  roles: Array<{
    role: ExperienceRole;
    reveal: number;
    showDivider: boolean;
  }>;
};

type TimelineModel = {
  chapters: TimelineChapter[];
  earlier: TimelineEarlier | null;
  pdfReveal: number;
};

function buildTimelineModel(
  chapters: ExperienceYearChapter[],
  earlierRoles: ExperienceRole[],
): TimelineModel {
  let reveal = 0;

  const modeledChapters = chapters.map((chapter, chapterIndex) => ({
    year: chapter.year,
    yearReveal: reveal++,
    roles: chapter.roles.map((role, roleIndex) => ({
      role,
      reveal: reveal++,
      priorityMark: chapterIndex === 0 && roleIndex === 0,
    })),
  }));

  const earlier =
    earlierRoles.length === 0
      ? null
      : {
          headingReveal: reveal++,
          roles: earlierRoles.map((role, roleIndex) => ({
            role,
            reveal: reveal++,
            showDivider: roleIndex > 0,
          })),
        };

  return {
    chapters: modeledChapters,
    earlier,
    pdfReveal: reveal,
  };
}

export function ExperienceTimeline() {
  const { chapters, earlier: earlierRoles } = getExperienceSections();
  const model = buildTimelineModel(chapters, earlierRoles);

  return (
    <div className="flex flex-col gap-12">
      <h1 className="section-label-emphasis">Experience</h1>

      <div className="flex flex-col gap-14">
        {model.chapters.map((chapter) => (
          <section
            key={chapter.year}
            className="grid gap-4 sm:grid-cols-[4.25rem_1fr] sm:items-start sm:gap-8"
            aria-labelledby={`experience-year-${chapter.year}`}
          >
            <ExperienceReveal
              index={chapter.yearReveal}
              className="sm:sticky sm:top-6"
            >
              <p id={`experience-year-${chapter.year}`}>
                <span className="text-meta block text-muted-foreground">
                  Ended
                </span>
                <span className="mt-0.5 block font-serif text-xl tracking-tight text-foreground/75 tabular-nums sm:text-[1.375rem]">
                  {chapter.year}
                </span>
              </p>
            </ExperienceReveal>

            <ol className="flex flex-col gap-12">
              {chapter.roles.map(({ role, reveal, priorityMark }) => (
                <li
                  key={role.id}
                  className="scroll-mt-[var(--scroll-margin)] pb-6"
                >
                  <ExperienceReveal index={reveal}>
                    <RoleEntry
                      role={role}
                      variant="featured"
                      priorityMark={priorityMark}
                    />
                  </ExperienceReveal>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      {model.earlier ? (
        <section
          className="flex flex-col gap-8 border-t border-border pt-10"
          aria-labelledby="experience-earlier"
        >
          <ExperienceReveal index={model.earlier.headingReveal}>
            <h2 id="experience-earlier" className="section-label">
              Earlier
            </h2>
          </ExperienceReveal>

          <ol className="flex flex-col gap-8">
            {model.earlier.roles.map(({ role, reveal, showDivider }) => (
              <li
                key={role.id}
                className={
                  showDivider
                    ? "scroll-mt-[var(--scroll-margin)] border-t border-border/60 pt-8 pb-6"
                    : "scroll-mt-[var(--scroll-margin)] pb-6"
                }
              >
                <ExperienceReveal index={reveal}>
                  <RoleEntry role={role} variant="earlier" />
                </ExperienceReveal>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <ExperienceReveal index={model.pdfReveal}>
        <div className="flex flex-col gap-2 border-t border-border pt-8">
          <p className="text-meta">Prefer the PDF?</p>
          <a
            href={SITE_PATHS.resumePdf}
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
