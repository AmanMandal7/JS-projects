var tl = gsap.timeline();

tl.from(".nav", {
    y: 50,
    opacity: 0,
    scale: 0,
    delay: 1,
    duration: 0.7
})

tl.from(".nav h1, .nav h5, .nav i", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
})

tl.from(".container h1", {
    x: -1000,
    duration: 1,

})

tl.from(".images img", {
    y: 100,
    opacity: 0,
    stagger: 0.2
})


tl.from(".line", {
    scale: 0,
    duration: 0.5,
    delay: -0.1,
});

tl.from(".smallh1 h5", {
    y: 100,
    opacity: 0,
    stagger: 0.2
})

tl.from(".right img", {
    opacity: 0,
    scale: 0,
    duration: .5
})

gsap.from(".page2 .button, .headings h3", {
    x: -400,
    opacity: 0,
    duration: .5,
    stagger: .2,
    scrollTrigger: {
        trigger: ".page2 .button, .headings h3",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 50%",
        scrub: 3
    }
});

gsap.from(".boxes .box1, .boxes .box2, .boxes .box3", {
    scale: 0,
    opacity: 0,
    duration: .7,
    stagger: .3,
    scrollTrigger: {
        trigger: ".boxes .box1, .boxes .box2, .boxes .box3",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3
    }
})