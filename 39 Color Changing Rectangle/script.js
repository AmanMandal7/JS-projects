const rectangle = document.querySelector(".rectangle");
const center = document.querySelector(".centerLine");
const text = rectangle.querySelector("h4");


var rectLeft = rectangle.getBoundingClientRect().left;
var rectRight = rectangle.getBoundingClientRect().right;
var rectCenter = ((rectangle.getBoundingClientRect().right - rectangle.getBoundingClientRect().left) / 2) + rectangle.getBoundingClientRect().left;


rectangle.addEventListener("mousemove", (dets) => {
    text.innerText = "";
    if (dets.clientX > rectLeft && dets.clientX < rectCenter) {
        var greenColor = gsap.utils.mapRange(rectLeft, rectCenter, 0, 200, dets.clientX);
        var blueColor = gsap.utils.mapRange(rectLeft, rectCenter, 0, 200, dets.clientX);
        gsap.to(rectangle, {
            backgroundColor: `rgb(200, ${greenColor}, ${blueColor})`,
            ease: Power1,
            scale: 1.05
        })
    } else if (dets.clientX > rectCenter && dets.clientX < rectRight) {
        var redcolor = gsap.utils.mapRange(rectCenter, rectRight, 200, 0, dets.clientX);
        var greencolor = gsap.utils.mapRange(rectCenter, rectRight, 200, 0, dets.clientX);
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redcolor}, ${greencolor}, 200)`,
            ease: Power1,
            scale: 1.05
        })
    }
});

// Adding the event listener 
rectangle.addEventListener("mouseleave", () => {
    text.innerText = 'Hover over me to see the Magic';
    gsap.to(rectangle, {
        backgroundColor: '#fdecec',
        scale: 1
    })
});