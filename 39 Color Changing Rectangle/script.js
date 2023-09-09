const rectangle = document.querySelector(".rectangle");
const center = document.querySelector(".centerLine");


var rectLeft = rectangle.getBoundingClientRect().left;
var rectRight = rectangle.getBoundingClientRect().right;
var rectCenter = ((rectangle.getBoundingClientRect().right - rectangle.getBoundingClientRect().left) / 2) + rectangle.getBoundingClientRect().left;


rectangle.addEventListener("mousemove", (dets) => {
    if (dets.clientX > rectLeft && dets.clientX < rectCenter) {
        console.log("You are on left")
    } else if (dets.clientX > rectCenter && dets.clientX < rectRight) {
        console.log("You are on right")
    }
})