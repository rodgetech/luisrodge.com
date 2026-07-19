import { CompanyMark } from "@/components/experience/company-mark";
import { OutcomeList } from "@/components/experience/outcome-list";
import { TechMarks } from "@/components/experience/tech-marks";
import type {
  ExperienceRole,
  ExperienceSection,
} from "@/config/experience";
import { cn } from "@/lib/utils";

type RoleEntryProps = {
  role: ExperienceRole;
  variant: ExperienceSection;
  className?: string;
  priorityMark?: boolean;
};

/** Role body only — parent supplies the list item wrapper. */
export function RoleEntry({
  role,
  variant,
  className,
  priorityMark = false,
}: RoleEntryProps) {
  const featured = variant === "featured";

  return (
    <div
      className={cn(
        "flex flex-col",
        featured ? "gap-4" : "gap-3",
        className,
      )}
    >
      <div className="flex gap-4">
        <CompanyMark
          mark={role.mark}
          company={role.company}
          priority={priorityMark}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <h3 className="section-title text-balance">{role.company}</h3>
              <p className="text-body">{role.title}</p>
            </div>
            <p className="text-meta shrink-0 tabular-nums">
              {role.startDate} to {role.endDate}
            </p>
          </div>
        </div>
      </div>

      <p
        className={cn(
          "max-w-[48ch] text-pretty",
          featured ? "text-lead" : "text-body",
        )}
      >
        {role.narrative}
      </p>

      {featured ? <OutcomeList outcomes={role.outcomes} /> : null}
      <TechMarks tech={role.tech} />
    </div>
  );
}
