"use client";

import { useCallback } from "react";
import Link from "next/link";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  NAV_SECTION_KEYS,
  SECTIONS,
} from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  className?: string;
};

export function SiteNav({ className }: SiteNavProps) {
  const handleSmoothScroll = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const href = event.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        event.preventDefault();
        const element = document.getElementById(href.slice(1));
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 page-x py-3">
        <div className="flex min-w-0 items-center gap-1">
          {NAV_SECTION_KEYS.map((key) => {
            const section = SECTIONS[key];

            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={handleSmoothScroll}
                className="rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span className="hidden sm:inline">{section.navLabel}</span>
                <span className="sm:hidden">{section.navShortLabel}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <span className="hidden sm:inline">{BOOKING_CTA_LABEL}</span>
            <span className="sm:hidden">Book</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
