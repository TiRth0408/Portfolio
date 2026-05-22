import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal delay={0}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
                Projects
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Selected work that blends clean UI, interaction, and responsive front-end craft.
              </h2>
            </ScrollReveal>
          </div>
          {/* <ScrollReveal delay={200}>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              project card to reveal the concept, stack, and highlight details. This section is designed to feel
              more visual, more premium, and more interactive.
            </p>
          </ScrollReveal> */}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Project 1 */}
          <ScrollReveal delay={300}>
            <article className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-glow backdrop-blur-xl">
              <div className="project-surface relative h-full min-h-[430px] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 via-sky-400/10 to-slate-950"></div>
                <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl"></div>
                <div className="absolute left-4 top-24 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                      UI Case Study
                    </span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg text-brand-200">
                      <i className="fas fa-layer-group"></i>
                    </span>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                      <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                      <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="mb-3 h-3 w-24 rounded-full bg-brand-300/60"></div>
                        <div className="grid gap-2">
                          <div className="h-2 rounded-full bg-white/10"></div>
                          <div className="h-2 w-5/6 rounded-full bg-white/10"></div>
                          <div className="h-2 w-2/3 rounded-full bg-white/10"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                        <div className="h-28 rounded-2xl bg-gradient-to-br from-brand-300/20 to-sky-300/10"></div>
                        <div className="grid gap-3">
                          <div className="h-12 rounded-2xl bg-white/5"></div>
                          <div className="h-12 rounded-2xl bg-white/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-[0.32em] text-brand-100/70">E-Commerce Webisite</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Shop With Nexora</h3>
                  </div>
                </div>
              </div>

              <div className="project-overlay absolute inset-0 z-20 flex flex-col justify-end bg-black/90 p-6 translate-y-full opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-4 inline-flex w-max rounded-full border border-brand-300/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
                  See Details
                </span>
                <h3 className="text-2xl font-semibold text-white">Shop With Nexora</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A modern e-commerce site with layered visuals, strong calls to action, and smooth transitions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">HTML5</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Tailwind CSS</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">ReactJS</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-brand-100">Responsive hero &amp; smooth hover states.</p>
                  <a href="https://shopwithnexora.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-brand-400/30 hover:border-brand-300/40">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal delay={450}>
            <article className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-glow backdrop-blur-xl">
              <div className="project-surface relative h-full min-h-[430px] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-slate-950"></div>
                <div className="absolute right-0 top-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"></div>
                <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-brand-400/15 blur-3xl"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                      Dashboard UI
                    </span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg text-sky-200">
                      <i className="fas fa-chart-line"></i>
                    </span>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-4 grid grid-cols-[0.9fr_1.1fr] gap-3">
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="h-16 rounded-2xl bg-gradient-to-br from-sky-300/30 to-cyan-300/10"></div>
                        <div className="mt-3 h-2 w-4/5 rounded-full bg-white/10"></div>
                        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10"></div>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="flex h-full items-end gap-2">
                          <div className="h-12 w-full rounded-t-2xl bg-brand-300/30"></div>
                          <div className="h-20 w-full rounded-t-2xl bg-sky-300/40"></div>
                          <div className="h-16 w-full rounded-t-2xl bg-cyan-300/30"></div>
                          <div className="h-24 w-full rounded-t-2xl bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="h-24 rounded-2xl bg-white/5"></div>
                      <div className="h-24 rounded-2xl bg-white/5"></div>
                      <div className="h-24 rounded-2xl bg-white/5"></div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-[0.32em] text-sky-100/70">Data Interface</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">To-Do List Dashboard</h3>
                  </div>
                </div>
              </div>

              <div className="project-overlay absolute inset-0 z-20 flex flex-col justify-end bg-black/90 p-6 translate-y-full opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-4 inline-flex w-max rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                  See Details
                </span>
                <h3 className="text-2xl font-semibold text-white">To-Do List Dashboard</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A clean dashboard for task management with responsive grid, interactive charts, and sleek UI.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">JavaScript</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Tailwind CSS</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Responsive Grid</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-sky-100">Streamline your workflow &amp; daily productivity.</p>
                  <a href="https://t-to-dolist.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-sky-400/30 hover:border-sky-300/40">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Project 3 */}
          <ScrollReveal delay={600}>
            <article className="project-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-glow backdrop-blur-xl">
              <div className="project-surface relative h-full min-h-[430px] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 via-fuchsia-400/10 to-slate-950"></div>
                <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl"></div>
                <div className="absolute left-4 top-24 h-28 w-28 rounded-full bg-pink-400/20 blur-3xl"></div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                      Landing Page UI
                    </span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg text-violet-200">
                      <i className="fas fa-laptop-code"></i>
                    </span>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                      <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                      <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-2xl bg-white/5 p-4">
                        <div className="mb-3 h-3 w-24 rounded-full bg-violet-300/60"></div>
                        <div className="grid gap-2">
                          <div className="h-2 rounded-full bg-white/10"></div>
                          <div className="h-2 w-5/6 rounded-full bg-white/10"></div>
                          <div className="h-2 w-2/3 rounded-full bg-white/10"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                        <div className="h-28 rounded-2xl bg-gradient-to-br from-violet-300/20 to-fuchsia-300/10"></div>
                        <div className="grid gap-3">
                          <div className="h-12 rounded-2xl bg-white/5"></div>
                          <div className="h-12 rounded-2xl bg-white/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-[0.32em] text-violet-100/70">Personal Landing Page</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Landing Website</h3>
                  </div>
                </div>
              </div>

              <div className="project-overlay absolute inset-0 z-20 flex flex-col justify-end bg-black/90 p-6 translate-y-full opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-4 inline-flex w-max rounded-full border border-violet-300/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-100">
                  See Details
                </span>
                <h3 className="text-2xl font-semibold text-white">Landing Website</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  A personal landing page with smooth scrolling, strong visual hierarchy, and polished sections.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Landing Page UI</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Animation</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">Mobile Ready</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-violet-100">Responsive hero &amp; smooth hover states.</p>
                  <a href="https://clinic-landingpage.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-violet-400/30 hover:border-violet-300/40">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}