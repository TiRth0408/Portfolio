var crsr = document.querySelector("#cursor")
var blu = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blu.style.left = dets.x - 250 + "px"
    blu.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"

    })
})


document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show CV button functionality
    const showCvBtn = document.getElementById('showCvBtn');
    const cvContent = document.getElementById('cvContent');

    if (showCvBtn && cvContent) {
        showCvBtn.addEventListener('click', function () {
            cvContent.classList.toggle('show');
            this.textContent = cvContent.classList.contains('show') ? 'Hide My CV' : 'Show My CV';
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log({ name, email, subject, message });

            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Wait for everything to load before animating
    window.addEventListener('load', function () {
        // Animate navbar
        gsap.from(".navbar", {
            duration: 1,
            y: -100,
            opacity: 0,
            ease: "power3.out"
        });

        // Hero section animations
        const homeTimeline = gsap.timeline();
        homeTimeline
            .from("#home h1", {
                duration: 0.8,
                x: -50,
                opacity: 0,
                ease: "power3.out"
            })
            .from("#home p", {
                duration: 0.8,
                x: -50,
                opacity: 0,
                ease: "power3.out"
            }, "-=0.5")
            .from("#home .btn", {
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.5")
            .from("#home img", {
                duration: 1,
                scale: 0.8,
                opacity: 0,
                ease: "back.out(1.7)"
            }, "-=0.5");

        // Skills section
        gsap.utils.toArray("#skills .card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                delay: i * 0.1,
                ease: "power3.out"
            });
        });

        // Education section
        gsap.utils.toArray("#education .card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: "#education",
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                x: i % 2 === 0 ? -50 : 50,
                opacity: 0,
                delay: i * 0.1,
                ease: "power3.out"
            });
        });

        // CV section
        gsap.from("#cv h2, #cv p", {
            scrollTrigger: {
                trigger: "#cv",
                start: "top 75%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: -30,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Contact section
        gsap.from("#contact .card", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 75%",
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });
});