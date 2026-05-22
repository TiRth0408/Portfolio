import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <ScrollReveal delay={0}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Contact</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Let’s build something that feels sharp, modern, and memorable.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal delay={200}>
            <div className="contact-info-card h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Contact Information</p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-200">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Address</p>
                    <p className="mt-1 text-base text-white">A-14 Maruti Nandan Society</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-200">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Email</p>
                    <p className="mt-1 text-base text-white">ttirth41@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/15 text-violet-200">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Phone</p>
                    <p className="mt-1 text-base text-white">+91 7046417487</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="contact-form-card rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow backdrop-blur-xl md:p-8">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Send a Message</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">Tell me about your next project.</h3>
              </div>

              <form 
                method="POST" 
                action="https://formsubmit.co/ttirth41@gmail.com" 
                className="space-y-5"
                onSubmit={() => setIsSubmitting(true)}
              >
                <input type="hidden" name="_next" value="https://tirth0408.github.io/Portfolio/?success=true" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact from Portfolio Website" />

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">Your Name</span>
                    <input type="text" name="name" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300/70 focus:bg-white/10" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-300">Your Email</span>
                    <input type="email" name="email" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300/70 focus:bg-white/10" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Subject</span>
                  <input type="text" name="subject" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300/70 focus:bg-white/10" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                  <textarea name="message" rows="6" required className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300/70 focus:bg-white/10"></textarea>
                </label>

                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 to-sky-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-float transition duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}