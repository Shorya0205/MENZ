'use strict';



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

// Section entrance animation on scroll
function revealOnScroll() {
  const sections = document.querySelectorAll('.section, .hero, .service, .category, .product, .blog, .newsletter, .footer');
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// 1. Staggered Card Animations
function revealStaggered() {
  const groups = [
    document.querySelectorAll('.product-list > li'),
    document.querySelectorAll('.service-list > li'),
    document.querySelectorAll('.category-list > li'),
    document.querySelectorAll('.blog-card')
  ];
  groups.forEach(group => {
    let delay = 0;
    group.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => card.classList.add('visible'), delay);
        delay += 120;
      }
    });
  });
}
window.addEventListener('scroll', revealStaggered);
window.addEventListener('DOMContentLoaded', revealStaggered);

// 2. Button Ripple Effect
function addRippleEffect(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  circle.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
  circle.style.left = (e.clientX - rect.left - rect.width/2) + rect.width/2 + 'px';
  circle.style.top = (e.clientY - rect.top - rect.height/2) + rect.height/2 + 'px';
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}
document.querySelectorAll('.btn, .header-action-btn, .cart-btn').forEach(btn => {
  btn.addEventListener('click', addRippleEffect);
});

// 5. Scroll-to-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollToTopBtn';
scrollBtn.innerHTML = '<ion-icon name="chevron-up"></ion-icon>';
document.body.appendChild(scrollBtn);
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 6. Parallax Hero Image
const heroImg = document.querySelector('.hero .img-cover, .hero-parallax');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.15;
    heroImg.style.transform = `translateY(${offset}px)`;
  });
}