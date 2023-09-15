var tl = gsap.timeline();

const load = false;
const loadingTimer = () => {
    var a = 0;
    setInterval(() => {
        if (a < 100) {
            a = a + Math.floor(Math.random() * 20);
            document.querySelector(".loader h1").innerHTML = a + "%"
        } else {
            document.querySelector(".loader h1").innerText = `100%`

        }
    }, 150);
};


tl.to(".loader h1", {
    delay: .5,
    duration: 1.5,
    onStart: loadingTimer()
})

tl.to(".loader", {
    top: "-100vh",
    delay: .5,
    duration: 1,
})



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
