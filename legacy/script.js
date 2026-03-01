// Scroll spy + active nav
const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
const sections = Array.from(document.querySelectorAll('main section[id]'));

function setActive(id) {
  navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
    if (visible) setActive(visible.target.id);
  },
  { rootMargin: '-25% 0px -65% 0px', threshold: [0.12, 0.2, 0.35] }
);
sections.forEach((s) => observer.observe(s));

// Year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Theme toggle (dark default)
const toggle = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  toggle?.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

applyTheme(stored || (prefersDark ? 'dark' : 'dark'));

toggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
const revealObs = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        revealObs.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObs.observe(el));
