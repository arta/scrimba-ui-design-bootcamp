const get = (elementId) => document.getElementById(elementId);

const btnOpenUlNav  = get('btn-open-ul-nav');
const ulNav         = get('ul-nav');
const btnCloseUlNav = get('btn-close-ul-nav');

function toggleUlNav() {
  ulNav.classList.toggle('ul-nav--displayed');
  btnOpenUlNav.classList.toggle('btn-open-ul-nav--hidden');
};

btnOpenUlNav.addEventListener('click', () => toggleUlNav());

btnCloseUlNav.addEventListener('click', () => toggleUlNav());
