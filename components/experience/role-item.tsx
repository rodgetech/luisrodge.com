import { CompanyMark } from "@/components/experience/company-mark";
import { TechChip } from "@/components/ui/tech-chip";
import type { ExperienceRole } from "@/config/experience";

type RoleItemProps = {
  role: ExperienceRole;
  /** Featured roles show outcomes; earlier roles stay to one paragraph. */
  detailed?: boolean;
  priorityMark?: boolean;
};

/** One role in the homepage's entry format: mark, company/title/dates, then an indented body. */
export function RoleItem({ role, detailed = false, priorityMark = false }: RoleItemProps) {
  const dates = role.startDate === role.endDate ? role.startDate : `${role.startDate}–${role.endDate}`;

  return (
    <article className="flex items-start gap-4">
      <CompanyMark mark={role.mark} company={role.company} priority={priorityMark} className="mt-0.5 size-9 rounded-lg" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-semibold tracking-tight">{role.company}</h3>
          <p className="text-sm text-muted-foreground tabular-nums">{dates}</p>
        </div>
        <p className="text-sm text-muted-foreground">{role.title}</p>

        <p className={detailed ? "mt-3 max-w-[62ch] text-[15px] text-pretty" : "mt-2 max-w-[62ch] text-sm text-pretty text-muted-foreground"}>
          {role.narrative}
        </p>

        {detailed && role.outcomes.length > 0 ? (
          <ul className="mt-3 flex max-w-[65ch] flex-col gap-2">
            {role.outcomes.map((outcome) => (
              <li key={outcome} className="relative pl-4 text-sm text-pretty text-muted-foreground">
                <span aria-hidden className="absolute top-[0.6em] left-0 size-1 rounded-full bg-muted-foreground/50" />
                {outcome}
              </li>
            ))}
          </ul>
        ) : null}

        {role.tech.length > 0 ? (
          <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
            {role.tech.map((tech) => (
              <li key={tech.name}>
                <TechChip tech={tech} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
