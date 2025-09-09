function initContact() {
    // GSAP animations
    gsap.from("#contact h2", {
        scrollTrigger: { trigger: "#contact", start: "top 80%" },
        y: 50, opacity: 0, duration: 1
    });

    gsap.from(".contact-info-card, .contact-form-card", {
        scrollTrigger: { trigger: "#contact", start: "top 80%" },
        y: 50, opacity: 0, duration: 1, stagger: 0.3
    });

    // Contact Form redirect
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        });
    }
}
