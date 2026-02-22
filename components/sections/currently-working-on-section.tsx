"use client";

import { useState } from "react";

export function CurrentlyWorkingOnSection() {
  const techStack = ["Swift", "iOS", "SwiftUI", "AVFoundation"];
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Currently Working On
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          A sneak peek at what I&apos;m building right now.
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-6">
        {/* Text content */}
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                In Development
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Video Journal
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A TikTok-style video journaling app for iOS. Record, organize,
                and relive daily moments through short video clips.
              </p>
              <blockquote className="border-l-2 border-zinc-200 dark:border-zinc-700 pl-3">
                <p className="text-sm italic text-zinc-500 dark:text-zinc-50">
                  &ldquo;Writing never captured it for me. With video, I can go back months later and actually
                  see myself — how I looked, the weight behind my eyes, whether I seemed lost or full of
                  life. It&apos;s an honest record of who I was, and a mirror for how far I&apos;ve come.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="flex flex-col gap-1.5 mt-1">
              {[
                "TikTok-style video feed",
                "Daily streaks & stats",
                "Video transcription",
                "Mood journey reels",
                "Archive & storage management",
                "iCloud sync",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  {feature}
                </li>
              ))}
            </ul>
        </div>

        {/* Video preview */}
        <button
            onClick={() => window.innerWidth >= 640 && setOpen(true)}
            className="group relative w-full sm:w-72 shrink-0 aspect-[9/16] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
          >
            <video
              src="/videos/videojournalapp.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/90 shadow-md">
                <svg className="h-5 w-5 text-zinc-900 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/videos/videojournalapp.mp4"
              autoPlay
              controls
              loop
              playsInline
              className="max-h-[90vh] w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
