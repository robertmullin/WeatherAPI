$(document).ready(function () {

var the_position = { // ADDED THIS
    lat: 0,
    lng: 0
};
navigator.geolocation.getCurrentPosition(function (position) {

    the_position.lat = position.coords.latitude; // ADDED THIS
    the_position.lng = position.coords.longitude; // ADDED THIS

    console.log(the_position);

    var lat = the_position.lat;
    var lng = the_position.lng;


    var key = "b1718382b89460b2bb6d073e2e688b60";
    var unit = "&units=metric"
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + key + unit;

    console.log(apiURL);

    
        $.getJSON(apiURL, function (result) {
            $( ".weather-place" ).append(result.name);
            $( ".weather-temperature" ).append(result.main.temp);
            $( ".weather-min-temperature" ).append(result.main.temp_min);
            $( ".weather-max-temperature" ).append(result.main.temp_max);
            $( ".weather-description" ).append(result.weather[0].main + ": " + result.weather[0].description);
            $( ".weather-humidity" ).append(result.main.humidity + "%");
            console.log(result.wind.speed);
        });
    


});





});



/*
    $('.celcius').openWeather({
        key: 'b1718382b89460b2bb6d073e2e688b60',
        lat: lat,
        lng: lng,
        units: 'c',
        descriptionTarget: '.weather-description',
        windSpeedTarget: '.weather-wind-speed',
        minTemperatureTarget: '.weather-min-temperature',
        maxTemperatureTarget: '.weather-max-temperature',
        humidityTarget: '.weather-humidity',
        sunriseTarget: '.weather-sunrise',
        sunsetTarget: '.weather-sunset',
        placeTarget: '.weather-place',
        iconTarget: '.weather-icon',
        customIcons: '../src/img/icons/weather/',
        success: function (data) {
            // show weather
            $('.weather-wrapper').show();
            console.log(data);
        },
        error: function (data) {
            console.log(data.error);
            $('.weather-wrapper').remove();
        }


    });
    
    var currentTempInCelsius = 
    
    $("#tempunit").click(function () {
        var currentTempUnit = $("#tempunit").text();
        var newTempUnit = currentTempUnit == "C" ? "F" : "C";
        $("#tempunit").text(newTempUnit);
        if (newTempUnit == "F") {
            var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
            $("#temp").text(fahTemp + " " + String.fromCharCode(176));
        } else {
            $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
        }
    });


/*var temp = document.getElementById("temp").textContent;
var celsius = temp;
var fahr = (temp * 1.8 + 32);
var switch_ = new Boolean(false);

$("#toggle").on("click", function () {

    console.log(temp);
}); */
