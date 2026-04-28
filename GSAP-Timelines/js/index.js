// michelangelo timeline initialization | repeat is how many repeats after the first run
const mikeTimeline = gsap.timeline({ repeat: 1, repeatDelay: 5 })
// repeat -1 means the animation repeats FOREVER

mikeTimeline
.from("#mike", { duration: 1, ease: "power1.in", y: -1000 })
.to("#mike", { duration: 1, ease: "power1.in", x: 1000}, '+=0.5')
// element | duration |  ease   |             transform | delay / timing