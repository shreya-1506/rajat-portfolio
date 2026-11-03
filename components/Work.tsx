"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react";
import { projects, categories, type Project } from "@/lib/content";

const span = (p: Project, i: number) => {
  if (p.ratio === "landscape") return "md:col-span-8";
  if (p.ratio === "portrait") return i % 2 ? "md:col-span-4 md:col-start-8" : "md:col-span-4";
  return i % 3 === 0 ? "md:col-span-6" : "md:col-span-5";
};
const aspect = { portrait: "aspect-[9/16]", landscape: "aspect-video", square: "aspect-square" };
const url = (s: string) => encodeURI(s);

function Tile({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  const v = useRef<HTMLVideoElement>(null);
  const [hov, setHov] = useState(false);
  return (
    <article data-reveal className={`group ${span(p, i)} ${i % 2 ? "md:mt-24" : ""}`}>
      <button onClick={onOpen} onMouseEnter={() => { setHov(true); if (v.current) { v.current.muted = !(window as any).__sound; v.current.play().catch(() => { if (v.current) { v.current.muted = true; v.current.play().catch(() => {}); } }); } }} onMouseLeave={() => { setHov(false); v.current?.pause(); }}
        data-cursor={p.type === "video" ? "Play" : "View"} aria-label={`Open ${p.title}`}
        className={`relative block w-full overflow-hidden bg-coal ${aspect[p.ratio]} ${p.ratio === "portrait" ? "max-h-[80vh]" : ""}`}>
        {p.type === "video" ? (
          <>
            <Image src={p.poster!} alt={p.title} fill sizes="(max-width:768px) 100vw, 60vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <video ref={v} src={url(p.src)} muted loop playsInline preload="none" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hov ? "opacity-100" : "opacity-0"}`} />
            <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur"><Play size={10} fill="currentColor" /> {p.dur}s</span>
          </>
        ) : (
          <Image src={p.src} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-hover:rotate-[0.6deg]" />
        )}
        <span className="pointer-events-none absolute inset-0 bg-acid mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      </button>
      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold uppercase leading-tight tracking-tight md:text-2xl">{p.title}</h3>
        <span className="shrink-0 pt-1 font-mono text-[10px] uppercase tracking-widest text-acid">{String(i + 1).padStart(2, "0")} / {p.category}</span>
      </div>
    </article>
  );
}

function Overlay({ list, idx, close, go }: { list: Project[]; idx: number; close: () => void; go: (d: number) => void }) {
  const p = list[idx];
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k); (window as any).__lenis?.stop();
    return () => { window.removeEventListener("keydown", k); (window as any).__lenis?.start(); };
  }, [close, go]);
  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} className="fixed inset-0 z-[150] grid bg-ink/95 backdrop-blur-md md:grid-cols-[1fr_380px]">
      <div className="relative flex min-h-0 items-center justify-center p-4 md:p-10">
        {p.type === "video"
          ? <video key={p.id} src={url(p.src)} poster={p.poster} controls autoPlay playsInline className="max-h-[78vh] max-w-full md:max-h-[88vh]" />
          : <Image key={p.id} src={p.src} alt={p.title} width={1600} height={p.ratio === "portrait" ? 2000 : 1600} className="max-h-[78vh] w-auto object-contain md:max-h-[88vh]" />}
      </div>
      <aside className="flex flex-col justify-between border-t border-bone/10 p-6 md:border-l md:border-t-0 md:p-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-acid">{p.category} — {String(idx + 1).padStart(2, "0")}/{String(list.length).padStart(2, "0")}</p>
          <h3 className="mt-4 text-3xl font-extrabold uppercase leading-none tracking-tighter md:text-5xl">{p.title}</h3>
          <p className="mt-4 text-bone/70">{p.blurb}</p>
          <dl className="mt-6 space-y-2 font-mono text-xs uppercase tracking-widest text-bone/60">
            <div className="flex justify-between border-b border-bone/10 pb-2"><dt>Format</dt><dd>{p.type === "video" ? `Video · ${p.dur}s` : "Still · Social"}</dd></div>
            <div className="flex justify-between border-b border-bone/10 pb-2"><dt>Orientation</dt><dd>{p.ratio}</dd></div>
          </dl>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous" className="rounded-full border border-bone/30 p-3 hover:bg-bone hover:text-ink"><ArrowLeft size={18} /></button>
          <button onClick={() => go(1)} aria-label="Next" className="rounded-full border border-bone/30 p-3 hover:bg-bone hover:text-ink"><ArrowRight size={18} /></button>
        </div>
      </aside>
      <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-acid p-3 text-ink"><X size={18} /></button>
    </div>
  );
}

export default function Work() {
  const [sound, setSound] = useState(false);
  const toggleSound = () => { (window as any).__sound = !sound; setSound(!sound); };
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  const go = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);
  return (
    <section id="work" className="relative px-5 py-32 md:px-10">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 data-reveal className="text-[16vw] font-extrabold uppercase leading-[0.8] tracking-tighter md:text-[11vw]">Selected<br /><span className="font-serif font-normal normal-case italic text-acid">work</span></h2>
        <div className="flex flex-col items-start gap-4 md:items-end"><button onClick={toggleSound} aria-pressed={sound} className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest ${sound ? "border-acid text-acid" : "border-bone/30"}`}>{sound ? "🔊 Preview sound on" : "🔇 Preview sound off"}</button>
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => { setCat(c); setTimeout(() => import("gsap/ScrollTrigger").then((m) => m.ScrollTrigger.refresh()), 100); }}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${cat === c ? "border-acid bg-acid text-ink" : "border-bone/30 hover:border-bone"}`}>
              {c} <sup>{c === "All" ? projects.length : projects.filter((p) => p.category === c).length}</sup>
            </button>
          ))}
        </div></div>
      </div>
      <div key={cat} className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
        {list.map((p, i) => <Tile key={p.id} p={p} i={i} onOpen={() => setOpen(i)} />)}
      </div>
      {open !== null && <Overlay list={list} idx={open} close={() => setOpen(null)} go={go} />}
    </section>
  );
}

