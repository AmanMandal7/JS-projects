const lenghtSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
let passwordInput = document.querySelector(".input-box input");
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
    let excludeDuplicate = false;
    let passLength = lenghtSlider.value;

    options.forEach(option => { //looping throught each option's checkbox
        if (option.checked) {
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if (option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `
            } else {
                excludeDuplicate = true;
            }

        }
    })

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            // if randomPassword doesn't contain the current random character or randomChar is equal
            // to space " " then add random character to randomPassword else decrement i by -1
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }

    passwordInput.value = randomPassword;
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lenghtSlider.value;
    generatePassword();
}
updateSlider();


lenghtSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);