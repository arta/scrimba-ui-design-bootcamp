let get = (elementID) => document.getElementById(elementID)

let openNav = get('img-open-nav')
let exitNav = get('img-exit-nav')
let ulNav = get('ul-nav')

let toggleNav = () => ulNav.classList.toggle('display-nav')

openNav.addEventListener('click', toggleNav)
exitNav.addEventListener('click', toggleNav)
