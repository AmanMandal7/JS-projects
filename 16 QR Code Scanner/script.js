const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const fileInp = form.querySelector("input");
const infoText = form.querySelector("p");
const copyBtn = wrapper.querySelector(".copy");
const closeBtn = document.querySelector(".close");

function fetchRequest(formData, file) {
    infoText.innerText = "Scanning QR Code...";
    // sending post request to qr server api 
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoText.innerText = result ? "Upload QR Code to scan" : "Couldn't scan QR Code";
        if (!result) return;
        wrapper.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code";
    })
}

copyBtn.addEventListener("click", () => {
    let text = wrapper.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
})

fileInp.addEventListener("change", e => {
    let file = e.target.files[0]; // getting user selected file
    if (!file) return;
    let formData = new FormData(); // creating a new FormData object
    formData.append("file", file); // adding selected file to formData
    fetchRequest(formData, file);
})

form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));