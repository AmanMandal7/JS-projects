const canvas = document.querySelector("canvas");
const toolBtns = document.querySelectorAll(".tools");
ctx = canvas.getContext("2d");

let isDrawing = false;
let brushWidth = 5;

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const drawing = (e) => {
    if (!isDrawing) return; // if isDrawing is false return from here
    ctx.lineTo(e.offsetX, e.offsetY); // this method creates a new line according to the mouse pointer
    ctx.stroke(); // drawing/filling line with color
}

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // setting line width
};

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // removing active class from previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.id);
    })
})

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => isDrawing = false);