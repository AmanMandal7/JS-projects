const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");



window.onload = () => {

    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
    }
}

let playerXIcon = "fa fa-times";
let playerOIcon = "fa-regular fa-circle";
let playerSign = "X";

// user click function 
function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`
        players.classList.remove("active");
        // if player select O then we'll change the playerSign value to O
        playerSign = "O";
        element.setAttribute("id", playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 500).toFixed();
    console.log(randomDelayTime);
    setTimeout(() => {
        bot();
    }, randomDelayTime);

}

// bot click function
function bot() {
    // first changing the playerSign value
    playerSign = "O";
    let array = []; //storing the indexes of not selected boxes
    for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {
            array.push(i);
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    // console.log(randomBox);
    if (array.length > 0) {
        if (players.classList.contains("player")) {
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`
            players.classList.add("active");
            playerSign = "X";
            allBox[randomBox].setAttribute("id", playerSign);
        } else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`
            players.classList.remove("active");
            allBox[randomBox].setAttribute("id", playerSign);
        }
        allBox[randomBox].style.pointerEvents = "none";
    }
}