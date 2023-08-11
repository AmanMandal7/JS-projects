const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result");
const cpuResult = document.querySelector(".cpu_result");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        // Looping through all the images once again
        optionImages.forEach((image2, index2) => {
            // console.log(index, index2); 
            if (index !== index2) {
                image2.classList.remove("active");
            }
        });

        //get the source of clicked image
        let imageSrc = e.target.querySelector("img").src;
        console.log(imageSrc)
    })
})
