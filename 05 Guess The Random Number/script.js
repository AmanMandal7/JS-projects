let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('./audio/musics.wav');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

}

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

// Start new game after winning or using all the attempts
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

// New game begin after you click on 'Start New Game' button
const newGameBegin = () => {
    audio.play();
    window.location.reload();
}

// Main logic of our app
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // Check the guess value is high or low
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 😅";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 😐";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "You are correct! 😀";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose! Correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose! Correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "You are correct! 😀";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
}