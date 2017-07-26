var React = require('react');
var Home = require('./Home');
var Nav = require('./Nav');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render(){
    return (
        <Router>
                <main
                    className="main-container"
                >
                <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/forecast' component={Forecast} />
                        <Route render={function(){
                            return <p>Not found</p>
                        }} />
                    </Switch>
                </main>
        </Router>
    );
  }
}

module.exports = App;
