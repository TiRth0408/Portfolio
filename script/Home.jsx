import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const lines = [
  "I design interfaces that feel clean, responsive, and intentional.",
  "I build front-end experiences with smoother motion visual rhythm.",
  "I care about UI that looks premium and still stays easy to use.",
  "I turn simple portfolio pages into experiences with more personality."
];

export default function Home() {
  const [copy, setCopy] = useState(lines[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % lines.length;
        setCopy(lines[index]);
        setFade(true);
      }, 350); // wait for fade out
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">
                <span className="h-2 w-2 rounded-full bg-brand-300"></span>
                Front-end Developer
              </span>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Building polished web experiences with
                <span className="bg-gradient-to-r from-brand-300 via-white to-sky-300 bg-clip-text text-transparent"> modern UI and fluid motion</span>.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className={`max-w-2xl text-lg leading-8 text-slate-300 transition-all duration-300 ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                {copy}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400} className="flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 to-sky-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-float transition duration-300 hover:-translate-y-1">Start a Project</a>
            <a href="#resume" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">Explore Resume</a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={500} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl"></div>
          <div className="absolute -right-6 bottom-12 h-36 w-36 rounded-full bg-brand-400/20 blur-3xl"></div>

          <style>
            {`
              @keyframes custom-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              .animate-custom-float {
                animation: custom-float 6s ease-in-out infinite;
              }
            `}
          </style>

          {/* Note: I've added a simple CSS floating effect to the parent container wrapper */}
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl animate-custom-float">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
              <img src="/images/HomeAvtar.png" alt="Portrait of Tirth Kadivar" className="h-full w-full object-cover transition-transform duration-[5s] hover:scale-110" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Now Building</p>
                <p className="mt-2 text-sm font-semibold text-white">Responsive interfaces with modern animation.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Based In</p>
                <p className="mt-2 text-sm font-semibold text-white">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}