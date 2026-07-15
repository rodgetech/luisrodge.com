"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROUD_MOMENT, SECTIONS } from "@/config/site";
import { ModalDialog } from "@/components/ui/modal-dialog";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import "./proud-moment.css";

export function ProudMomentSection() {
  const [open, setOpen] = useState(false);
  const { closing } = PROUD_MOMENT;

  return (
    <>
      <SectionContent>
        <SectionLabel emphasis>{SECTIONS.proud.label}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-[var(--media-gutter)]">
          <figure className="mx-auto flex w-full max-w-[140px] shrink-0 flex-col gap-2 sm:mx-0 sm:max-w-[180px]">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View payout screenshot"
              aria-haspopup="dialog"
              className="proud-phone surface-elevated relative w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <Image
                src={PROUD_MOMENT.image}
                alt={PROUD_MOMENT.imageAlt}
                width={736}
                height={1024}
                sizes="(max-width: 640px) 140px, 180px"
                className="h-auto w-full"
              />
              <span className="proud-phone-hint pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-background/80 to-transparent px-2 pb-2.5 pt-8 text-meta text-foreground/80">
                Expand
              </span>
            </button>
            <figcaption className="text-meta px-0.5 text-center font-serif italic sm:text-left">
              {PROUD_MOMENT.imageCaption}
            </figcaption>
          </figure>

          <div className="flex min-w-0 flex-1 flex-col gap-[var(--stack-prose)]">
            <p className="text-body">{PROUD_MOMENT.lead}</p>
            <p className="text-body">
              {closing.before}
              <span className="proud-highlight font-medium text-foreground">
                {closing.highlight}
              </span>
              {closing.after}
            </p>
            <Link
              href={PROUD_MOMENT.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group link-underline text-meta mt-1 inline-flex min-h-11 items-center gap-1.5 self-start"
            >
              {PROUD_MOMENT.link.label}
              <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        </div>
      </SectionContent>

      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title={PROUD_MOMENT.imageAlt}
      >
        <div className="proud-lightbox-image surface-elevated overflow-hidden">
          <Image
            src={PROUD_MOMENT.image}
            alt={PROUD_MOMENT.imageAlt}
            width={736}
            height={1024}
            className="h-auto max-h-[85vh] w-auto max-w-[min(90vw,280px)]"
          />
        </div>
      </ModalDialog>
    </>
  );
}
