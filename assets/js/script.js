import { requestApiData } from "./apirequest.js";
import { getForecast } from "./getforecast.js";

// auto-invoking function

(async function() {

    // using new york as placeholder for testing

    let weatherData = await requestApiData('new york');

    console.log(weatherData);

    let forecast = getForecast(weatherData);

    // generate todays weather data display

    const todaysWeatherDisplay = $("#today");
    const todaysForecastDisplay = $("#forecast");

    // todaysWeatherDisplay.innerText = `${forecast.todaysWeather.name} ${forecast.todaysWeather.date}`;

    // create forecast display for next five days weather forecast

    for(let i = 0; i < forecast.nextFiveDaysWeather.length; i++) {

        let divEl = $('<div>');

        for(const property in forecast.nextFiveDaysWeather[i]) {

            let pEl = $('<p>');

            pEl.text(forecast.nextFiveDaysWeather[i][property]);

            divEl.append(pEl);
        }

        todaysForecastDisplay.append(divEl);


    };

    // display todays weather forecast

    for(const property in forecast.todaysWeather) {
        
        let dataDisplayEl = $('<p>');

        dataDisplayEl.text(forecast.todaysWeather[property]);

        todaysWeatherDisplay.append(dataDisplayEl);

    };


})();