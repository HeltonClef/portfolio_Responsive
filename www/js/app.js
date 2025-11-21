// Wait for device to be ready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Clement CV App is ready!");

  // Initialize animations
  initAnimations();

  // Add smooth scrolling for navigation
  initSmoothScrolling();

  // Animate skill bars on scroll
  initSkillAnimations();

  // Add click-to-call functionality
  initContactFeatures();
}

function initAnimations() {
  // Add loading animation to elements
  const elements = document.querySelectorAll(
    ".stat-card, .skill-category, .timeline-content, .project-highlight"
  );

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";

    setTimeout(() => {
      element.style.transition = "all 0.6s ease";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 200);
  });
}

function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-btn");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function initSkillAnimations() {
  const skillBars = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillLevel = entry.target;
          const width = skillLevel.style.width;
          skillLevel.style.width = "0";

          setTimeout(() => {
            skillLevel.style.width = width;
          }, 300);

          observer.unobserve(skillLevel);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
}

function initContactFeatures() {
  // Add click-to-call for phone number
  const phoneBadge = document.querySelector(".badge:nth-child(1)");
  if (phoneBadge) {
    phoneBadge.style.cursor = "pointer";
    phoneBadge.addEventListener("click", function () {
      const phoneNumber = "+2348115780276";
      if (confirm(`Call ${phoneNumber}?`)) {
        window.open(`tel:${phoneNumber}`, "_system");
      }
    });
  }

  // Add click-to-email for email badge
  const emailBadge = document.querySelector(".badge:nth-child(2)");
  if (emailBadge) {
    emailBadge.style.cursor = "pointer";
    emailBadge.addEventListener("click", function () {
      const email = "heltonclef@gmail.com";
      window.open(`mailto:${email}`, "_system");
    });
  }
}

// Add interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".stat-card, .competency-item, .language-item, .interest-item"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add typing effect to title
  const title = document.querySelector(".title");
  if (title) {
    const originalText = title.textContent;
    title.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }
});
