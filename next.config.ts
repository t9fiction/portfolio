import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'three', 'react-icons'],
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
