"use client";

import { useState } from "react";
import Image from "next/image";
import { SECTIONS, VIDEO_JOURNAL } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { VideoDemoDialog } from "@/components/ui/video-demo-dialog";

export function CurrentlyWorkingOnSection() {
  const [open, setOpen] = useState(false);

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
                width={40}
                height={40}
                className="surface rounded-lg"
              />
              <h3 className="section-title">{VIDEO_JOURNAL.name}</h3>
            </div>

            <p className="text-body text-pretty">{VIDEO_JOURNAL.description}</p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-1.5">
                {VIDEO_JOURNAL.highlights.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md bg-muted px-2 py-1 text-meta"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {VIDEO_JOURNAL.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2 py-1 text-meta"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Play ${VIDEO_JOURNAL.name} demo`}
            aria-haspopup="dialog"
            className="group surface-elevated relative mx-auto aspect-[9/16] w-full max-w-[180px] shrink-0 overflow-hidden sm:mx-0 sm:w-44"
          >
            <video
              src={VIDEO_JOURNAL.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/95 shadow-sm">
                <svg
                  className="h-3.5 w-3.5 translate-x-0.5 text-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
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
