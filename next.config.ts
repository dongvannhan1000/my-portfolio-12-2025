import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Sanity Studio works properly
  transpilePackages: ['sanity'],

  // Silence some hydration warnings from Sanity Studio
  reactStrictMode: false,

  // Empty turbopack config to silence the build error in Next.js 16
  turbopack: {},

  // Adding a custom webpack config for fallback/compatibility
  webpack: (config) => {
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;


