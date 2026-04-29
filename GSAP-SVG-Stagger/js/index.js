// timeline is a sequence of animations / tweens
const timeline = gsap.timeline({repeat: -1, repeatDelay: 2})

// start of the timeline
timeline
.from("#noble-desktop > g > *", { // elements selected
    ease: "back.out", // animation curve
    duration: 0.5, // duration
    scale:0, // transformations
    x: -5, 
    transformOrigin: 'left center', // where the animation starts
    stagger: 0.1 // how long b/w animations in the group
})
.from("#n-background", {
    duration: 0.75,
    scale: 0,
    transformOrigin: 'right center',
    ease: 'back.out'
}, '-=0.6') // trigger the animation 0.6 seconds earlier
.from("#n > *", {
    duration: 1,
    scale: 0,
    transformOrigin: 'center center',
    stagger: 0.05,
    ease: 'back.out'
})
