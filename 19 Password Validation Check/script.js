const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li")

const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least 1 number
    { regex: /[a-z]/, index: 2 }, // At least 1 lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least 1 special character
    { regex: /[A-Z]/, index: 4 } // At least 1 uppercase letter
];

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class & icon of requirement item if requirement matched 
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check"
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
            requirementItem.classList.remove("valid");
        }
    })
})

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = passwordInput.type === "password" ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
});

