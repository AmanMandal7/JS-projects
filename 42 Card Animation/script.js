// The below code is called 'Throttling', it means to decrease the number of execution of a function over a period of time
// This throttleFunction code is copied from geeksForGeeks 

const headings = document.querySelector(".headings");

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

headings.addEventListener("mousemove", throttleFunction(() => {
    console.log("Chala")
}, 1000));

