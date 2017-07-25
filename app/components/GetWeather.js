var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class GetWeather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        var value = e.target.value;
        this.setState(function(){
            return {
                location: value
            }
        });
    }

    handleSubmit(e){
        api.getCurrentWeather(this.state.location).then(function(results){console.log(results)});
    }

    render(){
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
                <button
                    className={this.props.col}
                    type="submit"
                    onClick = {this.handleSubmit}
                >
                    Get Weather
                </button>
            </div>
        );
    }
}

GetWeather.PropTypes= {
    col: PropTypes.string
}

module.exports = GetWeather;
