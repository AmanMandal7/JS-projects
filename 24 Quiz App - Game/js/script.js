//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box")

//if start quiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo")
}

//if Exit Quiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo")
}

//if Continue button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(4);
}

let que_count = 0;

//getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div >'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div >'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div >'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div >';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}