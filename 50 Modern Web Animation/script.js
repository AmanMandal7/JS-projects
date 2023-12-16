const circle = document.querySelector(".circle");
const frame = document.querySelector(".frame")

window.addEventListener('mousemove', function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .1,
        ease: Expo
    })
})

frame.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        scale: 8,
        duration: .1,
        ease: Power4
    })

    gsap.to(".frame span", {
        color: "#fff",
        y: "-5vw",
        duration: .3
        
    })
})

frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
        scale: 1
    })

    gsap.to(".frame span", {
        color: '#000',
        y: 0,
        duration: .4
    })
})