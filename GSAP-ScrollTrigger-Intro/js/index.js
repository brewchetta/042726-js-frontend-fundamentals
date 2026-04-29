// gsap.from is animate one thing once
gsap.from('h2', {
    duration: 5,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: 'h2', // the element in view that triggers the animation
        toggleActions: 'resume pause reset pause',
        //        onEnter | onLeave | onEnterBack | onLeaveBack
        markers: false,
        // markers is a debugging tool we can turn on to see where it triggers on the page
        scrub: true,
        // scrub means the animation moves forwards/backwards depending on scroll
        start: 'top 80%',
        end: 'bottom 50%'
        // start/end determines where the animation starts and ends on scroll
        // top/bottom is for the element
        // 80% / 50% is where the scroll on page is
    }
})

// get all section images on the page
const allSectionImgs = document.querySelectorAll('section img')

// begin loop through all section images
for (let index = 0; index < allSectionImgs.length; index++) {

    // xMovement is whether we are coming in from the left or right in the animation
    let xMovement = -100
    // isEven calculates whether it's even or odd (true / false)
    const isEven = index % 2 === 0

    if (isEven) {
        xMovement = -100
    } else {
        xMovement = 100
    }

    // apply gsap animation for each img on page
    gsap.from(allSectionImgs[index], { // allSectionImgs[index] is the current img
        scrollTrigger: {
            trigger: allSectionImgs[index], // trigger is also the element
        },
        x: xMovement,
        opacity: 0,
        duration: 1.5
    })

}

