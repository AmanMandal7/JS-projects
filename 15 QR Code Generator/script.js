const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrInput = document.querySelector(".form input");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // if there nothing inside input then return from here
    console.log(qrValue);
    wrapper.classList.add("active");
})
