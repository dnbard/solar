var React = require('react'),
    Particle = require('./particle');

var Planet = React.createClass({
    getInitialState: function(){
        var particles = [];

        for(var i = 0; i < this.props.particles; i ++){
            particles.push(<Particle key={i} length={this.props.size} size={this.props.size * 0.11} />);
        }

       return { particles: particles };
    },
    render: function(){
        var style = {
            width: this.props.size + 'px',
            height: this.props.size + 'px',
            left: this.props.left + 'px',
            //top: this.props.top + 'px',
            top: '0px',
            margin: (this.props.boxHeight - this.props.size) * 0.5 + 'px 0px',
            background: this.props.color
        }, shadowStyle = {
            marginLeft: parseInt(this.props.size) * 0.5 + 'px',
            width: parseInt(this.props.size) * 0.5 + 'px',
            height: this.props.size + 'px'
        }, particles = [];

        return (<div className="planet" style={style}>
                    <div className="shadow" style={shadowStyle}></div>
                    {this.state.particles}
                </div>);
    }
});

module.exports = Planet;
