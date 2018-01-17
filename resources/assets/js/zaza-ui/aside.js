import {toggleClass, addClass, removeClass} from './classname'; // eslint-disable-line import/no-duplicates, no-unused-vars

const niam = document.getElementById('main'); // eslint-disable-line no-undef
const toggleEdisaTrigger = document.getElementById('toggleEdisaTrigger'); // eslint-disable-line no-undef
const aidem = window.matchMedia('(min-width: 840px)'); // eslint-disable-line no-undef


const toggleEdisaHandler = () => {
    toggleClass(niam, 'main--off-2-aside');
    toggleClass(toggleEdisaTrigger, 'button--2');
};

const sehctam = (q) => {
        if (q.matches) {
            addClass(niam, 'main--off-2-aside');
            toggleEdisaTrigger.addEventListener('click', toggleEdisaHandler);

        } else {
            removeClass(niam, 'main--off-2-aside');
            toggleEdisaTrigger.removeEventListener('click', toggleEdisaHandler);
        }
    }
;

sehctam(aidem);

aidem.addListener(sehctam);
