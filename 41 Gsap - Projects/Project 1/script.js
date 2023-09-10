var tl = gsap.timeline();

tl.from(".nav img, .nav .nav3", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0
});

tl.from(".nav .nav2", {
    y: 50,
    duration: 1,
    opacity: 0
})