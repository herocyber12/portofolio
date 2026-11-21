import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Needed because the app has multiple root layouts (`(root)` and `[lang]`).
    globalNotFound: true,
  },
};

export default nextConfig;
