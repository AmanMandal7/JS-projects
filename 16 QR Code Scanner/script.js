const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const fileInp = form.querySelector("input");
const infoText = form.querySelector("p");

function fetchRequest(formData, file) {
    infoText.innerText = "Scanning QR Code...";
    // sending post request to qr server api 
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        wrapper.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        infoText.innerText = "Upload QR Code to scan";
        wrapper.classList.add("active");
    });
}

fileInp.addEventListener("change", e => {
    let file = e.target.files[0]; // getting user selected file
    let formData = new FormData(); // creating a new FormData object
    formData.append("file", file); // adding selected file to formData
    fetchRequest(formData, file);
})

form.addEventListener("click", () => fileInp.click());