const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const API_KEY = "";

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); //remove the extra spaces
    if (!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`

    console.log(cityName);
}

searchBtn.addEventListener("click", getCityCoordinates);