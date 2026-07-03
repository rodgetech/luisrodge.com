"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROUD_MOMENT, SECTIONS } from "@/config/site";
import { ImageLightboxDialog } from "@/components/ui/image-lightbox-dialog";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { ShineBorder } from "@/components/ui/shine-border";

export function ProudMomentSection() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { borderWidth, shineColor } = PROUD_MOMENT.shineBorder;
  const isDark = resolvedTheme === "dark";

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
            className="surface-elevated relative mx-auto w-full max-w-[160px] shrink-0 cursor-zoom-in overflow-hidden transition-opacity hover:opacity-90 sm:mx-0"
          >
            <Image
              src={PROUD_MOMENT.image}
              alt={PROUD_MOMENT.imageAlt}
              width={736}
              height={1024}
              className="h-auto w-full"
            />
            <ShineBorder
              borderWidth={isDark ? borderWidth.dark : borderWidth.light}
              shineColor={isDark ? shineColor.dark : shineColor.light}
            />
          </button>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="text-body text-[0.875rem] leading-relaxed">
              {PROUD_MOMENT.paragraphs[0]}
            </p>
            <p className="text-body text-[0.875rem] leading-relaxed">
              {PROUD_MOMENT.paragraphs[1]}
            </p>
            <Link
              href={PROUD_MOMENT.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 self-start"
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
