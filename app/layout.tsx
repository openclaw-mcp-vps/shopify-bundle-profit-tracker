import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bundle Profit Tracker — Real Margins for Shopify Bundles",
  description: "Track true profit margins on your Shopify product bundles. Account for item costs, shipping, and fees in real time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7b40faae-bfd4-48d5-8ae2-f67fb3323220"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
