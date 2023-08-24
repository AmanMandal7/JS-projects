const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const API_KEY = "06c380a418fe587a137dfeba46351232";

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });
        console.log(fiveDaysForecast);
    }).catch(() => {
        alert("An error occured while fetching the weather forecast!")
    });
}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); //remove the extra spaces
    if (!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=06c380a418fe587a137dfeba46351232`

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`)
        const { name, lat, lon } = data[0]
        getWeatherDetails(name, lat, lon);
    }).catch(() => {
        alert("An error occured while fetching the coordinates!")
    })
}

searchBtn.addEventListener("click", getCityCoordinates);