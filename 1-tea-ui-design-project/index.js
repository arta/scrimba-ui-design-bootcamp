const get = (elementId) => document.getElementById(elementId);

const openNav   = get('btn-nav-open');
const navUl     = get('nav-ul');
const closeNav  = get('btn-nav-close');

openNav.addEventListener('click', () => navUl.classList.add('show-nav-ul'));

closeNav.addEventListener('click', () => navUl.classList.remove('show-nav-ul'));
