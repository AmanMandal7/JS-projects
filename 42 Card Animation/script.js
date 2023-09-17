// The below code is called 'Throttling', it means to decrease the number of execution of a function over a period of time
// This throttleFunction code is copied from geeksForGeeks 
// Simple throttle funcion code can be found in throttleFunctionEx2.js file

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

        var img = document.createElement("img");
        img.setAttribute("src", 'https://images.unsplash.com/photo-1694843697790-d384af776f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')
        div.appendChild(img);

        container.appendChild(div);

        // USING GSAP FOR ANIMATIONS // 

        // gsap.to(div, {
        //     rotate: 10,
        // })
        gsap.to(img, {
            y: 0,
            duration: .5,
            ease: Power1,
            yoyo: true,
            repeat: -1
        })

        // gsap.to(img, {
        //     y: 300,
        //     delay: .5,
        //     duration: .5,
        //     ease: Power1
        // })

        setTimeout(() => {
            div.remove();
        }, 1000);
    }, 500));
})



