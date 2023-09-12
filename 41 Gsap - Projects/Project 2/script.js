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