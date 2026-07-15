"use client";

import Link from "next/link";
import { Calendar, Github, Home, Linkedin, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentType } from "react";

import { XIcon } from "@/components/icons/x-icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { DOCK_SOCIAL_ITEMS, type DockSocialItemId } from "@/config/dock";
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

const SOCIAL_ICONS: Record<
  DockSocialItemId,
  ComponentType<{ className?: string }>
> = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
};

const ICON_BTN =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-black/10 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-white/10 [&_svg]:size-3.5";

const CTA_PILL =
  "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 text-meta font-semibold tracking-tight text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

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

export function SiteDock() {
  return (
    <div
      aria-label="Site navigation"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-2"
    >
      <nav
        className={cn(
          "pointer-events-auto flex w-max max-w-[calc(100vw-1.25rem)] items-center gap-1",
          "rounded-2xl border border-border/60 bg-background/90 p-1.5 shadow-lg backdrop-blur-md",
          "sm:gap-1.5 sm:p-2"
        )}
      >
        <button
          type="button"
          aria-label="Home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

        {DOCK_SOCIAL_ITEMS.map((item) => {
          const Icon = SOCIAL_ICONS[item.id];

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.label}
              className={ICON_BTN}
              {...linkAttrs(item.external)}
            >
              <Icon />
            </Link>
          );
        })}

        <Separator />

        <ThemeToggle />
      </nav>
    </div>
  );
}
