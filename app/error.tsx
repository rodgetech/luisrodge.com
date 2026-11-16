"use client";

import { SiteShell } from "@/components/site/site-shell";
import { BTN_SECONDARY } from "@/components/site/styles";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <SiteShell>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
        <p className="mt-2 max-w-[60ch] text-[15px] text-pretty text-muted-foreground">The page failed to load. Try again.</p>
        <button type="button" onClick={reset} className={`mt-6 ${BTN_SECONDARY}`}>
          Try again
        </button>
      </header>
    </SiteShell>
  );
}
