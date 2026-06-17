import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/solutions/studio", destination: "/solutions/curriculum", permanent: true },
      { source: "/solutions/pulse", destination: "/solutions/opex", permanent: true },
      { source: "/roi", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
