import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Resume() {
  return (
    <section id="cv" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal delay={0}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
                Resume
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                A quick snapshot of my experience, education, and project work.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Open the full resume below to explore my background in front-end development, interface work, and hands-on project building.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl md:p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-slate-400">Highlights</p>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-400/20 text-brand-200">
                  <i className="fas fa-check text-xs"></i>
                </span>
                <p>Front-end development with HTML, JavaScript, Tailwind CSS, React, and GSAP.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-200">
                  <i className="fas fa-check text-xs"></i>
                </span>
                <p>Project experience across e-commerce, real estate, and interactive marketing pages.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-400/20 text-violet-200">
                  <i className="fas fa-check text-xs"></i>
                </span>
                <p>Strong interest in premium UI design and smoother motion systems.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="../pdf/Tirth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            See My CV
          </a>
          <a
            href="../pdf/Tirth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Tirth_Kadivar_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 to-sky-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-float transition duration-300 hover:-translate-y-1"
          >
            Download CV
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}