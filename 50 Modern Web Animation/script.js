const circle = document.querySelector(".circle");

window.addEventListener('mousemove', function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .1,
        ease: Expo
    })
})