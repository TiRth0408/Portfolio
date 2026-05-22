import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div className="bg-ink font-sans text-white antialiased selection:bg-brand-400/30 selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero"></div>
        <div className="absolute left-[-10rem] top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"></div>
        <div className="absolute right-[-8rem] top-[28rem] h-80 w-80 rounded-full bg-sky-400/15 blur-3xl"></div>
        <div className="absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <Navbar />
      
      <main className="relative">
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}