let defaults = { defaults: { duration: 1 } }
let timeline = gsap.timeline(defaults)

timeline
  .from('#wrapper-col-left', { y: -50, opacity: 0 })
  .from('.li-ul-quotes', { y: 50, opacity: 0, stagger: 0.5}, '-=.5')
  .from('.img-phone', { y: 30, opacity: 0 }, '-=2')
