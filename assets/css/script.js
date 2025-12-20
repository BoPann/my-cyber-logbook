document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  if (banner) banner.classList.add("visible");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  const aboutContent = document.querySelector(".about-content");
  if (aboutContent) observer.observe(aboutContent);
});
