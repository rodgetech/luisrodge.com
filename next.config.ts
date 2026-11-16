import type { NextConfig } from "next";

/**
 * Pages retired when the client-services offer moved to Made by LR's own site
 * (Nov 2026). Permanent redirects keep inbound links and search equity.
 */
const RETIRED_PATHS = [
  "/about",
  "/work",
  "/web-design-belize",
  "/small-business-web-design",
  "/web-app-development",
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_PATHS.map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
