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
      { source: "/:path*", destination: "https://sophrosynesystems.org/:path*", permanent: true, has: [{ type: "host", value: "www.sophrosynesystems.org" }] },
    ];
  },
  // Unlisted: proxy the AI Fluency Standard brief (separate Vercel project) at this subpath.
  // The brief is login-gated in middleware.ts; the ?k= shared secret proves the request
  // arrived through this authenticated proxy, so the brief can refuse direct (raw-URL) hits.
  async rewrites() {
    const k = process.env.AIFLUENCY_PROXY_KEY ?? "";
    return [
      { source: "/aifluencystandard", destination: `https://holocene-ai-brief.vercel.app/aifluencystandard?k=${k}` },
      { source: "/aifluencystandard/:path*", destination: `https://holocene-ai-brief.vercel.app/aifluencystandard/:path*?k=${k}` },
    ];
  },
};

export default nextConfig;
