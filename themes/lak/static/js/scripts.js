const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("_show");
    } else {
      entry.target.classList.remove("_show");
    }
  });
});

const invisibleEls = document.querySelectorAll("._invisible");
invisibleEls.forEach((el) => observer.observe(el));
