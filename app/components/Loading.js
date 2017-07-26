var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          text: props.text
        }
    }
    componentDidMount() {
        var stopper = this.props.text + '...';
        this.interval = window.setInterval(function(){
            if (this.state.text === stopper){
                this.setState(function(){
                    return {
                        text: this.props.text
                    };
                });
            }
            this.setState(function(prevState){
                return {
                    text: prevState.text + '.'
                };
            });
        }.bind(this), this.props.speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render(){
        return(
            <h2 className = 'loading'>{this.state.text}</h2>
        );
    }
}

Loading.PropTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number
}

Loading.defaultProps = {
    text: 'loading',
    speed: 300
}

module.exports = Loading;
