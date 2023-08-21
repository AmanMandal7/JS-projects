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