let defaults = { defaults: { duration: 1 } }
let timeline = gsap.timeline(defaults)

timeline
  .from('#wrapper-col-left', { y: -50, opacity: 0 })
