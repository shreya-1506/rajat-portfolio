import { experience } from "@/lib/content";
export default function Journey() {
  return (
    <section id="journey" className="px-5 py-32 md:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-acid">(03) Journey</p>
      <h2 data-reveal className="mt-4 text-[14vw] font-extrabold uppercase leading-[0.82] tracking-tighter md:text-[9vw]">Experience <span className="font-serif font-normal normal-case italic outline">&amp; education</span></h2>
      <ol className="mt-16 md:ml-[20vw]">
        {experience.map((e) => (
          <li key={e.title + e.years} data-reveal className="group grid gap-2 border-t border-bone/20 py-8 transition-colors hover:bg-coal md:grid-cols-[200px_1fr_auto] md:items-baseline md:px-4">
            <span className="font-mono text-sm text-acid">{e.years}</span>
            <div><h3 className="text-2xl font-bold uppercase tracking-tight md:text-4xl">{e.title}</h3><p className="mt-1 font-serif text-xl italic text-bone/60">{e.org}</p></div>
            <span className="font-mono text-xs uppercase tracking-widest text-bone/40">{e.kind}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
