import Image from "next/image";

import type { ExperienceTech } from "@/config/experience";
import { cn } from "@/lib/utils";

type TechMarksProps = {
  tech: ExperienceTech[];
  className?: string;
};

export function TechMarks({ tech, className }: TechMarksProps) {
  if (tech.length === 0) return null;

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label="Technologies"
    >
      {tech.map((item) => (
        <li key={item.name} className="flex items-center gap-1.5">
          <span className="relative size-5 shrink-0">
            <Image
              src={item.icon}
              alt=""
              fill
              className="object-contain dark:brightness-110"
            />
          </span>
          <span className="text-meta sr-only sm:not-sr-only sm:inline">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
