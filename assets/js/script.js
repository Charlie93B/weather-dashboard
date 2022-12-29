import { requestApiData } from "./apirequest.js";
import { getForecast } from "./getforecast.js";

// auto-invoking function

(async function() {

    // using new york as placeholder for testing

    let weatherData = await requestApiData('new york');

    console.log(weatherData);

    let forecast = getForecast(weatherData);

    // generate todays weather data display

    const todaysWeatherDisplay = document.getElementById("today");
    const todaysForecastDisplay = $("#forecast");

    todaysWeatherDisplay.innerText = `${forecast.todaysWeather.name} ${forecast.todaysWeather.date}`;

    for(let i = 0; i < forecast.nextFiveDaysWeather.length; i++) {

        let divEl = $('<div>');
        let dateEl = document.createElement("p");
        let tempEl = document.createElement("p");
        let windEl = document.createElement("p");
        let humidEl = document.createElement("p");

        dateEl.innerText = forecast.nextFiveDaysWeather[i].date;
        tempEl.innerText = `Temperature: ${forecast.nextFiveDaysWeather[i].temp} C`;
        windEl.innerText = `Wind: ${forecast.nextFiveDaysWeather[i].wind} mph`;
        humidEl.innerText = `Humidity: ${forecast.nextFiveDaysWeather[i].humidity}%`;

        divEl.append(dateEl, tempEl, windEl, humidEl);

        todaysForecastDisplay.append(divEl);


    };


})();