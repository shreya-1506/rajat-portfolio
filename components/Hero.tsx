"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
import { scrollToId } from "./SmoothScroll";
import { profile, disciplines } from "@/lib/content";

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.from(".h-line > span", { yPercent: 115, duration: 1.2, ease: "expo.out", stagger: 0.12 });
      gsap.from(".h-fade", { opacity: 0, y: 24, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.5 });
      gsap.from(".h-portrait", { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.inOut", delay: 0.3 });
      gsap.to(".h-float", { y: -18, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.4 });
      gsap.to(".h-name", { yPercent: -18, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, [ready]);
  return (
    <section ref={root} id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-8 pt-28 md:px-10">
      <div aria-hidden className="absolute -right-40 top-10 h-[60vw] w-[60vw] rounded-full bg-violet/20 blur-[120px]" />
      <div aria-hidden className="absolute -left-40 bottom-0 h-[40vw] w-[40vw] rounded-full bg-acid/10 blur-[120px]" />

      <div className="h-portrait absolute right-5 top-24 z-10 hidden w-[22vw] max-w-[320px] md:block" style={{ aspectRatio: "3/4" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/web/rajat.png" alt="Portrait of Rajat Nalawade" className="h-full w-full rounded-t-full object-cover grayscale" />
        <span className="absolute -left-6 bottom-8 font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-rl]">Portrait — Rajat N.</span>
      </div>
      <div className="h-float absolute left-[8vw] top-[22vh] z-10 hidden w-32 overflow-hidden rounded-xl border border-bone/20 md:block" style={{ aspectRatio: "9/16" }}>
        <video src="/media/v/300-cities-presence-reel.mp4" poster="/media/posters/300-cities-presence-reel.jpg" autoPlay muted loop playsInline preload="none" className="h-full w-full object-cover" />
      </div>

      <p className="h-fade relative z-10 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-acid">● {profile.role} — India</p>
      <h1 className="h-name relative z-20 text-[19vw] font-extrabold uppercase leading-[0.78] tracking-tighter md:text-[15.5vw]">
        <span className="mask-line h-line"><span>{profile.first}</span></span>
        <span className="mask-line h-line"><span className="outline md:pl-[8vw]">{profile.last}</span></span>
      </h1>
      <div className="relative z-10 mt-10 grid items-end gap-8 md:grid-cols-12">
        <p className="h-fade font-serif text-3xl italic leading-tight md:col-span-5 md:text-5xl">“{profile.statement}”</p>
        <p className="h-fade max-w-md text-sm leading-relaxed text-bone/70 md:col-span-4">{profile.summary.split(".")[0]}. Over 3 years of crafting design and motion for brands.</p>
        <div className="h-fade flex flex-wrap gap-3 md:col-span-3 md:justify-end">
          <Magnetic><button data-cursor="" onClick={() => scrollToId("#work")} className="rounded-full bg-acid px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink">Explore my work ↓</button></Magnetic>
          <Magnetic><button onClick={() => scrollToId("#contact")} className="rounded-full border border-bone/40 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:bg-bone hover:text-ink">Let’s collaborate</button></Magnetic>
        </div>
      </div>
      <div className="relative z-10 -mx-5 mt-12 overflow-hidden border-y border-bone/15 py-3 md:-mx-10" aria-hidden>
        <div className="marquee font-mono text-xs uppercase tracking-[0.3em] text-bone/60">
          {[...disciplines, ...disciplines, ...disciplines, ...disciplines].map((d, i) => <span key={i} className="px-6">{d} <span className="text-acid">✦</span></span>)}
        </div>
      </div>
    </section>
  );
}

