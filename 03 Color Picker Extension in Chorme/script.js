const colorPickerBtn = document.querySelector("#color-picker");
const colorList = document.querySelector(".all-colors");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");

const showColors = () => {
    colorList.innerHTML = pickedColors.map(color => `
    <li class="color">
            <span class="rect" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc" : color} "></span>
            <span class="value">${color}</span>
          </li>
    `).join("");
}
showColors();

const activateEyeDropper = async () => {
    try {
        const eyeDropper = new EyeDropper();  //in build function for seelcting colors using eye Dropper
        const { sRGBHex } = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);

        // Adding color to the list if it doesn't already exist
        if (!pickedColors.includes(sRGBHex)) {
            pickedColors.push(sRGBHex);
            localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
            showColors();
        }

    } catch (error) {
        console.log(error)
    }
}

colorPickerBtn.addEventListener("click", activateEyeDropper); 