function initSkills() {
  gsap.utils.toArray(".skill-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        x: index % 2 === 0 ? -60 : 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false, // 🔑 VERY IMPORTANT FIX
        scrollTrigger: {
          trigger: card,
          start: "top 85%",     // jab card screen me aaye
          end: "bottom 15%",    // jab card poori tarah bahar jaye
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });
}   