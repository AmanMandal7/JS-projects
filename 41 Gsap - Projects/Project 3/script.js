var tl = gsap.timeline();

tl.to(".page1 h1", {
    transform: "translateX(-1900px)",
    fontWeight: 200,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true //when we are using pin, we must trigger the parent page
    },
});
