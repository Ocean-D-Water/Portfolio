const header = document.querySelector(".site-header");
const heroBg = document.querySelector(".hero-bg");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

// Navbar changes after scrolling
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Hero parallax
  if (heroBg) {
    heroBg.style.transform = `scale(1.03) translateY(${scrollY * 0.15}px)`;
  }

  // Active nav link
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll(
  ".section h2, .about-grid, .featured-project, .project-grid, .contact-section .eyebrow, .contact-section h2, .contact-section p, .contact-section .cta-button"
);

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealOnScroll.observe(element);
});