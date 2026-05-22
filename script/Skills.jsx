import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal delay={0}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
                Skills
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                The tools I use to build clean, fast, and engaging products.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              I work across design-minded front-end development, component-based UI, and interactive websites that need both structure and personality.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {/* HTML5 */}
          <ScrollReveal delay={300}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-2xl text-orange-300 transition duration-300 group-hover:scale-110">
                <i className="fab fa-html5"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">HTML5</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Semantic structure, accessible layout, and solid content foundations for every page.</p>
            </article>
          </ScrollReveal>

          {/* Tailwind CSS */}
          <ScrollReveal delay={400}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 text-2xl text-sky-300 transition duration-300 group-hover:scale-110">
                <i className="fab fa-css3-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">Tailwind CSS</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Utility-first styling for faster iteration, cleaner structure, and consistent visual systems.</p>
            </article>
          </ScrollReveal>

          {/* JavaScript */}
          <ScrollReveal delay={500}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/15 text-2xl text-yellow-300 transition duration-300 group-hover:scale-110">
                <i className="fab fa-js"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">JavaScript</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Interactive features, DOM control, and animation logic that make interfaces feel alive.</p>
            </article>
          </ScrollReveal>

          {/* GSAP Motion */}
          <ScrollReveal delay={600}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-2xl text-cyan-300 transition duration-300 group-hover:scale-110">
                <i className="fas fa-wand-magic-sparkles"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">GSAP Motion</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Scroll-triggered transitions, parallax depth, and refined motion tuned for smoother storytelling.</p>
            </article>
          </ScrollReveal>

          {/* React */}
          <ScrollReveal delay={700}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl text-cyan-200 transition duration-300 group-hover:scale-110">
                <i className="fab fa-react"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">React</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Composable interfaces for projects that need reusable components and a modern app structure.</p>
            </article>
          </ScrollReveal>

          {/* Database & Backend */}
          <ScrollReveal delay={800}>
            <article className="skill-card group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-2xl text-emerald-300 transition duration-300 group-hover:scale-110">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">Database & Backend</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Working knowledge of PHP, MySQL, and Firebase for complete project workflows.</p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}