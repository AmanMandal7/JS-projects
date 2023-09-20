const captchaTextBox = document.querySelector(".captcha_box input");
const captchaInputBox = document.querySelector(".captcha_input input");
const refreshBtn = document.querySelector(".refresh_button");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".button button");

var captchaText = null;

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7); //toString converts number into string like hexadecimals(16), substring gives that part of the string 
    const randomStringArray = randomString.split("");
    const chageString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char);
    captchaText = chageString.join("   ");
    captchaTextBox.value = captchaText;
    console.log(randomStringArray, chageString, captchaText);
}

refreshBtn.addEventListener("click", generateCaptcha);
generateCaptcha();