// michelangelo timeline initialization
const mikeTimeline = gsap.timeline()

                // element | duration |  ease               | transformation
mikeTimeline.from("#mike", { duration: 1, ease: "power1.in", y: -1000, delay: 1 })
mikeTimeline.to("#mike", { duration: 1, ease: "power1.in", x: 1000, delay: 1 })