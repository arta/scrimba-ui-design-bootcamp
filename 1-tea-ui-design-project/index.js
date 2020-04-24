const get = (elementId) => document.getElementById(elementId);

const btnNavOpen  = get('btn-nav-open');
const navUl       = get('nav-ul');
const btnNavClose = get('btn-nav-close');

function toggleNav() {
  navUl.classList.toggle('show-nav-ul');
  btnNavOpen.classList.toggle('hide-btn-nav-open');
};

btnNavOpen.addEventListener('click', () => toggleNav());

btnNavClose.addEventListener('click', () => toggleNav());
