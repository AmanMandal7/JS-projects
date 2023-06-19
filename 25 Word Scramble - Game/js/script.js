const content = document.querySelector(".content");
const wordText = content.querySelector(".word");
const inputField = document.querySelector("input");
const timeField = document.querySelector(".time b")
const hintText = content.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = (maxTime) => {
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeField.innerText = maxTime;
        }
    }, 1000)
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.textContent = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);
};

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if (!userWord) return alert("Please enter a word check");
    if (userWord == correctWord) {
        alert(`Conrats! ${userWord.toUpperCase()} is a correct word`);
    } else {
        alert(`Oops! ${userWord.toUpperCase()} is not a correct word`);
    }
    initGame();
}

checkBtn.addEventListener("click", checkWord)
refreshBtn.addEventListener("click", initGame);