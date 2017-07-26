var React = require('react');
var PropTypes = require('prop-types');
var helpers = require('../utils/helpers');
var getDate = helpers.getDate;

function ForecastPreview(props){
    return (
            <div className='forecast'>
                {props.forecast.map(function(day){
                    // var d = new Date(day.dt * 1000);
                    return (
                        <div
                        key={day.dt}
                        className="day">
                        <img
                            className="forecastPreview"
                            src={'./app/images/weather-icons/' + day.weather[0].icon + '.svg'}
                        />
                            <h3>{getDate(day.dt)}</h3>
                        </div>
                    )
                })}
            </div>
    );
}

module.exports = ForecastPreview;
