const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
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
        userResult.src = imageSrc;

        //Generating random number for cpu result
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        // Assigning the letters to the selected and randomly generator option
        let cpuValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R", "P", "S"][index];

        //Creating object for all possible outcomes
        let outcomes = {
            RR: "Draw",
            RP: "Computer",
            RS: "You",
            PP: "Draw",
            PR: "You",
            PS: "Computer",
            SS: "Draw",
            SR: "Computer",
            SP: "You"
        };

        let outComeValue = outcomes[userValue + cpuValue];
        result.innerText = userValue === cpuValue ? "Match Draw!!" : `${outComeValue} Won!`;

    })
})
