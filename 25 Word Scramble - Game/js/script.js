const content = document.querySelector(".content");
const wordText = content.querySelector(".word");
const hint = content.querySelector(".hint span");



const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    console.log(randomObj);

    wordText.textContent = wordArray.join("");
    hint.innerText = randomObj.hint;
};

initGame();