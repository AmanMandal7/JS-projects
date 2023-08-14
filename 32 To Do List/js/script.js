const inputField = document.querySelector(".input-field textarea");
const todoLists = document.querySelector(".todoLists");
const pendingNum = document.querySelector(".pending-number");
const clearBtn = document.querySelector(".clear-button");


function allTasks() {
    const tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearBtn.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearBtn.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputValue = inputField.value.trim(); //trim function trims the space in front and back of the content

    if (e.key === "Enter" && inputValue.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)"">
          <input type="checkbox"/>
          <span class="task">${inputValue}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`

        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
    }
});

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
}

clearBtn.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})