const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; // getting first image width & adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})

const dragStart = (e) => {
    // updating global varialbes values on mouse down button
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);