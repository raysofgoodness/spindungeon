export const lazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const preloadImage = (img) => {
      const src = img.getAttribute('data-src');
      if (!src) return;

      img.src = src;
      img.removeAttribute('data-src');
    };

    const onIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          preloadImage(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, options);
      images.forEach(img => {
      observer.observe(img);
    });
};
