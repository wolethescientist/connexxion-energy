import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile exists in the parent dir).
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Serve smaller, modern formats when the browser supports them.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days instead of the 60s default.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
