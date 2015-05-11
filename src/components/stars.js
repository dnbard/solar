var React = require('react'),
    Star = require('./star'),
    dispatcher = require('../core/dispatcher');

var Stars = React.createClass({
    componentDidMount : function(){
        dispatcher.register(function(payload){
            var stars, width, height;

            if (payload.action !== 'viewspace-mounted'){ return; }

            stars = [];
            width = payload.data.width;
            height = payload.data.height;

            for(var i = 0; i < 750; i ++){
                stars.push(<Star boxWidth={width} boxHeight={height} key={i} />);
            }

            this.setState({ stars: stars });
        }.bind(this));
    },
    getInitialState: function(){
        var stars = [];

        return { stars: stars };
    },
    render: function(){
        return (<div className="stars">{this.state.stars}</div>);
    }
});

module.exports = Stars;
