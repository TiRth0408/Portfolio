import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-glow backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">Tirth Kadivar</p>
          <p className="mt-1 text-sm text-slate-400">© 2026 All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/tirthu_48/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tirth-kadivar-362391240/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/TiRth0408"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
