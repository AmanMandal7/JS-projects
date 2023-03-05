const buttons = document.querySelectorAll(".buttons .btn");
const notificatoins = document.querySelector(".notification");

const toastDetails = {
    success: {
        icon: "fa-circle-check",
        text: "Success: This is success toast."
    },
    error: {
        icon: "fa-circle-xmark",
        text: "Error: This is error toast."
    },
    warning: {
        icon: "fa-triangle-exclamation",
        text: "Warning: This is warning toast."
    },
    info: {
        icon: "fa-circle-info",
        text: "Info: This is information toast."
    }
}

// Function to remove toast after 5 seconds
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createTost = (id) => {

    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];

    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
          <i class="fa-solid ${icon}"></i>
          <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`;

    notificatoins.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createTost(btn.id));
})
