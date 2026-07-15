"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Expand } from "lucide-react";
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

        {/*
          Mobile (1 col): lead → large proof → closing.
          Desktop: image left, copy right (lead + closing stacked).
        */}
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-x-[var(--media-gutter)] sm:gap-y-[var(--stack-prose)]">
          <p className="text-body sm:col-start-2 sm:row-start-1">
            {PROUD_MOMENT.lead}
          </p>

          <figure className="proud-figure mx-auto flex w-fit flex-col gap-2 sm:col-start-1 sm:row-start-1 sm:row-span-2 sm:mx-0">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View payout screenshot"
              aria-haspopup="dialog"
              className="proof-phone proud-phone surface-elevated relative cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <Image
                src={PROUD_MOMENT.image}
                alt={PROUD_MOMENT.imageAlt}
                width={736}
                height={1024}
                sizes="(max-width: 640px) 72vw, 180px"
                className="h-auto w-full"
              />
              <span className="proud-phone-hint pointer-events-none absolute right-2 bottom-2 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm">
                <Expand className="size-3.5" strokeWidth={2} aria-hidden />
                <span className="sr-only">Expand</span>
              </span>
            </button>
            <figcaption className="text-meta px-0.5 text-center font-serif italic sm:text-left">
              {PROUD_MOMENT.imageCaption}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-[var(--stack-prose)] sm:col-start-2 sm:row-start-2">
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
            sizes="(max-width: 640px) 92vw, 320px"
            className="block h-auto w-[min(92vw,320px)] max-h-[min(85dvh,calc(100dvh-5.5rem))] object-contain"
          />
        </div>
      </ModalDialog>
    </>
  );
}
