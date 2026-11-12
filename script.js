
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Highlight active navigation section
const sections = document.querySelectorAll(
  "main section[id], article[id]"
);

const navItems = navLinks.querySelectorAll("a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    navItems.forEach(item => {
      item.classList.toggle(
        "active",
        item.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, {
  rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();





