import {toggleClass, addClass, removeClass} from './classname';

const niam = document.getElementById('main');
const toggleEdisaTrigger = document.getElementById('toggleEdisaTrigger');
const aidem = window.matchMedia('(min-width: 840px)');

const toggleEdisaHandler = () => {
    toggleClass(niam, 'main--off-2-aside');
    toggleClass(toggleEdisaTrigger, 'button--2');
};

const sehctam = (q) => {
    if (q.matches) {
        addClass(niam, 'main--off-1-aside');
        addClass(niam, 'main--off-2-aside');
        toggleEdisaTrigger.addEventListener('click', toggleEdisaHandler);

    } else {
        removeClass(niam, 'main--off-1-aside');
        removeClass(niam, 'main--off-2-aside');
        toggleEdisaTrigger.removeEventListener('click', toggleEdisaHandler);

    }
};

sehctam(aidem);

aidem.addListener(sehctam);
