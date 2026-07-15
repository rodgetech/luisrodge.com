import { cn } from "@/lib/utils";

export type PageSectionVariant = "first" | "default" | "emphasis" | "footer";

const VARIANT_CLASS: Record<PageSectionVariant, string> = {
  first: "pt-[var(--section-space-first)] pb-[var(--section-space)]",
  default:
    "border-t border-border pt-[var(--section-space)] pb-[var(--section-space)]",
  emphasis:
    "border-t border-border pt-[var(--section-space-emphasis)] pb-[var(--section-space)]",
  footer:
    "border-t border-border pt-[var(--section-space-footer)] pb-[var(--section-space-footer)]",
};

type PageSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: PageSectionVariant;
};

export function PageSection({
  children,
  id,
  className,
  variant = "default",
}: PageSectionProps) {
  const Comp = variant === "footer" ? "footer" : "section";

  return (
    <Comp
      id={id}
      className={cn(
        "scroll-mt-[var(--scroll-margin)]",
        VARIANT_CLASS[variant],
        className
      )}
    >
      {children}
    </Comp>
  );
}
