const bubbles = document.querySelector("#bubbles");
const hitElem = document.querySelector(".box.hit");
const timerElem = document.querySelector(".box.timer");

var bubble = "";
var timer = 60;
var score = 0;

const generateHitVal = () => {
    var randomHitVal = Math.floor(Math.random() * 10);
    hitElem.innerText = randomHitVal;
}

const makeBubble = () => {
    for (var i = 1; i <= 176; i++) {
        var randomNo = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${randomNo}</div>`;
    }

    bubbles.innerHTML = bubble;
}

const runTimer = () => {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerElem.innerText = timer;
        } else {
            clearInterval(timerInterval);
            // gameOver();
        }
    }, 1000);
}

runTimer();
generateHitVal();
makeBubble();

const bubbleElem = bubbles.querySelectorAll(".bubble");
const scoreElem = document.querySelector(".score");
bubbleElem.forEach(elem => {
    elem.addEventListener("click", () => {
        var tempVal = elem.innerText;
        if (hitElem.innerText == elem.innerText) {
            score += 10;
            elem.classList.add("clicked");
            elem.innerText = "+10";
            setTimeout(() => {
                elem.innerText = tempVal;
            }, 1000)
        } else if (hitElem.innerText != elem.innerText && score > 0) {
            score -= 10;
            elem.innerText = "-10";
            setTimeout(() => {
                elem.innerText = tempVal;
            }, 1000);
            elem.classList.add("badClick");
        } else if (hitElem.innerText != elem.innerText) {
            elem.classList.add("badClick");
        }
        scoreElem.innerText = score;
    })
})

// const gameOver = () => {
//     alert(`Game Over! Your Score is ${finalScore}`)
// }
