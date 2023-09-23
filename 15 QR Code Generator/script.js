const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // if there nothing inside input then return from here
    generateBtn.innerText = "Generating QR Code..."
    // using qrserver api to generate new qr everytime new value is entered
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"
    })
});

//Required event listener
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})
