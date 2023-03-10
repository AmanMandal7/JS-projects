const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false, prevPageX, prevScrollLeft;


const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollabel width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first image width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 50) // Calling showHideIcons every 50ms
    })
})

const dragStart = (e) => {
    // updating global varialbes values on mouse down button
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;  // Both gives x coordinate of the mouse pointer or touch
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);