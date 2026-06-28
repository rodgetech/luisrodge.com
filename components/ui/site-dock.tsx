"use client";

import Link from "next/link";
import { Github, Home, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import type { ComponentType } from "react";

import { XIcon } from "@/components/icons/x-icon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dock, DockIcon } from "@/components/ui/dock";
import { DOCK_SOCIAL_ITEMS, type DockSocialItemId } from "@/config/dock";

const DOCK_ICONS: Record<DockSocialItemId, ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  email: Mail,
};

const ICON_CLASS =
  "bg-black/10 dark:bg-white/10 text-muted-foreground transition-colors hover:text-foreground";

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
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center"
    >
      <Dock
        direction="middle"
        iconMagnification={60}
        iconDistance={100}
        className="pointer-events-auto mt-0 border-border/60 bg-background/80 shadow-lg"
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

        {DOCK_SOCIAL_ITEMS.map((item) => {
          const Icon = DOCK_ICONS[item.id];

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
