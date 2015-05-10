var React = require('react'),
    Star = require('./star');

var Stars = React.createClass({
    getInitialState: function(){
        var stars = [];

        for(var i = 0; i < 750; i ++){
            stars.push(<Star key={i} />);
        }
        return { stars: stars };
    },
    render: function(){
        return (<div className="stars">{this.state.stars}</div>);
    }
});

module.exports = Stars;
