const captchaTextBox = document.querySelector(".captcha_box input");
const captchaInputBox = document.querySelector(".captcha_input input");
const refreshBtn = document.querySelector(".refresh_button");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".button");

var captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7); //toString converts number into string like hexadecimals(16), substring gives that part of the string 
    const randomStringArray = randomString.split("");
    const chageString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char);
    captchaText = chageString.join("   ");
    captchaTextBox.value = captchaText;
}

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    submitBtn.classList.toggle("disabled", !captchaInputBox.value);
}

captchaInputBox.addEventListener("keyup", captchaKeyUpValidate)
refreshBtn.addEventListener("click", refreshBtnClick);
generateCaptcha();