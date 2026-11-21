import type { NextConfig } from "next";

// Public URL of the deployed site. Canonical URLs, hreflang, sitemap, robots,
// structured data, and llms.txt are all built from this value.
const SITE_URL = "https://herocyber12.github.io/portofolio";
const BASE_PATH = new URL(SITE_URL).pathname.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: SITE_URL,
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  experimental: {
    // Needed because the app has multiple root layouts (`(root)` and `[lang]`).
    globalNotFound: true,
  },
};

export default nextConfig;
