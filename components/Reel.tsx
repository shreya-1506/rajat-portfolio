"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Maximize } from "lucide-react";
import { reelFeatured } from "@/lib/content";

export default function Reel() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = useRef<HTMLVideoElement>(null);
  const p = reelFeatured[i];
  const toggle = () => { const el = v.current; if (!el) return; el.paused ? el.play() : el.pause(); };
  return (
    <section id="reel" className="bg-bone px-5 py-28 text-ink md:px-10">
      <div className="mb-10 flex items-end justify-between">
        <h2 data-reveal className="text-[16vw] font-extrabold uppercase leading-[0.8] tracking-tighter md:text-[11vw]">Show<span className="font-serif font-normal normal-case italic">reel</span></h2>
        <p className="hidden max-w-xs text-sm md:block">Long-form films and edits — cuts, pacing and sound, in motion.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="group relative aspect-video overflow-hidden bg-ink" data-cursor={playing ? "Pause" : "Play"}>
          <video key={p.id} ref={v} src={encodeURI(p.src)} poster={p.poster} playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onClick={toggle} className="h-full w-full cursor-none object-cover" />
          <button onClick={toggle} aria-label={playing ? "Pause" : "Play"}
            className={`absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-acid text-ink transition-all duration-500 hover:scale-110 ${playing ? "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100" : ""}`}>
            {playing ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
          </button>
          <button onClick={() => v.current?.requestFullscreen?.()} aria-label="Fullscreen" className="absolute bottom-4 right-4 rounded-full bg-ink/70 p-3 text-bone"><Maximize size={16} /></button>
          <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-bone">{p.title}</div>
        </div>
        <ul className="flex flex-col gap-3">
          {reelFeatured.map((r, k) => (
            <li key={r.id}>
              <button onClick={() => { setI(k); setPlaying(false); }} aria-current={k === i} className={`flex w-full gap-3 border p-2 text-left transition-colors ${k === i ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink"}`}>
                <span className="relative aspect-video w-28 shrink-0 overflow-hidden"><Image src={r.poster!} alt="" fill sizes="120px" className="object-cover" /></span>
                <span><span className="block font-mono text-[10px] uppercase tracking-widest opacity-60">0{k + 1} · {Math.floor(r.dur! / 60)}:{String(r.dur! % 60).padStart(2, "0")}</span><span className="block text-sm font-bold uppercase leading-tight">{r.title}</span><span className="text-xs opacity-70">{r.blurb}</span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
