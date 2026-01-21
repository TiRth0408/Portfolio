function initContact() {

  /* --------------------------------
     SAFETY RESET
  -------------------------------- */
  gsap.set(
    "#contact h2, #contact .section-subtitle, .contact-info-card, .contact-form-card",
    { opacity: 1, y: 0, clearProps: "transform" }
  );

  /* --------------------------------
     HEADING & SUBTITLE ANIMATION
  -------------------------------- */
  gsap.from("#contact h2, #contact .section-subtitle", {
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play reverse play reverse"
    }
  });

  /* --------------------------------
     CONTACT CARDS ANIMATION
  -------------------------------- */
  gsap.utils.toArray(".contact-info-card, .contact-form-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        x: index === 0 ? -60 : 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });

  /* --------------------------------
     FORM SUBMIT – FIXED (IMPORTANT)
  -------------------------------- */
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  let isSubmitting = false; // 🔒 prevent double submit

  contactForm.addEventListener("submit", function (e) {
    if (isSubmitting) return;

    e.preventDefault(); // 🔑 STOP instant redirect
    isSubmitting = true;

    // Disable submit button
    const submitBtn = contactForm.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    // Create success message
    const successMsg = document.createElement("div");
    successMsg.textContent = "✅ Message sent successfully!";
    successMsg.style.marginTop = "15px";
    successMsg.style.color = "#14b8a6";
    successMsg.style.fontWeight = "600";
    successMsg.style.textAlign = "center";
    successMsg.style.opacity = "0";

    contactForm.appendChild(successMsg);

    // Animate success message
    gsap.fromTo(
      successMsg,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    // Submit form AFTER animation
    setTimeout(() => {
      contactForm.submit(); // ✅ FormSubmit works
    }, 800);
  });
}
