"use client";
import Magnetic from "./Magnetic";
import { profile } from "@/lib/content";

export default function Contact() {
  const socials = profile.socials.filter((s) => s.href);
  return (
    <section id="contact" className="relative overflow-hidden bg-acid px-5 py-28 text-ink md:px-10">
      <p className="font-mono text-xs uppercase tracking-widest">(04) Contact</p>
      <h2 data-reveal className="mt-4 text-[15vw] font-extrabold uppercase leading-[0.82] tracking-tighter md:text-[11vw]">Have an idea?<br /><span className="font-serif font-normal normal-case italic">Let’s make it unforgettable.</span></h2>
      <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Magnetic strength={0.5}>
          <a href={`mailto:${profile.email}`} data-cursor="" className="flex h-40 w-40 items-center justify-center rounded-full bg-ink text-center text-sm font-bold uppercase text-acid md:h-56 md:w-56 md:text-lg">Say<br />hello ↗</a>
        </Magnetic>
        <div className="space-y-3 font-mono text-sm uppercase tracking-widest">
          <p><a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><a className="underline underline-offset-4" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></p>
          {socials.length > 0 && <p className="flex gap-5">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="underline underline-offset-4">{s.label}</a>)}</p>}
        </div>
      </div>
    </section>
  );
}
