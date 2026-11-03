"use client";
import { useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Reel from "@/components/Reel";
import Exhibition from "@/components/Exhibition";
import About from "@/components/About";
import Toolkit from "@/components/Toolkit";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // Re-scan on DOM changes (filters) so newly mounted tiles also reveal.
      const seen = new WeakSet<Element>();
      const scan = () => document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (seen.has(el)) return; seen.add(el);
        gsap.fromTo(el, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" } });
      });
      scan();
      const mo = new MutationObserver(scan); mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Preloader onDone={done} />
      <SmoothScroll /><Cursor /><Nav />
      <main>
        <Hero ready={ready} /><Work /><Reel /><Exhibition /><About /><Toolkit /><Journey /><Contact />
      </main>
      <Footer />
    </>
  );
}
