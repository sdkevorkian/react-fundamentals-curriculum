var React = require('react');
var GetWeather = require('./GetWeather');
var Link = require('react-router-dom').Link;

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <ul>
          <li>
            <p>
              <Link to='/'> React to the Weather</Link>
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
