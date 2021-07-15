var temp, maxtemp, mintemp, desc, wind, hum, main, day, night;
var x = [
    "clear sky",
    "few clouds",
    "scattered clouds",
    "tornado",
    "shower rain",
    "mist",
    "thunderstorm",
    "rain",
    "snow",
    "haze",
    "broken clouds",
    "drizzle"
];


var y = [
    "icons/sunny.png",
    "icons/overcast.png",
    "icons/cloudy.png",
    "icons/tornado.png",
    "icons/light-rain.png",
    "icons/fog.png",
    "icons/rain.png",
    "icons/snow.png",
    "icons/haze.png",
    "icons/thunderstorm.png",
    "icons/fog.png"
];

var z = [
    "icons/clear night.png",
    "icons/night cloudy.png",
    "icons/night cloudy.png",
    "icons/tornado.png",
    "icons/night rain.png",
    "icons/night fog.png",
    "icons/night rain.png",
    "icons/snow.png",
    "icons/night haze.png",
    "icons/thunderstorm.png",
    "icons/night fog.png"
    //add the night weather icons 
];

function weather(input) {
    var city = input;
    //alert(city);
    var im = document.querySelector('#icon'); //.src='icons/night cloudy.png';
    var myurl = "https://api.openweathermap.org/data/2.5/weather?";
    var key = "ae121a1d8e877330b5324ff5e2c4067e";
    var url = myurl +"APPID=" + key +"&units=metric&q=" + city; 
    //alert(url);

    fetch(url)
    .then(function (response){
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        temperature = data.main.temp;
        //alert(temperature);
    })
}