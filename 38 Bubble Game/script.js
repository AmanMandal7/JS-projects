const pbottom = document.querySelector("#pbottom");
const timerElem = document.querySelector(".box.timer");

var bubble = "";
var randomNo;
var timer = 3;

const makeBubble = () => {
    for (var i = 1; i <= 176; i++) {
        randomNo = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${randomNo}</div>`;
    }

    pbottom.innerHTML = bubble;
}

const runTimer = () => {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerElem.innerText = timer;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

runTimer();
makeBubble();


