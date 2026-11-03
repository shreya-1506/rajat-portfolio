import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/index.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Rajat Nalawade — Graphic Designer & Video Editor",
  description: "Portfolio of Rajat Nalawade: graphic design, social creatives, video editing, reels and CGI.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain font-display">{children}</body>
    </html>
  );
}
