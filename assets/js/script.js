import { requestApiData } from "./apirequest.js";
import { getForecast } from "./getforecast.js";
import { displayData } from "./displaydata.js";

// auto-invoking function

(function() {

    // submit event listener

    document.getElementById('search-form').addEventListener('submit', (event) => {

        event.preventDefault();

        // clear display before new data set requested

        $("#today").empty();
        $("#forecast").empty();

        let countryName = document.getElementById('search-input').value;

        displayData(countryName);

    });


})();