var React = require('react');
var Home = require('./Home');
var Nav = require('./Nav');

class App extends React.Component {
  render(){
    return (
        <div>
            <Nav />
            <main
                className="main-container"
            >
                <Home />
            </main>
        </div>
    );
  }
}

module.exports = App;
