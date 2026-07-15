"use client";

import Link from "next/link";
import { Calendar, Home, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentType } from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  OUTREACH_CTAS,
  type OutreachCtaId,
} from "@/config/site";
import { cn } from "@/lib/utils";

const OUTREACH_ICONS: Record<
  OutreachCtaId,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  book: Calendar,
  email: MessageCircle,
};

const ICON_BTN =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-3.5";

const CTA_PILL =
  "inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-primary px-3.5 text-meta font-semibold tracking-tight text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

function Separator() {
  return <div aria-hidden className="mx-0.5 h-8 w-px shrink-0 bg-border" />;
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className={ICON_BTN}
    />
  );
}

function linkAttrs(external: boolean) {
  return external
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};
}

function scrollToTop() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

/** Home + co-equal outreach + theme. Soft-path socials live in the footer. */
export function SiteNav() {
  return (
    <div
      aria-label="Site navigation"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-2"
    >
      <nav
        className={cn(
          "pointer-events-auto flex w-max max-w-[calc(100vw-1.25rem)] items-center gap-1",
          "rounded-2xl border border-border/60 bg-background/95 p-1.5 shadow-lg backdrop-blur-sm",
          "sm:gap-1.5 sm:p-2"
        )}
      >
        <button
          type="button"
          aria-label="Home"
          onClick={scrollToTop}
          className={ICON_BTN}
        >
          <Home />
        </button>

        <Separator />

        <div className="flex items-center gap-1.5">
          {OUTREACH_CTAS.map((item) => {
            const Icon = OUTREACH_ICONS[item.id];

            return (
              <Link
                key={item.id}
                href={item.href}
                className={CTA_PILL}
                {...linkAttrs(item.external)}
              >
                <Icon className="size-3.5 shrink-0" strokeWidth={2} />
                <span className="sm:hidden">{item.shortLabel}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <Separator />

        <ThemeToggle />
      </nav>
    </div>
  );
}
