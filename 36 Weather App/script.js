const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const API_KEY = "06c380a418fe587a137dfeba46351232";

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); //remove the extra spaces
    if (!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=06c380a418fe587a137dfeba46351232`

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates!")
    })
}

searchBtn.addEventListener("click", getCityCoordinates);