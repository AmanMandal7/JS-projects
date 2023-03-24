const lenghtSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const generateBtn = document.querySelector(".generate-btn");

const characters = {  //object of letters, numbers and symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"

}

const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lenghtSlider.value;

    options.forEach(option => { //looping throught each option's checkbox
        if (option.checked) {
            staticPassword += characters[option.id];
        }
    })

    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }

    console.log(randomPassword);
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lenghtSlider.value;
}
updateSlider();


lenghtSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);