const get = (elementId) => document.getElementById(elementId);

const btnNavOpen  = get('btn-nav-open');
const navUl       = get('nav-ul');
const btnNavClose = get('btn-nav-close');

btnNavOpen.addEventListener('click', () => {
  navUl.classList.toggle('show-nav-ul');
  btnNavOpen.classList.toggle('hide-btn-nav-open');
});

btnNavClose.addEventListener('click', () => {
  navUl.classList.toggle('show-nav-ul');
  btnNavOpen.classList.toggle('hide-btn-nav-open');
});
