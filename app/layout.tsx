import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["300","400","500","700","800"] });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400", style: ["normal","italic"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500"] });
export const metadata: Metadata = {
  title: "Rajat Nalawade — Graphic Designer & Video Editor",
  description: "Portfolio of Rajat Nalawade: graphic design, social creatives, video editing, reels and CGI.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body className="grain font-display">{children}</body>
    </html>
  );
}
