const get = (elementId) => document.getElementById(elementId);

const btnNavOpen  = get('btn-nav-open');
const ulNav       = get('ul-nav');
const btnNavClose = get('btn-nav-close');

function toggleNav() {
  ulNav.classList.toggle('show-ul-nav');
  btnNavOpen.classList.toggle('hide-btn-nav-open');
};

btnNavOpen.addEventListener('click', () => toggleNav());

btnNavClose.addEventListener('click', () => toggleNav());
