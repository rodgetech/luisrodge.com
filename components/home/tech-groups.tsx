import type { TechGroup } from "@/config/home";
import { TechChip } from "@/components/ui/tech-chip";
import type { TechStackItem } from "@/config/site";

/** One labeled row: label column on the left from `sm` up, stacked on mobile. Render inside a <dl>. */
export function TechRow({ label, tech }: { label: string; tech: readonly TechStackItem[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4">
      <dt className="text-sm text-muted-foreground sm:pt-1">{label}</dt>
      <dd>
        <ul className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item.name}>
              <TechChip tech={item} />
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

/** Labeled rows of tech chips: label column on the left from `sm` up, stacked on mobile. */
export function TechGroups({ groups }: { groups: readonly TechGroup[] }) {
  return (
    <dl className="flex flex-col gap-4 sm:gap-3">
      {groups.map((group) => (
        <TechRow key={group.label} label={group.label} tech={group.tech} />
      ))}
    </dl>
  );
}
