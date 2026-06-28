import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  CONTACT_CTA_LABEL,
  CONTACT_MAILTO,
  FOOTER_TAGLINE,
  USER,
} from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <SectionContent className="sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">
          © {year} {USER.displayName}
        </p>
        <p className="text-meta">{FOOTER_TAGLINE}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5"
        >
          <Calendar className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          {BOOKING_CTA_LABEL}
        </Link>
        <Link href={CONTACT_MAILTO} className="link-underline inline-flex items-center gap-1.5">
          <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          {CONTACT_CTA_LABEL}
        </Link>
      </div>
    </SectionContent>
  );
}
