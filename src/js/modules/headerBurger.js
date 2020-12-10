import $ from 'jquery';

const headerBurger = () => {
  let burger = $('.js-burger');
  let nav = $('.js-nav');
  let body = $('body');
  burger.on('click', () => {
    nav.toggleClass('active');
    body.toggleClass('freez');
  });
};

export default headerBurger;
