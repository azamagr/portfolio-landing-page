import { navLinks } from "../data.js";

export function Navbar() {
  const links = navLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");

  return `
    <header class="navbar" id="navbar">
      <div class="container">
        <a href="#top" class="brand"><span class="dot"></span>Relay</a>
        <ul class="nav-links">${links}</ul>
        <div class="nav-actions">
          <a href="#pricing" class="btn-ghost">Sign in</a>
          <a href="#pricing" class="btn-solid">Start free</a>
        </div>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <ul>${links}<li><a href="#pricing" class="btn-solid">Start free</a></li></ul>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  });

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}
