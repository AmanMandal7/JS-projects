const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const chance = document.querySelector(".chance");


var valid = false;
var chances = 10;
var randomNum;

const randomNumber = () => {
    randomNum = Math.floor((Math.random() * 99) + 1);
    console.log(randomNum);
}
randomNumber();

if (!input.value) {
    // button.style.pointerEvents = 'none';
    button.classList.add("disabled");
}

const replayGame = () => {
    // message.style.display = 'none';
    // button.innerText = 'Check';
    // input.value = "";
    // button.classList.add("disabled");
    // chances.innerText = chance.innerText = `Remaining Chance(s): ${chances}`
    // randomNumber();
    location.reload();
}

const checkResult = () => {
    var guessedNum = input.value;
    setTimeout(() => {
        button.style.scale = "1"
    }, 100);
    button.style.scale = "0.93"

    //Decreasing the chances on every wrong guess
    chances--;
    chance.innerText = `Remaining Chance(s): ${chances}`


    if (chances > 0 && chances <= 10) {
        // Comparing the Guessed Num with Random Num and showing the Message
        if (guessedNum < 1 || guessedNum > 100) {
            message.style.display = 'block'
            message.innerText = `Please enter a number between 1 to 100 only!`
            valid = false;
        } else {
            valid = true;
            if (valid) {
                if (guessedNum > randomNum) {
                    message.style.display = 'block';
                    message.innerText = `Your number is high!`;
                } else if (guessedNum < randomNum) {
                    message.style.display = 'block';
                    message.innerText = `Your number is low!`;
                } else if (guessedNum == randomNum) {
                    message.style.display = 'block';
                    message.innerText = `Great! You guessed the right number.`;
                    message.style.color = 'green';
                    chances = 10;
                    button.addEventListener("click", replayGame);
                }
            }
        }
    } else {
        message.style.display = 'block';
        message.innerText = `You loose the Game!`;
        message.style.color = 'red';
        button.innerText = 'Replay';
        button.addEventListener("click", replayGame);
        chances = 10;
    }
}

const keyUpValidate = () => {
    button.classList.toggle("disabled", !input.value);
    if (input.value === "") message.style.display = 'none';
}


button.addEventListener("click", checkResult);
input.addEventListener("keyup", keyUpValidate);
