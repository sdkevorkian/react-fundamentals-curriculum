var React = require('react');

class GetWeather extends React.Component{
  render(){
    return(
        <div>
            <input
                id="location"
                className={this.props.col}
                type="text"
                placeholder="Enter Location"
            />
            <button
                className={this.props.col}
                type="submit"
            >
                Get Weather
            </button>
        </div>
    );
  }
}

module.exports = GetWeather;
