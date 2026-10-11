
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  primaryNav.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

function openMenu() {
  primaryNav.classList.add("open");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close the mobile menu after selecting a navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// Close the menu when clicking outside the navbar
document.addEventListener("click", (event) => {
  if (
    !primaryNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

// Reset the mobile menu when switching to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("footer-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
