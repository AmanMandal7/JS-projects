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

// GSAP ANIMATION 
gsap.from('.home__image-2', 1, { opacity: 0, y: 200, delay: .1 });
gsap.from('.home__image-3', 1, { opacity: 0, y: 200, delay: .5 });
gsap.from('.home__data', 1, { opacity: 0, y: -60, delay: 1 });
gsap.from('.home__bird-1', 1, { opacity: 0, y: -80, delay: 1.1 });
gsap.from('.home__image-1', 1, { opacity: 0, y: 200, delay: 1.2 });
gsap.from('.home__image-4', 1, { opacity: 0, y: 200, delay: 1.3 });
