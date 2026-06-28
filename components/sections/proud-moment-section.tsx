"use client";

import { useState } from "react";
import Image from "next/image";
import { PROUD_MOMENT, SECTIONS } from "@/config/site";
import { ImageLightboxDialog } from "@/components/ui/image-lightbox-dialog";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";

export function ProudMomentSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionContent>
        <SectionLabel>{SECTIONS.proud.label}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="View payout screenshot"
            aria-haspopup="dialog"
            className="group relative mx-auto w-full max-w-[160px] shrink-0 cursor-zoom-in sm:mx-0"
          >
            <div className="overflow-hidden rounded-[1.75rem] shadow-elevated transition-opacity group-hover:opacity-90">
              <Image
                src={PROUD_MOMENT.image}
                alt={PROUD_MOMENT.imageAlt}
                width={736}
                height={1024}
                className="h-auto w-full"
              />
            </div>
          </button>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <blockquote className="border-l-2 border-border pl-4 text-body text-[0.875rem] leading-relaxed text-foreground/90">
              {PROUD_MOMENT.paragraphs[0]}
            </blockquote>
            <p className="text-body text-[0.875rem] leading-relaxed">
              {PROUD_MOMENT.paragraphs[1]}
            </p>
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
