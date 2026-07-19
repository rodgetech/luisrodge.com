import Image from "next/image";
import {
  SECTIONS,
  TECH_STACK,
  TECH_STACK_HOMEPAGE_COUNT,
  techIconToneClass,
  type TechStackItem,
} from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

function TechChip(tech: TechStackItem) {
  return (
    <span
      title={tech.name}
      className="tech-chip inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-meta"
    >
      <Image
        src={tech.icon}
        alt=""
        width={14}
        height={14}
        className={cn("object-contain opacity-80", techIconToneClass(tech))}
        aria-hidden
      />
      {tech.name}
    </span>
  );
}

export function TechStackSection() {
  const primary = TECH_STACK.slice(0, TECH_STACK_HOMEPAGE_COUNT);
  const rest = TECH_STACK.slice(TECH_STACK_HOMEPAGE_COUNT);

  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.stack.label}</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {primary.map((tech) => (
          <TechChip key={tech.name} {...tech} />
        ))}
      </div>
      {rest.length > 0 ? (
        <details className="group">
          <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-md px-2.5 py-2 text-meta font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">and {rest.length} more</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <div className="mt-2 flex flex-wrap gap-2">
            {rest.map((tech) => (
              <TechChip key={tech.name} {...tech} />
            ))}
          </div>
        </details>
      ) : null}
    </SectionContent>
  );
}
