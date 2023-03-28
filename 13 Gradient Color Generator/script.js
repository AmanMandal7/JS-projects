const colorInputs = document.querySelectorAll(".inputs input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");

const generateGradient = () => {
    // Creating gradient string using select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
}

colorInputs.forEach(input => {
    // calling generateGradient function on each color input clicks
    input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);