import { gsap } from "gsap";

export const animateHeader = () => {
  const header = document.querySelector('[data-header]');

  gsap.from(header, {
    duration: 2.5,
    opacity: 0,
    stagger: 0.05,
    y: 50,
    ease:"expo.inOut",
  })

  document.addEventListener('scroll', (e) => {
    if (window.scrollY > 100) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  });
};
