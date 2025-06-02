
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true, 
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      { 
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
      { 
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
