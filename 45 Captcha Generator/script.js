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
generateCaptcha();

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
    message.classList.remove("active");
    if (captchaInputBox.value === "") message.classList.remove("active");
}

const captchaKeyUpValidate = () => {
    submitBtn.classList.toggle("disabled", !captchaInputBox.value);
    if (captchaInputBox.value === "") message.classList.remove("active");
}

const submitBtnClick = () => {
    captchaText = captchaText.split("").filter(char => char !== " ").join("");
    if (captchaText === captchaInputBox.value) {
        message.innerText = "Entered captcha is correct";
        message.classList.add("active");
    } else {
        message.innerText = "Entered captcha is not correct";
        message.classList.add("active");
        message.style.color = "red";
    }
}

captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitBtn.addEventListener("click", submitBtnClick);
refreshBtn.addEventListener("click", refreshBtnClick);
