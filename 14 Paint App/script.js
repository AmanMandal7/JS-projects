const canvas = document.querySelector("canvas");
const toolBtns = document.querySelectorAll(".tools");
const fillColor = document.querySelector("#fill-color");
ctx = canvas.getContext("2d");

// global variables with default value
let isDrawing = false;
let prevMouseX, prevMouseY, snapshot;
selectedTool = "brush";
let brushWidth = 5;

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const drawRect = (e) => {
    // if fill-color is checked, drawing filled rectangle else rectangle only with borders 
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY); // it takes (x-cordinate, y-cordinate, width, height)
    }
    return ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}



const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value 
    prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value 
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // setting line width
    // copying canvas data & passing as snapshot value.. this avoids dragging the image
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const drawing = (e) => {
    if (!isDrawing) return; // if isDrawing is false return from here
    ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas

    if (selectedTool === "brush") {
        ctx.lineTo(e.offsetX, e.offsetY); // this method creates a new line according to the mouse pointer
        ctx.stroke(); // drawing/filling line with color
    } else if (selectedTool === "rectangle") {
        drawRect(e);
    } else if (selectedTool === "circle") {

    }

}


toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // removing active class from previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });

})

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => isDrawing = false);