import { cn } from "@/lib/utils";

type SectionContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionContent({ children, className }: SectionContentProps) {
  return <div className={cn("section-content", className)}>{children}</div>;
}
