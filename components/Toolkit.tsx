"use client";
import { tools } from "@/lib/content";

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative overflow-hidden px-5 py-32 md:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-acid">(02) Toolkit</p>
      <h2 data-reveal className="mt-4 max-w-3xl text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter md:text-8xl">The software behind the <span className="font-serif font-normal normal-case italic text-violet">craft</span></h2>
      <ul className="mt-16 border-t border-bone/20">
        {tools.map((t, i) => (
          <li key={t.name} data-reveal className="group relative flex items-center justify-between gap-6 border-b border-bone/20 py-5 md:py-7" data-cursor="">
            <span className="absolute inset-0 origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100" />
            <span className="relative font-mono text-xs text-bone/50 transition-colors group-hover:text-ink">0{i + 1}</span>
            <span className="relative flex-1 text-4xl font-extrabold uppercase tracking-tighter transition-colors group-hover:text-ink md:text-7xl">{t.name}</span>
            <span className="relative flex gap-1" aria-label={`Proficiency ${t.level} of 6`}>
              {Array.from({ length: 6 }).map((_, k) => <span key={k} className={`h-6 w-1.5 -skew-x-12 md:h-8 ${k < t.level ? "bg-acid group-hover:bg-ink" : "bg-bone/20 group-hover:bg-ink/20"}`} />)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
