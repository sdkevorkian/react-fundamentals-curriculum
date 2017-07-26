var React = require('react');
var Loading = require('./Loading');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            forecast: null,
            loading: true
        };
    }

    componentDidMount() {
        var city = queryString.parse(this.props.location.search).city;
        this.getForecast(city);
    }
    componentWillReceiveProps(nextProps) {
        var city = queryString.parse(nextProps.location.search).city;
        this.getForecast(city);
    }
    getForecast(city){
        this.setState(function(){
            return {
                loading: true
            }
        });

        api.get5DayForecast(city).then((weather)=>{
            return this.setState(function(){
               return {
                    forecast: weather,
                    loading: false
                };
            }) ;
        });
    }
    render(){
        return(
           <div
                className = "container"
           >
                {this.state.loading
                    ? <Loading
                    text="Loading"
                    speed='30'
                    />
                    :<p>{JSON.stringify(this.state.forecast)}</p>}
           </div>
         );
    }
}

module.exports = Forecast;
