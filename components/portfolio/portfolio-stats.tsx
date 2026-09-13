"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.css";

export function PortfolioStats() {
  const root = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = Math.min((now - start) / 1400, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.25 });

    const stop = () => {
      if (!motion.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setProgress(1);
    };
    motion.addEventListener("change", stop);
    if (root.current) observer.observe(root.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", stop);
    };
  }, []);

  return (
    <div ref={root} className={styles.stats}>
      <div><strong aria-label="12 plus"><span aria-hidden="true" className={styles.count}>{Math.round(12 * progress)}+</span></strong><span>Clients</span></div>
      <div><strong aria-label="13 plus"><span aria-hidden="true" className={styles.count}>{Math.round(13 * progress)}+</span></strong><span>Projects shipped</span></div>
      <div><strong aria-label="$500"><span aria-hidden="true" className={styles.count}><span className={styles.currency}>$</span>{Math.round(500 * progress)}</span></strong><span>Starting price</span></div>
    </div>
  );
}
