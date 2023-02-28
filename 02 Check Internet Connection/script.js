const popup = document.querySelector(".popup");
const wifiIcon = document.querySelector(".icon i");
const popupTitle = document.querySelector(".popup .title");
const popupDesc = document.querySelector(".popup .desc");
const reconnectBtn = document.querySelector(".reconnect");

let isOnline = true, intervald, timer = 10;

const checkConnection = async () => {
    try {
        //Try to fetch the random data from the API
        //If the status is between 200 and 300 the connection is considered to be online
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        isOnline = response.status >= 200 && response.status < 300;
    } catch (error) {
        isOnline = false;  //If there is any error the connection is offline
    }
    timer = 10;
    clearInterval(intervald);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if (status) { //If the status is true(Online), update icon, title and description accordingly
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the internet."
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove('show'), 2000);
    }

    //If the status is false(Offline), update icon, title and description accordingly
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailabe. We will attempt to reconnect you in <b b > 10</b > seconds."
    popup.className = "popup show";

    intervald = setInterval(() => {
        timer--;
        if (timer === 0) checkConnection(); //If the timer reached 0, check the connection again
        popup.querySelector(".desc b").innerText = timer;
    }, 1000)
}

//Only if isOnline is true, check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000)
reconnectBtn.addEventListener("click", checkConnection);