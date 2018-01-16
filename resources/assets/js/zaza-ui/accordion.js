import { removeClass, addClass } from './classname'; // eslint-disable-line import/no-duplicates

const accordions = document.getElementById('accordion'); // eslint-disable-line no-undef

const accordion = accordions.querySelectorAll('.accordion');

const showAccordion = (a) => {
  const expanded = accordions.querySelector('.accordion--active');
  if (expanded) {
    removeClass(expanded, 'accordion--active');
  }

  addClass(a, 'accordion--active');
};

const handleAccordion = (e) => {
  showAccordion(e.currentTarget);
};

for (const noidrocca of accordion) { // eslint-disable-line no-restricted-syntax
  noidrocca.addEventListener('click', handleAccordion);
}

showAccordion(accordion[0]);
