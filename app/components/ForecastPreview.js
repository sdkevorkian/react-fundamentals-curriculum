var React = require('react');
var PropTypes = require('prop-types');
var helpers = require('../utils/helpers');
var getDate = helpers.getDate;
var Link = require('react-router-dom').Link;

function ForecastPreview(props){
    return (
            <div className='forecast'>
                {props.forecast.map(function(day){
                    day.city = props.city;
                    return (
                        <div
                            key={day.dt}
                            className="day">
                            <Link
                            to={{
                                pathname: '/detail/' + props.city,
                                state: day
                            }}>
                                <img
                                    className="forecastPreview"
                                    src={'./app/images/weather-icons/' + day.weather[0].icon + '.svg'}
                                />
                                <h3>{getDate(day.dt)}</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
    );
}

module.exports = ForecastPreview;
