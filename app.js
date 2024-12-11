gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
const lineOneTL = gsap.timeline({
  scrollTrigger: {
    trigger:'.line-one',
    start: 'top top',
    pin: true,
    scrub: true,
    // markers: true
  }
})
  
lineOneTL
  .from('.line-one span', { y: '100vh', opacity: 0, duration: 1, stagger: .2 })
  .from('.sun', { x: '100vw', opacity: 0, duration: 1})
  .to('.line-one', { backgroundColor: 'yellow', duration: 1 }, '<')
  .to('.sun', { x: '-100vw', duration: 1 }, '+=2')
  .to('.line-one span', { x: '100vw', duration: 1}, '<')
  .to('.line-one', { backgroundColor: 'white', duration: 1 }, '<')

const lineTwoTL = gsap.timeline({
  scrollTrigger: {
    trigger:'.line-two',
    start: 'top top',
    pin: true,
    scrub: true,
    // markers: true
  }
})

lineTwoTL
  .from('.line-two span:first-child', { x: '-100vw', scale: 18, opacity: 0.5, duration: 1 })
  .from('.line-two span:last-child', { x: '100vw', scale: 18, opacity: 0.5, duration: 1 }, '<')
  .to('.line-two span:first-child', { y: '-20px', duration: .3})
  .to('.line-two span:first-child', { y: 0, duration: .3})
  .to('.line-two span:last-child', { y: '-20px', duration: .3})
  .to('.line-two span:last-child', { y: 0, duration: .3})

const lineThreeTL = gsap.timeline({
  scrollTrigger: {
    trigger:'.line-three',
    start: 'top top',
    pin: true,
    scrub: true,
    //markers: true
  }
})

lineThreeTL
  .from('.line-three span', { y: '100vh', opacity: 0, duration: 1, stagger: .2 })
  .to('.line-three', { backgroundPositionX: 0, color: 'white' , duration: 1 })
  .from('.line-three .moon', { x: '100vw', duration: 1 }, '<')