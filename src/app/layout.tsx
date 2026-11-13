import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: "Freelance web developer building fast, responsive websites that look and work great on every phone, tablet and desktop.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Fast, responsive websites that work beautifully on every device.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
