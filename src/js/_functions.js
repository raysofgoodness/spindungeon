import { burger } from './functions/burger';
import { animationHeroText } from './functions/animations';
import { initSlider } from './functions/init-slider';
import { lazyLoad } from "./functions/lazy-load";

animationHeroText();
initSlider();

window.addEventListener('load', lazyLoad);
