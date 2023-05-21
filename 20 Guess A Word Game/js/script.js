const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const guessesLeft = document.querySelector(".guess-left span");
const wrongLetters = document.querySelector(".wrong-letter span");
const typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrects = [], corrects = [];

function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses = 8; incorrects = []; corrects = [];

    hint.innerText = ranObj.hint;
    guessesLeft.innerText = maxGuesses;
    wrongLetters.innerText = incorrects;

    let html = ``;
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled />`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        if (word.includes(key)) { // if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                // showing matched letter input value
                if (word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                    corrects.push(key);
                }
            }
        } else {
            maxGuesses--;
            incorrects.push(` ${key}`);

        }
        wrongLetters.innerText = incorrects;
        guessesLeft.innerText = maxGuesses;
    }

    typingInput.value = "";

    setTimeout(() => {
        if (corrects.length === word.length) { // if user found all words
            alert(`Congo! You guessed the word ${word.toUpperCase()}`);
            randomWord();
        } else if (maxGuesses < 1) { // if user couldn't found all letters
            alert("Game Over! You don't have remaining guesses.")
            for (let i = 0; i < word.length; i++) {
                // show all letters in the input
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    })
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());