import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment
  basePath: '/lamtd.github.io',
  assetPrefix: '/lamtd.github.io',
};

export default nextConfig;
