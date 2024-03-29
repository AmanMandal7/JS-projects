const canvas = document.querySelector("canvas");
const toolBtns = document.querySelectorAll(".tools");
const fillColor = document.querySelector("#fill-color");
const sizeSlider = document.querySelector("#size-slider");
const colorBtns = document.querySelectorAll(".colors .option");
const colorPicker = document.querySelector("#color-picker");
const clearCanvas = document.querySelector(".clear-canvas");
const saveImg = document.querySelector(".save-img");
ctx = canvas.getContext("2d");

// global variables with default value
let isDrawing = false;
let prevMouseX, prevMouseY, snapshot;
selectedTool = "brush";
let brushWidth = 5;
let selectedColor = "#000";

const setCanvasBackground = () => {
    // setting whole canvas background to white, so the download image background will be white
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor; // setting fillStyle back to the selectedColor, it'll be the brush color
}

window.addEventListener("load", () => {
    // setting canvas width/height.. offsetwidth/height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
});

const drawRect = (e) => {
    // if fill-color is checked, drawing filled rectangle else rectangle only with borders 
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY); // it takes (x-cordinate, y-cordinate, width, height)
    }
    return ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const drawCircle = (e) => {
    ctx.beginPath(); // creating new path to draw circle
    // getting radius of the cirlce according to mouse pointer
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // it takes (x-cordinate, y-cordinate, radius, start angle, end angle)
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY); // moving triagle to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // creating bottom line of triangle
    ctx.closePath(); // closing path of a triangle so the third line draw automatically
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value 
    prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value 
    ctx.beginPath(); // creating new path to draw
    ctx.lineWidth = brushWidth; // setting line width
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    // copying canvas data & passing as snapshot value.. this avoids dragging the image
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const drawing = (e) => {
    if (!isDrawing) return; // if isDrawing is false return from here
    ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas

    if (selectedTool === "brush" || selectedTool === "eraser") {
        ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
        ctx.lineTo(e.offsetX, e.offsetY); // this method creates a new line according to the mouse pointer
        ctx.stroke(); // drawing/filling line with color
    } else if (selectedTool === "rectangle") {
        drawRect(e);
    } else if (selectedTool === "circle") {
        drawCircle(e);
    } else {
        drawTriangle(e);
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

});

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        // passing selected btn background color as selectedColor value
        selectedColor = (window.getComputedStyle(btn).getPropertyValue("background-color"));
    })
})

colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value;
    colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clearing whole canvas
    setCanvasBackground();
});

saveImg.addEventListener("click", () => {
    const link = document.createElement("a"); // creating <a> element
    link.download = `${Date.now()}.jpg`; // passing current date as link download value
    link.href = canvas.toDataURL(); // passing canvasData as link href value
    link.click(); // clicking link to download image
})

sizeSlider.addEventListener("change", () => brushWidth = sizeSlider.value); // passing slider value as brush width

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => isDrawing = false);