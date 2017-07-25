var axios = require('axios');
var API_KEY ='442d640bc37e3509f97eb9305a2905f8';

function getCurrentWeather(location){
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${API_KEY}`)
        .then(function(weather){
            return weather.data;
        }).catch(function(err){
            console.warn(err);
            return err;
        });
}

function get5DayForecast(location){
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${API_KEY}&cnt=5`)
        .then(function(forecast){
            return forecast.data;
        }).catch(function(err){
            console.warn(err);
            return err;
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    get5DayForecast: get5DayForecast
};
