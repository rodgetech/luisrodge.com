import { SectionHeader } from "@/components/home/section-header";
import { GITHUB_USERNAME, SOCIAL_LINKS } from "@/config/site";
import { getContributionCalendar } from "@/lib/github";
import { cn } from "@/lib/utils";

const LEVEL_CLASS = [
  "bg-muted",
  "bg-foreground/20",
  "bg-foreground/40",
  "bg-foreground/65",
  "bg-foreground/90",
];
const MONTH = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" });
const DAY_LABEL = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

/** Server component: renders nothing if GitHub can't be reached. */
export async function GitHubActivity() {
  const calendar = await getContributionCalendar(GITHUB_USERNAME);
  if (!calendar) return null;

  // Label a column when its first day starts a new month (skip the partial first week).
  const months: { col: number; label: string }[] = [];
  let previous = -1;
  for (let col = 0; col < calendar.weeks; col++) {
    const first = calendar.days.find((day) => day.col === col);
    if (!first) continue;
    const month = new Date(`${first.date}T00:00:00Z`).getUTCMonth();
    if (month !== previous && col > 0) months.push({ col, label: MONTH.format(new Date(`${first.date}T00:00:00Z`)) });
    previous = month;
  }

  return (
    <section aria-labelledby="github-heading">
      <SectionHeader
        id="github-heading"
        title="GitHub"
        link={{ href: SOCIAL_LINKS.github.url, label: GITHUB_USERNAME, external: true }}
      />
      <p className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground tabular-nums">{calendar.total.toLocaleString("en-US")}</span> contributions in the last year
      </p>

      {/*
        One grid holds month labels, weekday labels and cells, so they can't drift apart.
        Cells are fluid squares; below ~640px the grid scrolls, and the rtl scroller
        opens on the newest week.
      */}
      <div className="mt-4 overflow-x-auto pb-1 [direction:rtl]">
        <div
          role="img"
          aria-label={`${calendar.total.toLocaleString("en-US")} GitHub contributions in the last year`}
          className="grid min-w-[40rem] text-[10px] leading-none text-muted-foreground [direction:ltr]"
          style={{
            gridTemplateColumns: `auto repeat(${calendar.weeks}, minmax(0, 1fr))`,
            gridTemplateRows: "auto repeat(7, auto)",
            gap: 3,
          }}
        >
          {months.map(({ col, label }) => (
            <span key={col} aria-hidden className="pb-1.5 whitespace-nowrap" style={{ gridRow: 1, gridColumn: `${col + 2} / span 3` }}>
              {label}
            </span>
          ))}
          {[["Mon", 3], ["Wed", 5], ["Fri", 7]].map(([label, row]) => (
            <span key={label} aria-hidden className="flex items-center pr-2" style={{ gridRow: Number(row), gridColumn: 1 }}>
              {label}
            </span>
          ))}
          {calendar.days.map((day) => (
            <span
              key={day.date}
              aria-hidden
              title={`${day.count === 0 ? "No" : day.count} contribution${day.count === 1 ? "" : "s"} on ${DAY_LABEL.format(new Date(`${day.date}T00:00:00Z`))}`}
              className={cn("aspect-square rounded-[3px]", LEVEL_CLASS[day.level] ?? LEVEL_CLASS[0])}
              style={{ gridRow: day.row + 2, gridColumn: day.col + 2 }}
            />
          ))}
        </div>
      </div>

      <div aria-hidden className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
        Less
        {LEVEL_CLASS.map((level) => (
          <span key={level} className={cn("size-2.5 rounded-[3px]", level)} />
        ))}
        More
      </div>
    </section>
  );
}
