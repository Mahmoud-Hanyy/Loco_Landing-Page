// ── STICKY NAV ──
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => observer.observe(el));
