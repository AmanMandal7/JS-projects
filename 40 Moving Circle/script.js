const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

container.addEventListener("mousemove", (dets) => {
    //For X axis movement
    var centerX = Math.floor(container.getBoundingClientRect().width / 2);
    var leftVal = Math.floor(container.getBoundingClientRect().left);
    var rightVal = Math.floor(container.getBoundingClientRect().right);
    var toLeft = gsap.utils.mapRange(centerX, leftVal, 50, 30, dets.clientX);
    var toRight = gsap.utils.mapRange(centerX, rightVal, 50, 70, dets.clientX);
    if (dets.clientX < centerX) {
        gsap.to(circle, {
            left: `${toLeft}%`,
            ease: Power1
        })
    } else {
        gsap.to(circle, {
            left: `${toRight}%`,
            ease: Power1
        })
    };

    // For Y axis movement 
    var centerY = Math.floor(container.getBoundingClientRect().height / 2);
    var topVal = Math.floor(container.getBoundingClientRect().top);
    var bottomVal = Math.floor(container.getBoundingClientRect().bottom);
    var toTop = gsap.utils.mapRange(centerY, topVal, 50, 30, dets.clientY);
    var toBottom = gsap.utils.mapRange(centerY, bottomVal, 50, 70, dets.clientY);
    if (dets.clientY < centerY) {
        gsap.to(circle, {
            top: `${toTop}%`,
            ease: Power1
        })
    } else {
        gsap.to(circle, {
            top: `${toBottom}%`,
            ease: Power1
        })
    };
})