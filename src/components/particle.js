var React = require('react'),
    dispatcher = require('../core/dispatcher');

var Particle = React.createClass({
    getInitialState: function(){
        return {
            left: Math.random() * this.props.length,
            top: Math.random() * this.props.length,
            width: Math.random() * this.props.size * 1.5 + this.props.size,
            height: this.props.size,
            velocity: this.props.speed
        }
    },
    componentDidMount: function(){
        this.dispatcherHandler = function(data){
            if (data.action !== 'frame'){ return };

            if (this.state.left + this.state.width < 0){
                return this.setState({ left: this.props.length });
            }

            this.setState({ left: this.state.left - this.state.velocity });
        }.bind(this);

        dispatcher.register(this.dispatcherHandler);
    },
    componentWillUnmount: function(){
        dispatcher.unregister(this.dispatcherHandler);
    },
    render: function (){
        var style = {
            left: this.state.left + 'px',
            top: this.state.top + 'px',
            width: this.state.width + 'px',
            height: this.state.height + 'px',
            background: this.props.color,
            zIndex: this.props.layer
        };

        return (<div className="particle" style={style}></div>);
    }
});

module.exports = Particle;
