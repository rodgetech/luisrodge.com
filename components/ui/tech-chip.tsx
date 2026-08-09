import Image from "next/image";

import { techIconToneClass, type TechStackItem } from "@/config/site";
import { cn } from "@/lib/utils";

type TechChipProps = {
  tech: TechStackItem;
};

/** Shared stack marker. Grows to a 44px target under coarse pointers via .tech-chip. */
export function TechChip({ tech }: TechChipProps) {
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
