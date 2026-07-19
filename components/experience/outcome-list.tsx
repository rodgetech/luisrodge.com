import { cn } from "@/lib/utils";

type OutcomeListProps = {
  outcomes: string[];
  className?: string;
};

export function OutcomeList({ outcomes, className }: OutcomeListProps) {
  if (outcomes.length === 0) return null;

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {outcomes.map((outcome) => (
        <li key={outcome} className="text-body relative pl-4 text-pretty">
          <span
            aria-hidden
            className="absolute top-[0.7em] left-0 size-1 rounded-full bg-muted-foreground/50"
          />
          {outcome}
        </li>
      ))}
    </ul>
  );
}
