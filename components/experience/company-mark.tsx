import Image from "next/image";

import type { CompanyMarkModel } from "@/config/experience";
import { cn } from "@/lib/utils";

type CompanyMarkProps = {
  mark: CompanyMarkModel;
  company: string;
  className?: string;
  /** Prefer loading for above-the-fold marks */
  priority?: boolean;
};

export function CompanyMark({
  mark,
  company,
  className,
  priority = false,
}: CompanyMarkProps) {
  switch (mark.kind) {
    case "monogram":
      return (
        <div
          aria-hidden
          className={cn(
            "text-meta mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-border/70 bg-muted font-semibold tracking-tight text-foreground",
            className,
          )}
        >
          {mark.text}
        </div>
      );
    case "logo": {
      const cover = mark.fit === "cover";
      const surfaceClass = cover
        ? mark.surface === "dark"
          ? "bg-black"
          : "bg-muted"
        : "bg-muted/40";

      return (
        <div
          className={cn(
            "relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-md",
            surfaceClass,
            className,
          )}
        >
          <Image
            src={mark.src}
            alt={`${company} logo`}
            fill
            sizes="40px"
            priority={priority}
            className={cover ? "object-cover" : "object-contain p-1"}
          />
        </div>
      );
    }
    default: {
      const _exhaustive: never = mark;
      return _exhaustive;
    }
  }
}
