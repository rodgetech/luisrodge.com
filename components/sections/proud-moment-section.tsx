"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROUD_MOMENT, SECTIONS } from "@/config/site";
import { ImageLightboxDialog } from "@/components/ui/image-lightbox-dialog";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function ProudMomentSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContent>
        <SectionLabel emphasis>{SECTIONS.proud.label}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-7">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="View payout screenshot"
            aria-haspopup="dialog"
            className="surface-elevated relative mx-auto w-full max-w-[180px] shrink-0 cursor-zoom-in overflow-hidden transition-opacity hover:opacity-90 focus-visible:opacity-90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:mx-0"
          >
            <Image
              src={PROUD_MOMENT.image}
              alt={PROUD_MOMENT.imageAlt}
              width={736}
              height={1024}
              className="h-auto w-full"
            />
          </button>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="text-body">
              {PROUD_MOMENT.paragraphs[0]}
            </p>
            <p className="text-body">
              {PROUD_MOMENT.paragraphs[1]}
            </p>
            <Link
              href={PROUD_MOMENT.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-meta inline-flex min-h-11 items-center gap-1.5 self-start"
            >
              {PROUD_MOMENT.link.label}
              <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </SectionContent>

      <ImageLightboxDialog
        open={open}
        onClose={() => setOpen(false)}
        src={PROUD_MOMENT.image}
        alt={PROUD_MOMENT.imageAlt}
        title={PROUD_MOMENT.imageAlt}
        width={736}
        height={1024}
      />
    </>
  );
}
