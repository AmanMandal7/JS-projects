const headings = document.querySelector(".headings");

var isScrolling = true;
const throttleFunction = () => {
    if (isScrolling === true) {
        console.log("land");
        isScrolling = false
        setTimeout(() => {
            isScrolling = true;
        }, 1000);
    }
}

headings.addEventListener("mousemove", throttleFunction);
