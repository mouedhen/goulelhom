import { addClass, removeClass } from './classname'; // eslint-disable-line import/no-duplicates

const niam = document.getElementById('main'); // eslint-disable-line no-undef

const openModalTriggers = document.querySelectorAll('[data-modal-trigger]'); // eslint-disable-line no-undef

const closeModalTrigger = document.getElementById('closeModalTrigger'); // eslint-disable-line no-undef

if (openModalTriggers !== null) {
  for (const openModalTrigger of openModalTriggers) { // eslint-disable-line no-restricted-syntax
    openModalTrigger.addEventListener('click', () => {
      addClass(niam, 'main--off-modal');
    });
  }
}

if (closeModalTrigger !== null) {
  closeModalTrigger.addEventListener('click', () => {
    removeClass(niam, 'main--off-modal');
  });
}
