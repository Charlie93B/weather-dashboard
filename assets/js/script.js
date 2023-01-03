import { displayData } from "./displaydata.js";
import { displayButtons } from "./displaybuttons.js";

// auto-invoking function

(function() {

    $("#history").empty();

    if(localStorage.getItem('search')) {

        displayButtons();

    }


    // submit event listener

    document.getElementById('search-form').addEventListener('submit', (event) => {

        event.preventDefault();

        // clear display before new data set requested

        $("#today").empty();
        $("#forecast").empty();

        let countryName = document.getElementById('search-input').value;


        if(localStorage.getItem('search') == null) {

            let nameData = JSON.stringify([countryName]);

            localStorage.setItem('search', nameData);

        }
        else {

            let searchValues = localStorage.getItem('search');

            let searchValuesArray = JSON.parse(searchValues);

            let searchHistory = $("#history");

            searchHistory.empty();

            for(let i = 0; i < searchValuesArray.length; i++) {

                let countryButton = $('<button>');

                countryButton.attr("data-country", searchValuesArray[i]);

                countryButton.on("click", () => {

                    let countryDataName = countryButton.attr("data-country");

                    $("#today").empty();
                    $("#forecast").empty();

                    displayData(countryDataName);

                })

                countryButton.text(searchValuesArray[i]);

                searchHistory.append(countryButton);

            }
            

            searchValuesArray.push(countryName);

            searchValuesArray = JSON.stringify(searchValuesArray);

            localStorage.setItem('search', searchValuesArray);

        }

        displayData(countryName);

        displayButtons();

    });

})();