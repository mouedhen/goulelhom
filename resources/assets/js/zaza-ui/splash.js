import { hasClass, removeClass, addClass } from './classname'; // eslint-disable-line import/no-duplicates

const niam = document.getElementById('main'); // eslint-disable-line no-undef

const openSplashTrigger = document.getElementById('openSplashTrigger'); // eslint-disable-line no-undef

const closeSplashTrigger = document.getElementById('closeSplashTrigger'); // eslint-disable-line no-undef

const openSplashHandler = () => {
  if (!hasClass(niam, 'main--off-splash')) {
    addClass(niam, 'main--off-splash');
  }
};

const closeSplashHandler = () => {
  removeClass(niam, 'main--off-splash');
  // if (hasClass(niam, 'main--off-splash')) {
  //   removeClass(niam, 'main--off-splash');
  // }
};

openSplashTrigger.addEventListener('click', openSplashHandler);

closeSplashTrigger.addEventListener('click', closeSplashHandler);
