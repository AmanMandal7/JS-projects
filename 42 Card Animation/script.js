// The below code is called 'Throttling', it means to decrease the number of execution of a function over a period of time
// This throttleFunction code is copied from geeksForGeeks 
// Simple throttle function code can be found in throttleFunctionEx2.js file

const headings = document.querySelectorAll(".headings h1");
const container = document.querySelector(".container");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);

        if (now - prev > delay) {
            prev = now;
            return func(...args);

        }
    }
}

headings.forEach(h1 => {
    h1.addEventListener("mousemove", throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = dets.clientX + "px"
        div.style.top = `${dets.clientY - 270}px `

        var randomImg = Math.floor(Math.random() * 12);
        var img = document.createElement("img");
        img.setAttribute("src", `images/${randomImg}.avif`)
        div.appendChild(img);

        container.appendChild(div);

        // USING GSAP FOR ANIMATIONS //
        var rotVal = [-10, 0, 10]
        var randomRot = Math.floor(Math.random() * 3)

        var tl = gsap.timeline();
        tl.to(div, {
            rotate: `${rotVal[randomRot]}`,
            duration: -1,
        })
        tl.to(img, {
            y: 0,
            duration: .5,
            ease: Power1,
            yoyo: true,
            repeat: -1
        })

        setTimeout(() => {
            div.remove();
        }, 1000);
    }, 200));
})



