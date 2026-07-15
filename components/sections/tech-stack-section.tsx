"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SECTIONS,
  TECH_STACK,
  TECH_STACK_HOMEPAGE_COUNT,
} from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function TechStackSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? TECH_STACK
    : TECH_STACK.slice(0, TECH_STACK_HOMEPAGE_COUNT);
  const hiddenCount = TECH_STACK.length - TECH_STACK_HOMEPAGE_COUNT;

  return (
    <SectionContent>
      <SectionLabel>{SECTIONS.stack.label}</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {visible.map((tech) => (
          <span
            key={tech.name}
            title={tech.name}
            className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-meta"
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
        {hiddenCount > 0 ? (
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="inline-flex items-center rounded-md px-2 py-1 text-meta font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {expanded ? "Show less" : `and ${hiddenCount} more`}
          </button>
        ) : null}
      </div>
    </SectionContent>
  );
}
