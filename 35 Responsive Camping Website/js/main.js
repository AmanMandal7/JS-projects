const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

navLink.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}));

// On scroll add background header 
const bgHeader = () => {
    const header = document.querySelector(".header")
    // When scrolling and the viewport height is more than 50, then add bg-header 
    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

window.addEventListener("scroll", bgHeader);