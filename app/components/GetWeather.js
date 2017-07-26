var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

class GetWeather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var value = e.target.value;
        this.setState(function(){
            return {
                location: value
            }
        });
    }

    render(){
        var city = this.state.location;
        return(
            <div>
                <input
                    id="location"
                    className={this.props.col}
                    type="text"
                    placeholder="Enter Location"
                    value={this.state.location}
                    onChange = {this.handleChange}
                />
                <Link
                    className={this.props.col + ' button'}
                    to={{
                        pathname: '/forecast',
                        search: '?city=' + city
                    }}
                >
                    Get Weather
                </Link>
            </div>
        );
    }
}

GetWeather.PropTypes= {
    col: PropTypes.string
}

module.exports = GetWeather;
