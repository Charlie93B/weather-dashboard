import { apiKey } from "./apikey.js";

const options = { METHOD: "GET" };


const getGeocode = async (city) => {

    let coordinates = {

        lat: 0,

        lon: 0

    };

    await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`, options)
    .then(response => response.json())
    .then((response) => {

        coordinates.lat = response[0].lat;

        coordinates.lon = response[0].lon;
        console.log(response);

    });

    console.log(coordinates);
    console.log(city);

    return coordinates;

}

export const requestApiData = async (city) => {

    let geoCode = await getGeocode(city);

    let lat = geoCode.lat;

    let lon = geoCode.lon;

    let weatherData = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`, options)
    .then(response => response.json());

    console.log(weatherData);

    return weatherData;

};
