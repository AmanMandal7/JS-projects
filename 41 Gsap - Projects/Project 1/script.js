var tl = gsap.timeline();

tl.from(".nav img, .nav .nav3", {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: .5,
    opacity: 0
});

tl.from(".nav .nav2", {
    y: 50,
    duration: 1,
    opacity: 0,
    delay: -.5
})

tl.from(".headings h1", {
    y: 200,
    opacity: 0,
    delay: -0.5,
    duration: 1,
    stagger: .5
})

tl.from(".headings h1 span", {
    x: -400,
    opacity: 0,
    duration: .4
})

tl.from(".images img", {
    scale: 0,
    duration: 1,
    delay: -.5
})

tl.from("p", {
    y: 200,
    opacity: 0,
    duration: 1
})

tl.to("p", {
    y: 8,
    repeat: -1,
    duration: 1,
    yoyo: true
})

