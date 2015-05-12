var React = require('react'),
    dispatcher = require('../core/dispatcher');

var PerformanceAlert = React.createClass({
    getInitialState: function(){
        return { visible: false };
    },
    componentDidMount: function(){
        dispatcher.register(function(payload){
            if (payload.action !== 'frame-stop'){ return };

            this.setState({ visible: true });
        }.bind(this));
    },
    render: function(){
        var style = { display: this.state.visible ? 'block' : 'none' };

        return (<div style={style} className="performance__alert">Your browser are rendering scene too slow. Try to use Chrome for better performance!</div>);
    }
});

module.exports = PerformanceAlert;
