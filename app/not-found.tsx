import Link from "next/link";

import { SiteShell } from "@/components/site/site-shell";
import { BTN_SECONDARY } from "@/components/site/styles";

export default function NotFound() {
  return (
    <SiteShell>
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 max-w-[60ch] text-[15px] text-pretty text-muted-foreground">
          That link doesn&apos;t go anywhere anymore. The work and the full experience are one click away.
        </p>
        <Link href="/" className={`mt-6 ${BTN_SECONDARY}`}>
          Back to the work
        </Link>
      </header>
    </SiteShell>
  );
}
