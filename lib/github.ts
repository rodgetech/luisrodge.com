export type ContributionDay = {
  date: string;
  /** 0–4, GitHub's own intensity bucket. */
  level: number;
  count: number;
  /** GitHub's grid position: row 0 = Sunday, col 0 = oldest week. */
  row: number;
  col: number;
};

export type ContributionCalendar = {
  total: number;
  weeks: number;
  days: ContributionDay[];
};

const DAY_CELL = /<td[^>]*data-date="([\d-]+)"[^>]*>/g;

/**
 * Reads the public contributions calendar GitHub renders on a profile page.
 * No token needed. Cached for a day; returns null on any failure so the
 * homepage simply omits the section instead of breaking.
 */
export async function getContributionCalendar(username: string): Promise<ContributionCalendar | null> {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: { "User-Agent": "Mozilla/5.0 (personal site)" },
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const [, id, text] of html.matchAll(/for="(contribution-day-component-[\d-]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      const match = /^(\d+) contribution/.exec(text);
      counts.set(id, match ? Number(match[1]) : 0);
    }

    const days: ContributionDay[] = [];
    for (const [cell, date] of html.matchAll(DAY_CELL)) {
      const id = /id="(contribution-day-component-(\d+)-(\d+))"/.exec(cell);
      const level = /data-level="(\d)"/.exec(cell);
      if (!id || !level) continue;
      days.push({
        date,
        level: Number(level[1]),
        count: counts.get(id[1]) ?? 0,
        row: Number(id[2]),
        col: Number(id[3]),
      });
    }

    if (days.length === 0) return null;
    return {
      total: days.reduce((sum, day) => sum + day.count, 0),
      weeks: Math.max(...days.map((day) => day.col)) + 1,
      days,
    };
  } catch {
    return null;
  }
}
