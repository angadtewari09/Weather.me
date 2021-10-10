var temp, maxtemp, mintemp, desc, wind, hum, main, day, night, target=0, feels_like;
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
    "icons/thunderstorm.png",
    "icons/rain.png",
    "icons/snow.png",
    "icons/haze.png",
    "icons/cloudy.png",
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
    target = 1;
    if(input === "") {
        alert("Enter a City!!");
    }
    var city = input;
    
    var img = document.querySelector('#icon'); //.src='icons/night cloudy.png';
    var myurl = "https://api.openweathermap.org/data/2.5/weather?";
    var key = "ae121a1d8e877330b5324ff5e2c4067e";
    var url = myurl +"APPID=" + key +"&units=metric&q=" + city; 

    fetch(url)
    .then(function (response){
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        temp = data.main.temp;
        mintemp = data.main.temp_min;
        maxtemp = data.main.temp_max;
        feels_like = data.main.feels_like;
        document.getElementById('deg').innerHTML = Math.round(data.main.temp) + "&deg; C";
        document.querySelector('#min').innerHTML = Math.round(data.main.temp_min) + "&deg; C";
        document.querySelector('#max').innerHTML = Math.round(data.main.temp_max) + "&deg; C";
        document.getElementById('wind').innerHTML = Math.round(data.wind.speed) + "mph";
        document.getElementById('humidity').innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector("#feels_like").innerHTML = Math.round(feels_like) + "&deg; C";

        desc = data.weather[0].description;
        document.getElementById('description').innerHTML = desc;
        var den = data.dt;
        day = data.sys.sunrise;
        night = data.sys.sunset;
        if( den>=night){
            switch(desc){
                case x[0]:
                    img.src = z[0];
                    break;
                case x[1]:
                    img.src = z[1];
                    break;
                case x[2]:
                    img.src = z[2];
                    break;
                case x[3]:
                    img.src = z[3];
                    break;
                case x[4]:
                    img.src = z[4];
                    break;
                case x[5]:
                    img.src = z[5];
                    break;
                case x[6]:
                    img.src = z[6];
                    break;
                case x[7]:
                    img.src = z[7];
                    break;
                case x[8]:
                    img.src = z[8];
                    break;
                case x[9]:
                    img.src = z[9];
                    break;
                case x[10]:
                    img.src = z[10];
                    break;
                case x[11]:
                    img.src = z[11];
                    break;
                case x[12]:
                    img.src = z[12];
                    break;    
            }


        }else if(den >=day) {
            switch(desc){
                case x[0]:
                    img.src = y[0];
                    break;
                case x[1]:
                    img.src = y[1];
                    break;
                case x[2]:
                    img.src = y[2];
                    break;
                case x[3]:
                    img.src = y[3];
                    break;
                case x[4]:
                    img.src = y[4];
                    break;
                case x[5]:
                    img.src = y[5];
                    break;
                case x[6]:
                    img.src = y[6];
                    break;
                case x[7]:
                    img.src = y[7];
                    break;
                case x[8]:
                    img.src = y[8];
                    break;
                case x[9]:
                    img.src = y[9];
                    break;
                case x[10]:
                    img.src = y[10];
                    break;
                case x[11]:
                    img.src = y[11];
                    break;
                case x[12]:
                    img.src = y[12];
                    break;
            }
        }

    })
    .catch(error => console.log(error));
}
//End of function 

//function to convert into fahrenheit
function converter(temperature) {
    if(target === 0) {
        alert("ENTER SOME CITY!!");
    }
    else if(temperature == 'fahrenheit') {
        var far = (temp * 9/5) +32;
        var min_far = (mintemp * 9/5) +32;
        var max_far = (maxtemp * 9/5) +32;
        var feel_far = (feels_like * 9/5) +32;

        document.getElementById('deg').innerHTML = Math.round(far) + "&deg; F";
        document.querySelector('#min').innerHTML = Math.round(min_far) + "&deg; F";
        document.querySelector('#max').innerHTML = Math.round(max_far) + "&deg; F";
        document.querySelector("#feels_like").innerHTML = Math.round(feel_far) + "&deg; F";
    }else {
        document.getElementById('deg').innerHTML = Math.round(temp) + "&deg; C";
        document.querySelector('#min').innerHTML = Math.round(mintemp) + "&deg; C";
        document.querySelector('#max').innerHTML = Math.round(maxtemp) + "&deg; C";
        document.querySelector("#feels_like").innerHTML = Math.round(feels_like) + "&deg; C";
    }
}

