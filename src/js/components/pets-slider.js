import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';

const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  containerModifierClass: 'pets-slider-',
  slidesPerView: 1,
  initialSlide: 1,
  navigation: {
    nextEl: '.pets-slider__btn--next',
    prevEl: '.pets-slider__btn--prev',
  },
});
