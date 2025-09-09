function initEducation() {
    gsap.from(".education-card", {
        scrollTrigger: { trigger: ".education-card", start: "top 80%" },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2
    });
}
