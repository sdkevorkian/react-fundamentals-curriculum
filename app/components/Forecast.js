var React = require('react');
var Loading = require('./Loading');
var api = require('../utils/api');
var queryString = require('query-string');
var ForecastPreview = require('./ForecastPreview');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            forecast: null,
            loading: true
        };
    }

    componentDidMount() {
        this.city = queryString.parse(this.props.location.search).city;
        this.getForecast(this.city);
    }
    componentWillReceiveProps(nextProps) {
        this.city = queryString.parse(nextProps.location.search).city;
        this.getForecast(this.city);
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
        var forecast = this.state.forecast;
        return(
           <div
                className = "container"
           >
                {this.state.loading
                    ? <Loading
                    text="Loading"
                    speed='30'
                    />
                    :<div>
                        <h2>{this.city}</h2>
                        <ForecastPreview
                            forecast = {forecast.list}
                        />
                    </div>}
           </div>
         );
    }
}

module.exports = Forecast;
