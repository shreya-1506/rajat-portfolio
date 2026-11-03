"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (window.matchMedia("(hover:none)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(t?.dataset.cursor ?? "");
      document.documentElement.style.setProperty("--mx", x + "px");
      document.documentElement.style.setProperty("--my", y + "px");
    };
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move); raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      {/* mouse-following spotlight */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
        style={{ background: "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), rgba(212,255,58,.07), transparent 60%)" }} />
      <div ref={dot} aria-hidden className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-acid mix-blend-difference transition-[width,height] duration-300"
        style={{ width: label ? 96 : 14, height: label ? 96 : 14 }}>
        {label && <span className="font-mono text-[10px] uppercase tracking-widest text-black mix-blend-normal">{label}</span>}
      </div>
    </>
  );
}
