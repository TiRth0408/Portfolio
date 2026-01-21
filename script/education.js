function initEducation() {
  gsap.utils.toArray(".education-card").forEach((card, index) => {

    // Direction logic
    let fromVars = {
      opacity: 0
    };

    if (index === 0) {
      fromVars.x = -60; // 1st card from LEFT
    } else if (index === 1) {
      fromVars.x = 60;  // 2nd card from RIGHT
    } else if (index === 2) {
      fromVars.y = -60; // 3rd card from TOP
    }

    gsap.fromTo(
      card,
      fromVars,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false, // 🔑 important
        scrollTrigger: {
          trigger: card,              // individual trigger
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });
}