"use client";
import { useState } from "react";
import { scrollToId } from "./SmoothScroll";
import { profile } from "@/lib/content";

const links = [["Work", "#work"], ["Reel", "#reel"], ["About", "#about"], ["Toolkit", "#toolkit"], ["Journey", "#journey"], ["Contact", "#contact"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const go = (h: string) => { setOpen(false); setTimeout(() => scrollToId(h), 250); };
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[60] flex items-center justify-between px-5 py-5 mix-blend-difference md:px-10">
        <a href="#top" onClick={(e) => { e.preventDefault(); go("#top"); }} className="font-mono text-xs font-medium uppercase tracking-widest text-white">RN<span className="text-acid">®</span> / {profile.first}</a>
        <div className="hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-white md:flex">
          <span className="mr-6 flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-acid" />Available for work</span>
        </div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" data-cursor="" className="font-mono text-xs uppercase tracking-widest text-white">
          {open ? "Close ✕" : "Menu ＋"}
        </button>
      </header>
      <nav id="menu" aria-hidden={!open} className={`fixed inset-0 z-[55] bg-ink transition-[clip-path] duration-700 [transition-timing-function:cubic-bezier(.76,0,.24,1)] ${open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"}`}>
        <ul className="flex h-full flex-col justify-center px-5 md:px-10">
          {links.map(([l, h], i) => (
            <li key={l} className="overflow-hidden">
              <a href={h} tabIndex={open ? 0 : -1} onClick={(e) => { e.preventDefault(); go(h); }}
                className="group flex items-baseline gap-4 py-1 text-[13vw] font-extrabold uppercase leading-[0.95] tracking-tighter text-bone transition-colors hover:text-acid md:text-[9vw]">
                <span className="font-mono text-xs font-normal tracking-widest text-bone/40">0{i + 1}</span>
                <span className="transition-transform duration-500 group-hover:translate-x-4">{l}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
