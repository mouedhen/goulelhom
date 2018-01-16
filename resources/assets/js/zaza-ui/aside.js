import {toggleClass, hasClass, addClass, removeClass} from './classname'; // eslint-disable-line import/no-duplicates, no-unused-vars

const niam = document.getElementById('main'); // eslint-disable-line no-undef

const toggleAsideTrigger = document.getElementById('toggleAsideTrigger'); // eslint-disable-line no-undef

const toggleEdisaTrigger = document.getElementById('toggleEdisaTrigger'); // eslint-disable-line no-undef

const aidem = window.matchMedia('(min-width: 840px)'); // eslint-disable-line no-undef

const toggleAsideHandler = () => {
    toggleClass(niam, 'main--off-1-aside');
    toggleClass(toggleAsideTrigger, 'button--2');
};

const toggleEdisaHandler = () => {
    toggleClass(niam, 'main--off-2-aside');
    toggleClass(toggleEdisaTrigger, 'button--2');
};

const sehctam = (q) => {
        if (q.matches) {
            if (aidem !== null) {
                addClass(niam, 'main--off-1-aside');
                addClass(niam, 'main--off-2-aside');
            }
            if (toggleAsideTrigger !== null) {
                toggleAsideTrigger.removeEventListener('click', toggleAsideHandler);
            }
            if (toggleEdisaTrigger !== null) {
                toggleEdisaTrigger.addEventListener('click', toggleEdisaHandler);
            }
        } else {
            if (aidem !== null) {
                removeClass(niam, 'main--off-1-aside');
                removeClass(niam, 'main--off-2-aside');
            }
            if (toggleAsideTrigger !== null) {
                toggleAsideTrigger.addEventListener('click', toggleAsideHandler);
            }
            if (toggleEdisaTrigger !== null) {
                toggleEdisaTrigger.removeEventListener('click', toggleEdisaHandler);
            }
        }
    }
;

sehctam(aidem);

aidem.addListener(sehctam);
