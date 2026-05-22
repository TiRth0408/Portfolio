import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [brandText, setBrandText] = useState("");

  useEffect(() => {
    const text = "Tirth Kadivar";
    let i = 0;
    const interval = setInterval(() => {
      setBrandText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <nav className="mx-auto mt-4 flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-glow backdrop-blur-xl md:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-sky-400 text-base font-bold text-slate-950 shadow-float">
            T K
          </span>
          <div className="flex min-w-0 flex-col">
            <p className="truncate font-display text-[10px] uppercase tracking-[0.2em] text-mist/70 sm:text-sm sm:tracking-[0.32em]">PORTFOLIO</p>
            <p className="truncate font-display text-sm font-semibold text-white sm:text-base">{brandText}</p>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand-300/60 hover:bg-white/10 lg:hidden"
          aria-label="Open navigation"
        >
          <i className={`fas fa-bars absolute text-lg transition-all duration-300 ease-out ${isOpen ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}></i>
          <i className={`fas fa-xmark absolute text-lg transition-all duration-300 ease-out ${isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"}`}></i>
        </button>

        <div
          className={`absolute left-3 right-3 top-[calc(100%+0.75rem)] flex flex-wrap justify-center gap-2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-glow backdrop-blur-xl transition-all duration-300 ease-out origin-top lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:visible lg:opacity-100 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto
          ${isOpen ? "visible opacity-100 translate-y-0 scale-100 pointer-events-auto" : "invisible opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
        >
          {["Home", "Skills", "Projects", "Education", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              onClick={() => setIsOpen(false)}
              className="nav-link rounded-full px-4 py-2 text-sm font-semibold text-mist transition hover:bg-white/10 hover:text-white"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}