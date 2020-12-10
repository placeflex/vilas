import $ from 'jquery';

let regularValidation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validationFooterForm = () => {
  let footerForm = $('.footer-form');
  let footerFormBtn = footerForm.find('.js-btn-submit');
  let footerFormInput = footerForm.find('input[type="email"]');

  footerFormInput.on('input', function () {
    let value = $(this).val();
    if (regularValidation.test(value)) {
      footerFormBtn.removeAttr('disabled');
    } else {
      footerFormBtn.attr('disabled', true);
    }
  });
};

export default validationFooterForm;
