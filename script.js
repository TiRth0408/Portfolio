// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar fade-in
gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1
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

 document.getElementById("contactForm").addEventListener("submit", function(){
        setTimeout(function(){
            window.location.href = "index.html"; // your home page
        }, 1000); // 1 second delay to allow form submission
    });

document.getElementById('downloadPdfBtn').addEventListener('click', function (e) {
    e.preventDefault();
    var cvContent = document.getElementById('cvContent');
    cvContent.classList.remove('d-none');
    setTimeout(function() {
        html2pdf()
            .set({
                margin: 0.5,
                filename: 'Tirth Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            })
            .from(cvContent)
            .save();
    }, 0);
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
document.getElementById("downloadPdfBtn").addEventListener("click", function(e) {
        e.preventDefault();
        window.open("/pdf/Tirth_Resume.pdf", "_blank");
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
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
});