"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SECTIONS, VIDEO_JOURNAL } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { VideoDemoDialog } from "@/components/ui/video-demo-dialog";

export function CurrentlyWorkingOnSection() {
  const [open, setOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoplay(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <SectionContent>
        <SectionLabel>{SECTIONS.building.label}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={VIDEO_JOURNAL.iconSrc}
                alt={`${VIDEO_JOURNAL.name} app icon`}
                width={44}
                height={44}
                className="surface rounded-lg"
              />
              <div className="flex min-w-0 flex-col gap-0.5">
                <h3 className="section-title text-balance">{VIDEO_JOURNAL.name}</h3>
                <p className="text-meta">
                  {VIDEO_JOURNAL.techStack.join(" · ")}
                </p>
              </div>
            </div>

            <p className="text-body">{VIDEO_JOURNAL.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {VIDEO_JOURNAL.highlights.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md bg-muted px-2.5 py-1 text-meta font-medium text-foreground/80"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Play ${VIDEO_JOURNAL.name} demo`}
            aria-haspopup="dialog"
            className="group surface-elevated relative mx-auto aspect-[9/16] w-full max-w-[200px] shrink-0 overflow-hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:mx-0 sm:w-48"
          >
            <video
              src={VIDEO_JOURNAL.videoSrc}
              autoPlay={autoplay}
              muted
              loop={autoplay}
              playsInline
              preload={autoplay ? "auto" : "metadata"}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
              <div className="flex size-11 items-center justify-center rounded-full bg-background/95 shadow-sm">
                <svg
                  className="h-3.5 w-3.5 translate-x-0.5 text-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </SectionContent>

      <VideoDemoDialog
        open={open}
        onClose={() => setOpen(false)}
        src={VIDEO_JOURNAL.videoSrc}
        title={VIDEO_JOURNAL.name}
      />
    </>
  );
}
