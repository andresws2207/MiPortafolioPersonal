// ============================================================
// AÑO DINÁMICO EN EL FOOTER
// ============================================================
document.getElementById('anio').textContent = new Date().getFullYear();


// ============================================================
// ANIMACIÓN AL HACER SCROLL (Intersection Observer)
// ============================================================
const revealEls = document.querySelectorAll(
  '.section__label, .section__title, .about__grid, .chips__wrapper, .projects__grid, .contact__desc, .contact__links, .project-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


// ============================================================
// HEADER — OCULTAR AL BAJAR, MOSTRAR AL SUBIR
// ============================================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 80) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
});

header.style.transition = 'transform 0.3s ease';


// ============================================================
// SMOOTH SCROLL PARA LINKS DEL NAV
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});