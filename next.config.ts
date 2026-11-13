import type { NextConfig } from "next";

// "export" builds a fully static site (HTML/CSS/JS) that can be hosted free
// on Vercel, Netlify, Cloudflare Pages or GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
