// create timeline
const timeline = gsap.timeline()

timeline
.from('#panel1-text', { // element to animate
    duration: 0.5,
    scale: 0.5, // how large it starts
    opacity: 0, // how see through it starts
    ease: 'back.out' // animation curve
})
.set('#panel2', { // set allows us to jump an element to a specific animation state
    top:0, // move element to top of the container window
}, '+=2') // add 2 second delay until this triggers
.from('#panel2', {
    duration: 0.2,
    opacity: 0,
    scale: 1.5 // make the element larger and then shrink to fit the screen
})
.from('#panel2-text', {
    duration: 0.2,
    yPercent: 100 // h2 starts 100% of its height lower and then raises onto the screen
})
.set('#panel3', {
    top: 0
}, '+=2')
.from('#info', {
    duration: 0.5,
    yPercent: 100
})
.to('#panel2', {
    duration: 0.5,
    y: -65
}, '<')