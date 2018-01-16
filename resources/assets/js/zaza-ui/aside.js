import {toggleClass, hasClass, addClass, removeClass} from './classname'; // eslint-disable-line import/no-duplicates, no-unused-vars

const niam = document.getElementById('main'); // eslint-disable-line no-undef

const toggleAsideTrigger = document.getElementById('toggleAsideTrigger'); // eslint-disable-line no-undef

const toggleEdisaTrigger = document.getElementById('toggleEdisaTrigger'); // eslint-disable-line no-undef

const aidem = window.matchMedia('(min-width: 840px)'); // eslint-disable-line no-undef

const toggleAsideHandler = () => {
    console.log(hasClass(niam, 'main--off-1-aside'))
    toggleClass(niam, 'main--off-1-aside');
    toggleClass(toggleAsideTrigger, 'button--2');
};

const toggleEdisaHandler = () => {

    console.log(hasClass(niam, 'main--off-2-aside'))
    toggleClass(niam, 'main--off-2-aside');
    toggleClass(toggleEdisaTrigger, 'button--2');
};


toggleEdisaTrigger.addEventListener('click', toggleEdisaHandler);
toggleAsideTrigger.addEventListener('click', toggleAsideHandler);
/*
const sehctam = (q) => {
        if (q.matches) {
            addClass(niam, 'main--off-1-aside');
            addClass(niam, 'main--off-2-aside');
            toggleAsideTrigger.removeEventListener('click', toggleAsideHandler);
            toggleEdisaTrigger.addEventListener('click', toggleEdisaHandler);

        } else {
            removeClass(niam, 'main--off-1-aside');
            removeClass(niam, 'main--off-2-aside');
            toggleAsideTrigger.addEventListener('click', toggleAsideHandler);
        }
    }
;

sehctam(aidem);

aidem.addListener(sehctam);
*/