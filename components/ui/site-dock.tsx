"use client";

import Link from "next/link";
import { Calendar, Github, Home, Linkedin, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentType } from "react";

import { XIcon } from "@/components/icons/x-icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  DOCK_CTA_ITEMS,
  DOCK_SOCIAL_ITEMS,
  type DockCtaItemId,
  type DockSocialItemId,
} from "@/config/dock";

const DOCK_CTA_ICONS: Record<
  DockCtaItemId,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  book: Calendar,
  email: MessageCircle,
};

const DOCK_SOCIAL_ICONS: Record<
  DockSocialItemId,
  ComponentType<{ className?: string }>
> = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
};

const ICON_CLASS =
  "bg-black/10 dark:bg-white/10 text-muted-foreground transition-colors hover:text-foreground";

const CTA_ICON_CLASS =
  "bg-primary/10 text-foreground transition-colors hover:bg-primary/15";

const LINK_CLASS =
  "inline-flex size-full items-center justify-center rounded-full bg-transparent text-inherit outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] [&_svg]:size-4";

function DockSeparator() {
  return <div aria-hidden className="mx-0.5 h-8 w-px shrink-0 bg-border" />;
}

function DockThemeToggle({ className }: { className: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className={className}
    />
  );
}

export function SiteDock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      aria-label="Site navigation"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center px-2"
    >
      <Dock
        direction="middle"
        iconSize={34}
        iconMagnification={52}
        iconDistance={80}
        className="pointer-events-auto mt-0 max-w-[calc(100vw-1.25rem)] gap-1 border-border/60 bg-background/80 p-1.5 shadow-lg sm:gap-2 sm:p-2"
      >
        <DockIcon className={ICON_CLASS}>
          <button
            type="button"
            aria-label="Home"
            onClick={scrollToTop}
            className={LINK_CLASS}
          >
            <Home className="size-4" />
          </button>
        </DockIcon>

        <DockSeparator />

        {DOCK_CTA_ITEMS.map((item) => {
          const Icon = DOCK_CTA_ICONS[item.id];

          return (
            <DockIcon key={item.id} className={CTA_ICON_CLASS}>
              <Link
                href={item.href}
                aria-label={item.label}
                className={LINK_CLASS}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </Link>
            </DockIcon>
          );
        })}

        <DockSeparator />

        {DOCK_SOCIAL_ITEMS.map((item) => {
          const Icon = DOCK_SOCIAL_ICONS[item.id];

          return (
            <DockIcon key={item.id} className={ICON_CLASS}>
              <Link
                href={item.href}
                aria-label={item.label}
                className={LINK_CLASS}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon className="size-4" />
              </Link>
            </DockIcon>
          );
        })}

        <DockSeparator />

        <DockIcon className={ICON_CLASS}>
          <DockThemeToggle className={LINK_CLASS} />
        </DockIcon>
      </Dock>
    </div>
  );
}
