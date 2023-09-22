const sidebar = document.querySelector(".sidebar")
const sidebarOpenBtn = document.querySelector("#sidebar-open")
const sidebarCloseBtn = document.querySelector("#sidebar-close")
const sidebarLockBtn = document.querySelector("#lock-icon");


const toggleLock = () => {
    sidebar.classList.toggle("locked");
    if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt")
    } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt")
    }
}

// Adding event listeners 
sidebarLockBtn.addEventListener("click", toggleLock)