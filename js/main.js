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
        var unitf = "&units=imperial"
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + key + unit;
        var apiURLf = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + key + unitf;
        
        console.log(apiURL);

        console.log(apiURLf);

        $.getJSON(apiURL, function (result) {
            $(".weather-place").append(result.name);
            $(".weather-temperature").prepend(result.main.temp);

            $(".weather-min-temperature").append(result.main.temp_min);
            $(".weather-max-temperature").append(result.main.temp_max);
            $(".weather-humidity").append(result.main.humidity);
            $(".weather-description").append(result.weather[0].main + ": " + result.weather[0].description);
            $(".weather-icon").append("<img src='http://openweathermap.org/img/w/" + result.weather[0].icon +".png'>");
            
            $.getJSON(apiURLf, function (result) {
                $(".farenheit").prepend(result.main.temp);

                $("#toggle").on("click", function () {

                    $(".farenheit").toggleClass('hide');

                    $(".celcius").toggleClass('hide');

                });

            });

        });

    });

});
