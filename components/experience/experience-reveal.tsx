import { cn } from "@/lib/utils";

type ExperienceRevealProps = {
  children: React.ReactNode;
  index?: number;
  className?: string;
};

/**
 * Motion enhances an already-visible default (no opacity:0 gate).
 * Disabled under prefers-reduced-motion via CSS.
 */
export function ExperienceReveal({
  children,
  index = 0,
  className,
}: ExperienceRevealProps) {
  return (
    <div
      className={cn("experience-reveal", className)}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      {children}
    </div>
  );
}
