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
                    <Planet boxHeight={height} left="50" top="190" color="#E0B15F" size="57" particles="32" />
                    <Planet boxHeight={height} left="150" top="150" color="#EED4A3" size="141" particles="32" />
                    <Planet boxHeight={height} left="320" top="148" color="#7078A7" size="150" particles="32" />
                    <Planet boxHeight={height} left="495" top="185" color="#EB965B" size="79" particles="32" />
                </div>);
    }
});

module.exports = Application;
