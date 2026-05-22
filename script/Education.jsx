import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <ScrollReveal delay={0}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Education</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              The academic path behind my technical foundation.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { 
              period: "2018 - 2020", 
              icon: "fa-school", 
              title: "High School", 
              location: "Vidyanagar High School", 
              desc: "Built discipline, communication, and consistency while participating in academics and extracurricular activities.", 
              colorClasses: "bg-brand-400/15 text-brand-200" 
            },
            { 
              period: "2020 - 2023", 
              icon: "fa-university", 
              title: "Bachelor's Degree", 
              location: "LJ Campus", 
              desc: "Completed BCA studies with a strong focus on web development, practical coding, and project-based learning.", 
              colorClasses: "bg-sky-400/15 text-sky-200" 
            },
            { 
              period: "2024 - 2026", 
              icon: "fa-graduation-cap", 
              title: "Master's Program", 
              location: "RB Institute of Management", 
              desc: "Advanced studies in modern web technologies with deeper focus on front-end engineering and current frameworks.", 
              colorClasses: "bg-violet-400/15 text-violet-200" 
            }
          ].map((edu, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <article className="education-card h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-6 shadow-glow backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${edu.colorClasses} text-2xl`}>
                    <i className={`fas ${edu.icon}`}></i>
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{edu.title}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  {edu.location}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {edu.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}