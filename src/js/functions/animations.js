import { gsap } from "gsap";

export const animationHeroText = () => {
  const title = document.querySelector('[data-title]'),
        description = document.querySelector('[data-description]'),
        freeSectionContent = document.querySelector('[data-free-content]'),
        games = document.querySelector('[data-games]');

  gsap.from(title, {
    duration: 1.5,
    delay: 1,
    opacity: 0,
    stagger: 0.02,
    y: 50,
    ease:"power1.out"
  });

  gsap.from(description, {
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.02,
    y: 100,
    ease:"power1.out"
  });

  gsap.from(freeSectionContent, {
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.05,
    y: 150,
    ease:"power3.out"
  });

  gsap.from(games, {
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.05,
    y: 150,
    ease:"power4.out"
  });
};
