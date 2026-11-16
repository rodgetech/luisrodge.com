"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    const next = isDark ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof document.startViewTransition !== "function") {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => setTheme(next));
  }, [isDark, setTheme]);

  return (
    <button type="button" aria-label="Toggle theme" onClick={toggleTheme} className={className}>
      {mounted ? isDark ? <Sun /> : <Moon /> : <span className="size-4" aria-hidden />}
    </button>
  );
}
