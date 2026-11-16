import type { MetadataRoute } from "next";

import { SITE_INFO, SITE_PATHS } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_INFO.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}${SITE_PATHS.experience}`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}${SITE_PATHS.hire}`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
