"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    (window as any).__lenis = lenis;
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return null;
}
export const scrollToId = (id: string) => {
  const l = (typeof window !== "undefined" ? (window as any).__lenis : null);
  const el = document.querySelector(id);
  if (!el) return;
  l ? l.scrollTo(el, { offset: 0, duration: 1.4 }) : el.scrollIntoView({ behavior: "smooth" });
};
