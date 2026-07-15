"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SECTIONS, VIDEO_JOURNAL } from "@/config/site";
import { SectionContent } from "@/components/ui/section-content";
import { SectionLabel } from "@/components/ui/section-label";
import { VideoDemoDialog } from "@/components/ui/video-demo-dialog";

export function CurrentlyWorkingOnSection() {
  const [open, setOpen] = useState(false);
  const previewRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const button = previewRef.current;
    const video = videoRef.current;
    if (!button || !video) return;

    let inView = false;

    const prefersReducedMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sync = () => {
      const shouldPlay = inView && !open && !prefersReducedMotion();

      if (shouldPlay) {
        if (video.getAttribute("src") !== VIDEO_JOURNAL.videoSrc) {
          video.src = VIDEO_JOURNAL.videoSrc;
        }
        void video.play().catch(() => {
          // Autoplay can be blocked; poster + play affordance still work.
        });
        return;
      }

      video.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { rootMargin: "120px", threshold: 0.15 }
    );

    observer.observe(button);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", sync);
    sync();

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", sync);
    };
  }, [open]);

  return (
    <>
      <SectionContent>
        <SectionLabel>{SECTIONS.building.label}</SectionLabel>

        <div className="flex flex-col gap-4">
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

          {/* Mobile: proof media before long copy. Desktop: copy left, media right. */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-[var(--media-gutter)]">
            <button
              ref={previewRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Play ${VIDEO_JOURNAL.name} demo`}
              aria-haspopup="dialog"
              aria-describedby="video-journal-demo-summary"
              className="group surface-elevated relative mx-auto aspect-[9/16] w-full max-w-[160px] shrink-0 overflow-hidden order-1 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:order-2 sm:mx-0 sm:max-w-none sm:w-48"
            >
              <video
                ref={videoRef}
                poster={VIDEO_JOURNAL.posterSrc}
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none">
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

            <div className="order-2 flex min-w-0 flex-1 flex-col gap-4 sm:order-1">
              <p className="text-body">{VIDEO_JOURNAL.description}</p>

              <p className="text-meta">
                {VIDEO_JOURNAL.highlights.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <p id="video-journal-demo-summary" className="sr-only">
          {VIDEO_JOURNAL.demoSummary}
        </p>
      </SectionContent>

      <VideoDemoDialog
        open={open}
        onClose={() => setOpen(false)}
        src={VIDEO_JOURNAL.videoSrc}
        poster={VIDEO_JOURNAL.posterSrc}
        title={VIDEO_JOURNAL.name}
      />
    </>
  );
}
