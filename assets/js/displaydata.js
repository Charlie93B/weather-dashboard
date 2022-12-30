import { requestApiData } from "./apirequest.js";
import { getForecast } from "./getforecast.js";


export const displayData = async (countryName) => {
    // using new york as placeholder for testing

    let weatherData = await requestApiData(countryName);

    console.log(weatherData);

    let forecast = getForecast(weatherData);

    // generate todays weather data display

    const todaysWeatherDisplay = $("#today");
    const todaysForecastDisplay = $("#forecast");

    // create forecast display for next five days weather forecast

    for(let i = 0; i < forecast.nextFiveDaysWeather.length; i++) {

        let divEl = $('<div>');

        for(const property in forecast.nextFiveDaysWeather[i]) {

            let pEl = $('<p>');

            if(property == "date") {

                let trimmedNextDate = moment(forecast.nextFiveDaysWeather[i].date).format("YYYY-MM-DD");

                pEl.text(trimmedNextDate);

                pEl.addClass("date");

            }

            else {
                
                pEl.text(forecast.nextFiveDaysWeather[i][property]);

            };

            divEl.append(pEl);
        }

        todaysForecastDisplay.append(divEl);


    };

    // display todays weather forecast

    for(const property in forecast.todaysWeather) {
        
        let dataDisplayEl = $('<p>');

        if(property == "date") {

            let trimmedDate = moment(forecast.todaysWeather.date).format("YYYY-MM-DD");

            dataDisplayEl.text(trimmedDate);

        }
        
        else {
            
            dataDisplayEl.text(forecast.todaysWeather[property]);

        };


        todaysWeatherDisplay.append(dataDisplayEl);

    };
}