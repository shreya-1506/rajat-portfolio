import { profile, duties, disciplines } from "@/lib/content";
export default function About() {
  return (
    <section id="about" className="relative px-5 py-32 md:px-10">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">(01) About</p>
          <div data-reveal className="relative mt-6 aspect-[3/4] w-full max-w-sm overflow-hidden rounded-t-full bg-coal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/web/rajat.png" alt="Rajat Nalawade" loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 data-reveal className="font-serif text-4xl italic leading-[1.05] md:text-7xl">Designing with <span className="text-acid">deadlines</span> in one hand and curiosity in the other.</h2>
          <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/75">{profile.summary}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div data-reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest text-bone/50">Design philosophy</h3>
              <p className="mt-3 text-bone/80">Typography, composition, layout and colour come first — fundamentals drive every frame, whether it is a poster, a reel or a CGI sequence.</p>
            </div>
            <div data-reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest text-bone/50">What I do day to day</h3>
              <ul className="mt-3 space-y-2 text-sm text-bone/80">{duties.map((d) => <li key={d} className="flex gap-3"><span className="text-acid">→</span>{d}</li>)}</ul>
            </div>
          </div>
          <div data-reveal className="mt-10 flex flex-wrap gap-2">{disciplines.map((d) => <span key={d} className="rounded-full border border-bone/25 px-4 py-2 font-mono text-xs uppercase tracking-widest">{d}</span>)}</div>
          <p data-reveal className="mt-8 font-mono text-xs uppercase tracking-widest text-bone/50">Languages — {profile.languages.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
