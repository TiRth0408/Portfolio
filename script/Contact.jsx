import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Effect to automatically close the popup after 2 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1000); // 1000 milliseconds = 1 second

      // Cleanup function to clear the timer if the component unmounts or popup is manually closed
      return () => clearTimeout(timer);
    }
  }, [showPopup]); // Re-run this effect when showPopup changes

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Get your free Access Key from https://web3forms.com/
    const ACCESS_KEY = '717922be-2ccf-4f7a-bae7-e62866d72c18';

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);
    
    // This changes the display name in your inbox so it doesn't just show the raw email address
    formData.append("from_name", "New Portfolio Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true); // Show the success popup
        setStatusMessage(""); // Clear any previous error messages
        e.target.reset(); // Clears the form fields
      } else {
        console.error("Web3Forms Error:", data);
        setStatusMessage(data.message || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatusMessage("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                className="space-y-5"
                onSubmit={sendEmail}
              >
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
                
                {statusMessage && (
                  <p className="mt-4 text-sm font-medium text-brand-200">{statusMessage}</p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <>
          <style>
            {`
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
              }
            `}
          </style>
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-slate-900 p-8 text-center shadow-glow animate-custom-float">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl text-emerald-400">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Thank You!</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Your message has been sent successfully. I will get back to you soon.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}