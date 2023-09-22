const sidebar = document.querySelector(".sidebar")
const sidebarOpenBtn = document.querySelector("#sidebar-open")
const sidebarCloseBtn = document.querySelector("#sidebar-close")
const sidebarLockBtn = document.querySelector("#lock-icon");

// Locking and unlocking the sidebar 
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

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
}

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
}


// Adding event listeners 
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);