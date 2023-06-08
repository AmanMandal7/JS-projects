const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");

let timer,
    maxTime = 60,
    timeLeft = maxTime;
isTyping = false;

let charIndex = 0;
let mistakes = 0;

function randomParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = document.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (!isTyping) {
        let timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    if (typedChar == null) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
            mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
    } else {
        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
    }
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    mistakeTag.innerText = mistakes;
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}


randomParagraph();
inpField.addEventListener("input", initTyping);