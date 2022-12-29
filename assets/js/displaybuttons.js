import { displayData } from "./displaydata.js";

export const displayButtons = () => {

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
};
