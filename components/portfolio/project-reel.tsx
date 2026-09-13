"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import type { PortfolioProject } from "@/config/portfolio";
import styles from "./portfolio.module.css";

export function ProjectReel({ project, index, active, onActivate }: { project: PortfolioProject; index: number; active: boolean; onActivate: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const src = project.image.replace(".png", ".mp4");
  const poster = project.image.replace(".png", ".webp");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => { media.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    if (video.current) video.current.currentTime = 0;
  }, [active]);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (active && !paused && !reduced) {
      void element.play().catch(() => {});
    } else element.pause();
  }, [active, paused, reduced]);

  return (
    <article className={styles.project} aria-label={project.name} data-active={active}>
      <div className={styles.preview} data-showcase>
        <a className={styles.previewLink} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} (opens in a new tab)`}>
          <video ref={video} src={active ? src : undefined} poster={poster} muted loop playsInline preload={index === 0 ? "auto" : "none"} aria-label={`Visual walkthrough of ${project.name}`} />
          <span className={styles.visit}>Visit website <ArrowUpRight size={17} /></span>
        </a>
        <button className={styles.playback} type="button" aria-label={!active || paused || reduced ? `Play ${project.name} preview` : `Pause ${project.name} preview`} onClick={() => {
          if (!active) { onActivate(); setReduced(false); setPaused(false); }
          else if (reduced) { setReduced(false); setPaused(false); }
          else setPaused(!paused);
        }}>{!active || paused || reduced ? <Play size={14} /> : <Pause size={14} />}</button>
      </div>
    </article>
  );
}
