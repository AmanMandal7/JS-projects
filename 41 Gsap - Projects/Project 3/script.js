gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






// MAIN SCRIPTING OF THE WEBSITE 
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
        scroller: ".main",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true //when we are using pin, we must trigger the parent page
    },
});