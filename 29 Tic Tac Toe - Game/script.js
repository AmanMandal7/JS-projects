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

// user click function 
function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`
        players.classList.add("active");
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`
        players.classList.add("active");
    }
    element.style.pointerEvents = "none";
    bot();
}

// bot click function
function bot() {
    let array = []; //storing the indexes of not selected boxes
    for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {
            array.push(i);
            // console.log(i + " " + "has no children");
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    // console.log(randomBox);
    if (array.length > 0) {
        if (players.classList.contains("player")) {
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`
            players.classList.add("active");
        } else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`
            players.classList.add("active");
        }
    }
}