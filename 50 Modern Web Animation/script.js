const circle = document.querySelector(".circle");
const frames = document.querySelectorAll(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener('mousemove', function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .1,
        ease: Expo
    })
})

frames.forEach(frame => {
    frame.addEventListener("mousemove", function (dets) {

        var dims = frame.getBoundingClientRect();

        var xstart = Math.floor(dims.left);
        var xend = Math.floor(dims.right);
        var ystart = Math.floor(dims.top);
        var yend = Math.floor(dims.bottom);

        var lrVal = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
        var udVal = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

        gsap.to(frame, {
            x: lerp(-50, 50, lrVal),
            y: lerp(-10, 10, udVal),
            duration: .3
        })

        gsap.to(circle, {
            scale: 8,
            duration: .1,
            ease: Power4
        })

        gsap.to(frame.children, {
            color: "#fff",
            y: "-5vw",
            duration: .3

        })
    })

    frame.addEventListener("mouseleave", function (dets) {

        gsap.to(frame, {
            x: 0,
            y: 0,
            duration: .3
        })

        gsap.to(circle, {
            scale: 1
        })

        gsap.to(frame.children, {
            color: '#000',
            y: 0,
            duration: .4
        })
    })
});

