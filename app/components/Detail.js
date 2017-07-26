var React = require('react');
var PropTypes = require('prop-types');
var helpers = require('../utils/helpers');
var getDate = helpers.getDate;

function Detail(props){
    var day = props.location.state;
    var date = getDate(day.dt);
    var weather = day.weather[0];
    var temp = day.temp;
    console.log(day);
        return (
            <div
            className='container'>
                <h1>{date}</h1>
                <div className="center">
                    <img
                        className="forecastPreview"
                        src={'/app/images/weather-icons/' + weather.icon + '.svg'}
                    />
                    <h2>{day.city}</h2>
                    <h3>{weather.description}</h3>
                    <h3>max temp: {Math.round(temp.max)}F</h3>
                    <h3>min temp: {Math.round(temp.min)}F</h3>
                    <h3>humidity: {day.humidity}%</h3>
                </div>
            </div>
        );
}

module.exports = Detail;
