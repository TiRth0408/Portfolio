function initHome() {
    gsap.from("#home h1", { x: -100, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from("#home p", { x: -100, opacity: 0, duration: 1, delay: 0.8 });
    gsap.from("#home img", { x: 100, opacity: 0, duration: 1, delay: 1 });
}
