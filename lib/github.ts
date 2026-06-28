import { unstable_cache } from "next/cache";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  total: Record<number, number>;
};

export async function getGitHubContributionsTotal(): Promise<number> {
  try {
    const url = new URL(
      `/v4/${GITHUB_USERNAME}`,
      "https://github-contributions-api.jogruber.de"
    );
    const response = await fetch(url);

    if (!response.ok) {
      return 0;
    }

    const data = (await response.json()) as GitHubContributionsResponse;
    const currentYear = new Date().getFullYear();
    return data.total[currentYear] ?? 0;
  } catch {
    return 0;
  }
}

export const getCachedGitHubContributionsTotal = unstable_cache(
  getGitHubContributionsTotal,
  ["github-contributions-total", GITHUB_USERNAME],
  { revalidate: 60 * 60 * 24 }
);
