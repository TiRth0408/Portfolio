function initHome() {
  // ✅ SAFETY: force visibility before animation
  gsap.set("#home h1, #home p, .home-btn a, #home img", {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    clearProps: "transform"
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power4.out"
    }
  });

  // Entrance animations
  tl.from("#home h1", {
    y: 80,
    opacity: 0
  })
  .from("#home p", {
    y: 50,
    opacity: 0
  }, "-=0.6")
  .from(".home-btn a", {
    y: 30,
    opacity: 0,
    stagger: 0.2
  }, "-=0.4")
  .from("#home img", {
    x: 120,
    opacity: 0,
    scale: 0.9
  }, "-=0.6");

  // Floating image animation
  gsap.to("#home img", {
    y: 14,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  /* 🔁 TEXT CHANGE LOGIC (ADDED ONLY) */
  const textEl = document.querySelector("#home p");
  if (!textEl) return;

  const texts = [
    "I'm a passionate web designer and developer...",
    "I build modern, responsive websites.",
    "Focused on clean UI and smooth user experience.",
    "Turning ideas into beautiful digital products."
  ];

  let index = 0;

  setInterval(() => {
    gsap.to(textEl, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      onComplete: () => {
        index = (index + 1) % texts.length;
        textEl.innerHTML = `<b>${texts[index]}</b>`;

        gsap.fromTo(
          textEl,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    });
  }, 3000);
}