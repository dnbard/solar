var React = require('react'),
    Stars = require('./stars'),
    Planet = require('./planet');

var Application = React.createClass({
    getInitialState: function(){
        return {
            height: 450
        }
    },
    render: function(){
        var style = {
            height: this.state.height + 'px'
        }, height = this.state.height;

        return (<div className="viewspace" style={style}>
                    <div className="viewspace__dot topleft"></div>
                    <div className="viewspace__dot topright"></div>
                    <div className="viewspace__dot bottomleft"></div>
                    <div className="viewspace__dot bottomright"></div>
                    <Stars />
                    <Planet name="mercury" boxHeight={height} left="50" />
                    <Planet name="venus" boxHeight={height} left="150" />
                    <Planet name="earth" boxHeight={height} left="320" />
                    <Planet name="mars" boxHeight={height} left="495" />
                </div>);
    }
});

module.exports = Application;
