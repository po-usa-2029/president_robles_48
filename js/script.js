// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

