var React = require('react'),
    Stars = require('./stars'),
    Planet = require('./planet'),
    dispatcher = require('../core/dispatcher');

var Application = React.createClass({
    getInitialState: function(){
        return { height: 450 };
    },
    componentDidMount: function(){
        var node = React.findDOMNode(this),
            viewspaceWidth = node.scrollWidth,
            viewspaceHeight = node.scrollHeight;

        dispatcher.dispatch({
            action: 'viewspace-mounted',
            data: {
                width: viewspaceWidth,
                height: viewspaceHeight
            }
        });
    },
    render: function(){
        var style = {
            height: this.state.height + 'px'
        }, height = this.state.height;

        return (<div className="viewspace" style={style}>
                    <Stars />
                    <Planet name="mercury" boxHeight={height} left="50" />
                    <Planet name="venus" boxHeight={height} left="150" />
                    <Planet name="earth" boxHeight={height} left="320" />
                    <Planet name="mars" boxHeight={height} left="495" />
                    <Planet name="jupiter" boxHeight={height} left="600" />
                    <Planet name="saturn" boxHeight={height} left="1000" />
                    <div className="saturn__outer-ring"></div>
                    <div className="saturn__inner-ring"></div>
                    <Planet name="uranus" boxHeight={height} left="1350" />
                    <Planet name="neptune" boxHeight={height} left="1550" />
                </div>);
    }
});

module.exports = Application;
