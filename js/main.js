

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
        
       
        $('.weather-temperature').openWeather({
            key: 'b1718382b89460b2bb6d073e2e688b60',
            lat: lat,
            lng: lng,
            units: "c",
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
        
       var temp = 25;
       var celsius = temp;
       var fahr = (1.8 * temp + 32);
       var switch_ = new Boolean(false);

       $("#toggle").on("click", function () {
           switch_ = !switch_;
           var temp = switch_ == true ? celsius + " °C" : fahr + " °F";
           $("#temp").text(temp);
       });

    });

     
    
    
});


