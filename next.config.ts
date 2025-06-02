import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true, // Explicitly enable SWC minification
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      { // Added for existing images in messagesData.ts
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "imgcdn.stablediffusionweb.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      { // Added for current user avatar in userData.ts
        protocol: "https",
        hostname: "upload.wikimedia.org",
      }
    ],
  },
  allowedDevOrigins: [
    "https://6000-firebase-studio-1748833803807.cluster-fkltigo73ncaixtmokrzxhwsfc.cloudworkstations.dev",
  ],
};

export default nextConfig;
