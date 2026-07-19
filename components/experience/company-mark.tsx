import Image from "next/image";

import type { ExperienceRole } from "@/config/experience";
import { cn } from "@/lib/utils";

type CompanyMarkProps = {
  role: ExperienceRole;
  className?: string;
};

export function CompanyMark({ role, className }: CompanyMarkProps) {
  if (role.logo) {
    return (
      <div
        className={cn(
          "relative size-10 shrink-0 overflow-hidden rounded-md bg-muted/40",
          className
        )}
      >
        <Image
          src={role.logo}
          alt={role.company}
          fill
          className="object-contain p-1"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "text-meta flex size-10 shrink-0 items-center justify-center rounded-md bg-muted font-semibold tracking-tight text-foreground",
        className
      )}
    >
      {role.monogram}
    </div>
  );
}
