var React = require('react');

var Line = React.createClass({
    render: function(){
        var style = {
            background: this.props.color,
            height: this.props.height,
            top: this.props.top
        };

        return (<div className="line" style={style}></div>);
    }
});

module.exports = Line;
