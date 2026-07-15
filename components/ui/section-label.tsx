import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  /** One deliberate Newsreader moment — not the default cadence. */
  emphasis?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  emphasis = false,
  className,
}: SectionLabelProps) {
  return (
    <h2
      className={cn(
        "section-label",
        emphasis && "section-label-emphasis",
        className
      )}
    >
      {children}
    </h2>
  );
}
