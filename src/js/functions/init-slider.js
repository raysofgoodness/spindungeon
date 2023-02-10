import Swiper from 'swiper';


export const initSlider = () => {
  let swiper;

  const checkScreenWidth = () => {
    if (window.innerWidth >= 720) {
       swiper = new Swiper('.swiper', {
         slidesPerView: 'auto',
         spaceBetween: 20,
       });
    } else {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    }
  };

  window.addEventListener('resize', checkScreenWidth);
  window.addEventListener('load', checkScreenWidth);
};
