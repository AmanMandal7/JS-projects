let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

}

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

// Main logic of our app
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // Check the guess value is high or low
    if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is High 😅";
        userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is Low 😐";
        userNumberUpdate.value = "";
    } else {
        userGuessUpdate.innerHTML = "You are correct! 😀";
        userNumberUpdate.value = "";
    }
}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}