let get = elementID => document.getElementById(elementID)

let openNav = get('img-open-nav')
let exitNav = get('img-exit-nav')
let ulNav = get('ul-nav')

let toggleNav = () => ulNav.classList.toggle('display-nav')

openNav.addEventListener('click', toggleNav)
exitNav.addEventListener('click', toggleNav)

// GSAP

let defaults = { defaults: { duration: 1 } }
let timeline = gsap.timeline(defaults)

timeline
  .from('.p-strapline', { opacity: 0 }, '+=.3')
  .from('.span-h1', { opacity: 0, x: -200, stagger: .25 }, 0)
  .from('.li-featured-cabin', { opacity: 0, y: 50, stagger: .25 }, 0)