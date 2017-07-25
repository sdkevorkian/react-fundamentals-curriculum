var React = require('react');

class App extends React.Component {
  render(){
    return (
        <div className="main-container">
          <div className="home">
            <h1>Enter a City and State</h1>
            <form>
              <input
                id="location"
                type="text"
                placeholder="Enter Location"
              />
              <button
                type="submit"
              >
                Get Weather
              </button>
            </form>
            </div>
        </div>
    );
  }
}

module.exports = App;
