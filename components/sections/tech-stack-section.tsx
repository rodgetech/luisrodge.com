import Image from "next/image";
import { TECH_STACK, SECTIONS } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function TechStackSection() {
  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.stack.label}</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <span
            key={tech.name}
            title={tech.name}
            className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-meta"
          >
            <Image
              src={tech.icon}
              alt=""
              width={14}
              height={14}
              className="object-contain opacity-80"
              aria-hidden
            />
            {tech.name}
          </span>
        ))}
        <span className="inline-flex items-center px-2 py-1 text-meta">
          and more
        </span>
      </div>
    </SectionContent>
  );
}
