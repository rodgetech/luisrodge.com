"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_PROJECTS } from "@/config/portfolio";
import { ProjectReel } from "./project-reel";

export function ProjectGallery() {
  const gallery = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    let pending = 0;
    const measure = () => {
      pending = 0;
      if (document.hidden) { setActive(null); return; }
      let best: number | null = null;
      let bestVisible = 0;
      gallery.current?.querySelectorAll<HTMLElement>("[data-showcase]").forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        if (visible > bestVisible) { best = index; bestVisible = visible; }
      });
      setActive(best);
    };
    const schedule = () => { if (!pending) pending = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    const observer = new ResizeObserver(schedule);
    if (gallery.current) observer.observe(gallery.current);
    return () => {
      cancelAnimationFrame(pending);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, []);

  return <div ref={gallery}>{PORTFOLIO_PROJECTS.map((project, index) => (
    <ProjectReel key={project.name} project={project} index={index} active={active === index} onActivate={() => setActive(index)} />
  ))}</div>;
}
