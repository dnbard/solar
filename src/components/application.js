var React = require('react'),
    Stars = require('./stars');

var Application = React.createClass({
    render: function(){
        return (<div className="viewspace">
                    <div className="viewspace__dot topleft"></div>
                    <div className="viewspace__dot topright"></div>
                    <div className="viewspace__dot bottomleft"></div>
                    <div className="viewspace__dot bottomright"></div>
                    <Stars />
                </div>);
    }
});

module.exports = Application;
