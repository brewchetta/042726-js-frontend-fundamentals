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