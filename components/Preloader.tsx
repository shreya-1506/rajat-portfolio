"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const o = { v: 0 };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline({ onComplete: () => { setGone(true); } });
    tl.to(o, { v: 100, duration: reduce ? 0.2 : 1.8, ease: "power2.inOut", onUpdate: () => setN(Math.round(o.v)) })
      .to(".pre-word", { yPercent: -110, duration: 0.6, ease: "power3.in" }, "+=0.1")
      .add(() => onDone(), "-=0.2")
      .to(".pre", { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "-=0.3");
    return () => { tl.kill(); };
  }, [onDone]);
  if (gone) return null;
  return (
    <div className="pre fixed inset-0 z-[200] flex flex-col justify-between bg-acid p-6 text-ink md:p-10" role="status" aria-label="Loading">
      <div className="flex justify-between font-mono text-xs uppercase tracking-widest"><span>Rajat Nalawade</span><span>Portfolio {new Date().getFullYear()}</span></div>
      <div className="overflow-hidden"><div className="pre-word text-[22vw] font-extrabold leading-[0.8] tracking-tighter">{String(n).padStart(2, "0")}<span className="text-[8vw]">%</span></div></div>
      <div className="h-1 w-full bg-ink/20"><div className="h-full bg-ink" style={{ width: n + "%" }} /></div>
    </div>
  );
}
