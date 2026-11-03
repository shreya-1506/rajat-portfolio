"use client";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "./SmoothScroll";
import { profile } from "@/lib/content";
export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-6 bg-ink px-5 py-10 font-mono text-xs uppercase tracking-widest md:flex-row md:items-center md:px-10">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="text-bone/50">Designed in frames. Built to move.</span>
      <button onClick={() => scrollToId("#top")} className="flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2 hover:bg-bone hover:text-ink">Back to top <ArrowUp size={14} /></button>
    </footer>
  );
}
