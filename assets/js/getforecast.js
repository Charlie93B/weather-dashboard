export const getForecast = (weatherData) => {
    
    let todaysWeather = {

        name: weatherData.city.name,

        // list[0] contains current day/time weather data

        date: weatherData.list[0].dt_txt,

        temp: `Temp: ${weatherData.list[0].main.temp} C`,

        wind: `Wind: ${weatherData.list[0].wind.speed} mph`,

        humidity: `Humidity: ${weatherData.list[0].main.humidity}%`
        
    };

    let weatherForecast = {

        todaysWeather: todaysWeather,

        nextFiveDaysWeather: []

    };    

    // create new moment starting at todays date

    moment(todaysWeather.date).format("YYYY-MM-DD H:mm:ss");

    // loop through weather data for next five days

    for(let i = 1; i < 6; i++) {

        // if there are already 31 days in month > increase month value

        if((moment().format("DD") + i) > 31) {

            moment().add(1, "MM");

        }

        // need to find last forecast intervel which is n-3

        let time = moment(todaysWeather.date).format("HH") - 3; 
        
        // increase date by one day

        const tomorrow  = moment().add(i, 'days').format(`YYYY-MM-DD ${time}:00:00`);

        // find data set matching the next days weather

        let weatherDay = weatherData.list.find(item => item.dt_txt == tomorrow);

        // create an object containing weather data

        let weatherDayData = {

            date: weatherDay.dt_txt,

            temp: `Temp: ${weatherDay.main.temp} C`,

            wind: `Wind: ${weatherDay.wind.speed} mph`,

            humidity: `Humidity: ${weatherDay.main.humidity}%`

        };

        // add data to weather data array

        weatherForecast.nextFiveDaysWeather.push(weatherDayData);

    };

    return weatherForecast;

};