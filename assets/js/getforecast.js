export const getForecast = (weatherData) => {
    
    let todaysWeather = {

        name: weatherData.city.name,

        // list[0] contains current day/time weather data

        date: weatherData.list[0].dt_txt,

        temp: weatherData.list[0].main.temp,

        wind: weatherData.list[0].wind.speed,

        humidity: weatherData.list[0].main.humidity
        
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

        // increase date by one day

        const tomorrow  = moment().add(i, 'days').format("YYYY-MM-DD 15:00:00");

        console.log(tomorrow);

        // find data set matching the next days weather

        let weatherDay = weatherData.list.find(item => item.dt_txt == tomorrow);

        // create an object containing weather data

        let weatherDayData = {

            date: weatherDay.dt_txt,

            temp: weatherDay.main.temp,

            wind: weatherDay.wind.speed,

            humidity: weatherDay.main.humidity

        };

        // add data to weather data array

        weatherForecast.nextFiveDaysWeather.push(weatherDayData);

        console.log(weatherDay);

    };

    console.log(weatherForecast);

    return weatherForecast;

};