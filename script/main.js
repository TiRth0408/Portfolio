// GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Loader Function
function loadSection(id, file, callback) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error("Failed to load " + file);
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback(); // ✅ init section-specific JS
        })
        .catch(err => console.error(err));
}

// Load all sections
document.addEventListener("DOMContentLoaded", () => {
    loadSection("home", "sections/home.html", initHome);
    loadSection("skills", "sections/skills.html", initSkills);
    loadSection("education", "sections/education.html", initEducation);
    loadSection("cv", "sections/cv.html", initCv);
    loadSection("contact", "sections/contact.html", initContact);
    loadSection("footer", "sections/footer.html");

    initBackToTop(); // back to top always runs
});

function initNavbarBrandAnimation() {
  const el = document.getElementById("brand-typewriter");
  if (!el) return;

  const text = "Tirth Kadivar";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 200); // typing speed
    }
  }

  typeWriter();
}

document.addEventListener("DOMContentLoaded", initNavbarBrandAnimation);