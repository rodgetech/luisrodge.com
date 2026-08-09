import type { MetadataRoute } from "next";

import { SITE_INFO, SITE_PATHS } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_INFO.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}${SITE_PATHS.hire}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_INFO.url}${SITE_PATHS.experience}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
