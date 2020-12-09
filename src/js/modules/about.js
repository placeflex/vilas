import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const aboutSliderWrapper = () => {
  new Swiper('.about-slider', {
    pagination: {
      el: '.swiper-pagination',
    },
    noSwiping: false,
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev',
    },
  });
};

export default aboutSliderWrapper;
