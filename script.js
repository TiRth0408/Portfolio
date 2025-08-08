// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar fade-in
gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1
});

// Cursor Effect

const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', function (e) {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
    cursorBlur.style.left = e.clientX + 'px';
});


// Home Section
gsap.from("#home h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from("#home p", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from("#home img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 1
});

// Skills cards
gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: ".skill-card",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Education cards
gsap.from(".education-card", {
    scrollTrigger: {
        trigger: ".education-card",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Refresh the link when submit the form
document.getElementById("contactForm").addEventListener("submit", function () {
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000);
});

// Show CV Button Toggle
const showCvBtn = document.getElementById("showCvBtn");
const cvContent = document.getElementById("cvContent");

showCvBtn.addEventListener("click", () => {
    cvContent.classList.toggle("d-none");
    if (cvContent.classList.contains("d-none")) {
        showCvBtn.textContent = "Show My CV";
    } else {
        showCvBtn.textContent = "Hide My CV";
    }
});

// Download Resume PDF
document.getElementById("downloadPdfBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://github.com/TiRth0408/Portfolio/blob/main/pdf/Tirth_Resume.pdf", "_blank");
});

// Contact Section
gsap.from("#contact h2", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from(".contact-info-card, .contact-form-card", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

// Back to Top Button functionality

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

function handleSubmit(event) {
    event.preventDefault();

    // You can add basic validation if needed here

    alert("Thank you! Your message has been sent.");

    // Now submit the form manually
    event.target.submit();
    return true;
}