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
        scale: 4,
        duration: .1,
        ease: Power4
    })
})

frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
        scale: 1
    })
})