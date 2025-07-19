// Create floating particles
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// SRS tab functionality
document.querySelectorAll(".srs-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".srs-tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".srs-panel")
      .forEach((p) => p.classList.remove("active"));

    this.classList.add("active");

    const targetPanel = document.getElementById(this.dataset.tab);
    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

// Enhanced navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.borderBottom = "1px solid rgba(100, 255, 218, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.borderBottom = "1px solid rgba(100, 255, 218, 0.2)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Section highlighting in navigation - Scroll position based
function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
  const scrollPosition = window.scrollY + 150; // Offset for navbar

  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const id = currentSection.getAttribute("id");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

// Update navigation on scroll
window.addEventListener("scroll", updateActiveNavigation);

// Initial call
updateActiveNavigation();
