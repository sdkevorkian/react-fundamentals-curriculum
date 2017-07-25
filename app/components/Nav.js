var React = require('react');
var GetWeather = require('./GetWeather');

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <ul>
          <li>
            <p
              className="nav-title"
            >
              React to the Weather
            </p>
          </li>
          <li>
            <GetWeather />
          </li>
        </ul>
      </nav>
    );
  }
}

module.exports = Nav;
