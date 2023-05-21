const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const typingInput = document.querySelector(".typing-input");

let word;

function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    console.log(word);

    hint.innerText = ranObj.hint;

    let html = ``;
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled />`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if (word.includes(key)) { // if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                // showing matched letter input value
                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            console.log("letter not found")
        }
    }
    typingInput.value = "";

}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());