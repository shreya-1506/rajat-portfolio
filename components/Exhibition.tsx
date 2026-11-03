"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { images } from "@/lib/content";

// Horizontal exhibition: pinned + scrubbed on desktop, native swipe on mobile.
export default function Exhibition() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:768px) and (prefers-reduced-motion: no-preference)", () => {
      const dist = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: wrap.current, pin: true, scrub: 0.6, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <section ref={wrap} className="relative overflow-hidden bg-coal py-16 md:flex md:h-screen md:items-center md:py-0" aria-label="Social design exhibition">
      <div ref={track} className="no-scrollbar flex w-max items-center gap-10 overflow-x-auto px-5 md:overflow-visible md:px-[8vw]">
        <div className="w-[70vw] shrink-0 md:w-[32vw]">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">The exhibition</p>
          <h2 className="mt-3 text-[14vw] font-extrabold uppercase leading-[0.82] tracking-tighter md:text-[7vw]">Social<br />design<br /><span className="font-serif font-normal normal-case italic outline">walk-through →</span></h2>
        </div>
        {images.map((p, i) => (
          <figure key={p.id} className={`shrink-0 ${i % 2 ? "md:mt-24" : "md:-mt-24"}`}>
            <div className={`relative overflow-hidden ${p.ratio === "portrait" ? "h-[60vh] w-[48vw] md:h-[62vh] md:w-[28vw]" : "h-[56vw] w-[72vw] md:h-[46vh] md:w-[46vh]"}`}>
              <Image src={p.src} alt={p.title} fill sizes="(max-width:768px) 72vw, 40vh" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-bone/60"><span>Fig. {String(i + 1).padStart(2, "0")}</span><span>{p.title}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
