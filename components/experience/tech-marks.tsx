import Image from "next/image";

import { techIconToneClass, type TechStackItem } from "@/config/site";
import { cn } from "@/lib/utils";

type TechMarksProps = {
  tech: readonly TechStackItem[];
  className?: string;
};

export function TechMarks({ tech, className }: TechMarksProps) {
  if (tech.length === 0) return null;

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}
      aria-label="Technologies"
    >
      {tech.map((item) => (
        <li
          key={item.name}
          className="flex min-h-11 items-center gap-1.5 sm:min-h-0"
        >
          <span className="relative size-5 shrink-0">
            <Image
              src={item.icon}
              alt=""
              fill
              sizes="20px"
              className={cn("object-contain", techIconToneClass(item))}
            />
          </span>
          <span className="text-meta text-foreground/85">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
