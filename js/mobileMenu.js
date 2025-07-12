// Mobile Menu functionality
export function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  if (!mobileMenuToggle || !nav) return;

  let isMenuOpen = false;

  mobileMenuToggle.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    // Toggle menu visibility
    if (isMenuOpen) {
      nav.classList.add("active");
      mobileMenuToggle.classList.add("active");

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      nav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");

      // Restore body scroll
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      isMenuOpen &&
      !mobileMenuToggle.contains(e.target) &&
      !nav.contains(e.target)
    ) {
      mobileMenuToggle.click();
    }
  });

  // Close menu when pressing Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });
}
