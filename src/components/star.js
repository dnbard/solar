var React = require('react');

var Star = React.createClass({
    getInitialState: function(){
        return {
            left: Math.random() * 1080,
            top: Math.random() * 930,
            type: Math.random() > 0.9 ? 'big' : ''
        }
    },
    render: function(){
        var style = {
            left: this.state.left + 'px',
            top: this.state.top + 'px'
        }, className = this.state.type ? 'star ' + this.state.type : 'star';

        return (<div className={className} style={style}></div>);
    }
});

module.exports = Star;
