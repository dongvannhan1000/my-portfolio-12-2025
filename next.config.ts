import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Sanity Studio works properly
  transpilePackages: ['sanity'],

  // Silence some hydration warnings from Sanity Studio
  reactStrictMode: false,

  // Adding a custom webpack config forces Next.js to use Webpack instead of Turbopack
  // as of current versions, ensuring stable operation on Windows for Sanity Studio.
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


