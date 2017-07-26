var React = require('react');
var PropTypes = require('prop-types');

function ForecastPreview(props){
    return (
            <div className='forecast'>
                {props.forecast.map(function(day){
                    var d = new Date(day.dt * 1000);
                    return (
                        <div
                        key={day.dt}
                        className="day">
                        <img
                            className="forecastPreview"
                            src={'./app/images/weather-icons/' + day.weather[0].icon + '.svg'}
                        />
                            <h3>{d.toDateString()}</h3>
                        </div>
                    )
                })}
            </div>
    );
}

module.exports = ForecastPreview;
