function initCv() {
    const showCvBtn = document.getElementById("showCvBtn");
    const cvContent = document.getElementById("cvContent");
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");

    if (!showCvBtn || !cvContent || !downloadPdfBtn) return;

    showCvBtn.addEventListener("click", () => {
        cvContent.classList.toggle("d-none");

        showCvBtn.textContent = cvContent.classList.contains("d-none")
            ? "Show My CV"
            : "Hide My CV";

        if (!cvContent.classList.contains("d-none")) {
            gsap.from(cvContent, { opacity: 0, y: 50, duration: 0.6 });
        }
    });

    // Correct GitHub Pages PDF path
    const pdfPath = window.location.hostname.includes("github.io")
        ? "pdf/Tirth_Resume.pdf"
        : "./pdf/Tirth_Resume.pdf";

    downloadPdfBtn.href = pdfPath;
}
