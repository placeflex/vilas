// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import aboutSliderWrapper from './modules/about';
import validationFooterForm from './modules/validationFooterForm';
import getProject from './modules/getProject';
import headerBurger from './modules/headerBurger';

$(() => {
  aboutSliderWrapper();
  validationFooterForm();
  getProject();
  headerBurger();
});
