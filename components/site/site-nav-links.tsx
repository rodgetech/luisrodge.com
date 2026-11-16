"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SITE_PATHS } from "@/config/site";
import { cn } from "@/lib/utils";
import { FOCUS } from "@/components/site/styles";

const LINKS = [
  { href: "/", label: "Work" },
  { href: SITE_PATHS.experience, label: "Experience" },
] as const;

/** Page switcher in the identity column. Pills, current page filled. */
export function SiteNavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Pages" className="-ml-3 flex items-center gap-1">
      {LINKS.map(({ href, label }) => {
        const current = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className={cn(
              "inline-flex h-8 items-center rounded-full px-3 text-sm transition-[color,background-color] duration-150",
              current ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              FOCUS,
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
