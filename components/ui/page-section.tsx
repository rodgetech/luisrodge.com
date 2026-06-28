import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** First section in main — no top divider */
  first?: boolean;
};

export function PageSection({
  children,
  id,
  className,
  first = false,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[4.25rem] pb-[var(--section-space)]",
        first
          ? "pt-[var(--section-space-first)]"
          : "border-t border-border pt-[var(--section-space)]",
        className
      )}
    >
      {children}
    </section>
  );
}
