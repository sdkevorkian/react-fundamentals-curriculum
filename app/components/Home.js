var React = require('react');
var GetWeather = require('./GetWeather');

class Home extends React.Component {
  render(){
    return (
      <div className="home">
            <h1>Enter a City and State</h1>
            <div
                className="col-50 center"
             >
                <GetWeather
                    col="col-100"
                />
            </div>
        </div>
    );
  }
}

module.exports = Home;
