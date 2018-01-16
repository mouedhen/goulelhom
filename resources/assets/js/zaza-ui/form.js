import { addClass, removeClass } from './classname'; // eslint-disable-line import/no-duplicates

const formGroup = document.querySelectorAll('.form-group'); // eslint-disable-line no-undef

const uploadFile1 = document.getElementById('uploadFile1'); // eslint-disable-line no-undef

const uploadFile2 = document.getElementById('uploadFile2'); // eslint-disable-line no-undef

if (formGroup !== null) {
  for (const form of formGroup) { // eslint-disable-line no-restricted-syntax
    const control = form.querySelector('.form-group__control');
    control.addEventListener('focus', () => {
      addClass(form, 'form-group--focused');
    });

    control.addEventListener('blur', () => {
      removeClass(form, 'form-group--focused');
    });
  }
}

if (uploadFile1 !== null) {
  uploadFile1.addEventListener('click', () => {
    // const event = document.createEvent('HTMLEvents'); // eslint-disable-line no-undef
    // event.initEvent('click', true, false);
    // uploadFile2.dispatchEvent(event);
    uploadFile2.click();
  });
}
