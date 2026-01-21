function initCv() {
  const showCvBtn = document.getElementById("showCvBtn");
  const cvContent = document.getElementById("cvContent");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");

  if (!showCvBtn || !cvContent || !downloadPdfBtn) return;

  /* --------------------------------
     SAFETY RESET (VERY IMPORTANT)
  -------------------------------- */
  gsap.set("#cv h2, #cv .section-subtitle, #showCvBtn", {
    opacity: 1,
    y: 0,
    clearProps: "transform"
  });

  /* --------------------------------
     SHOW / HIDE CV (CLICK)
  -------------------------------- */
  showCvBtn.addEventListener("click", () => {
    cvContent.classList.toggle("d-none");

    showCvBtn.textContent = cvContent.classList.contains("d-none")
      ? "Show My CV"
      : "Hide My CV";

    if (!cvContent.classList.contains("d-none")) {
      gsap.fromTo(
        cvContent,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  });

  /* --------------------------------
     SCROLL ANIMATION – HEADER & BUTTON
  -------------------------------- */
  gsap.from("#cv h2, #cv .section-subtitle, #showCvBtn", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#cv",
      start: "top 70%",
      toggleActions: "play reverse play reverse"
    }
  });

  /* --------------------------------
     SCROLL ANIMATION – CV CONTENT
  -------------------------------- */
  gsap.fromTo(
    "#cvContent",
    { y: 0, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#cvContent",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  /* --------------------------------
     DOWNLOAD PDF PATH
  -------------------------------- */
  const pdfPath = window.location.hostname.includes("github.io")
    ? "pdf/Tirth_Resume.pdf"
    : "./pdf/Tirth_Resume.pdf";

  downloadPdfBtn.href = pdfPath;
}