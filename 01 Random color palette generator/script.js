const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container")

const maxPaletteBoxes = 32;
const generatePaletter = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // Code to generate hex value 
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, '0')}`  //It will add 0 after # to ensure that 6 characters long hex value is generated

        // Creating a new 'li' element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`
        //adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color);
    }
}
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // Copying the hex value and updating the text to copied
    // Agian changing the text back to the original hex value after 1 sec
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code")) //showing alert if color can't be copied
}

// Adding the event listener 
refreshBtn.addEventListener("click", generatePaletter)

