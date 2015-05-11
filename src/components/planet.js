var React = require('react'),
    Particle = require('./particle'),
    PlanetsData = require('../data/planets');

var Planet = React.createClass({
    getInitialState: function(){
        var particles = [],
            data = PlanetsData[this.props.name];

        for(var i = 0; i < data.particles.length; i ++){
            for(var j = 0; j < data.particles[i].count; j ++){
                particles.push(<Particle key={i+':'+j} length={data.size} size={data.size * data.particles[i].size}
                    speed={data.particles[i].speed} color={data.particles[i].color} layer={data.particles[i].layer}/>);
            }
        }

        return {
            particles: particles,
            data: data
        };
    },
    render: function(){
        var style = {
            width: this.state.data.size + 'px',
            height: this.state.data.size + 'px',
            left: this.props.left + 'px',
            margin: (this.props.boxHeight - this.state.data.size) * 0.5 + 'px 0px',
            background: this.state.data.color
        }, shadowStyle = {
            marginLeft: parseInt(this.state.data.size) * 0.5 + 'px',
            width: parseInt(this.state.data.size) * 0.5 + 'px',
            height: this.state.data.size + 'px'
        }, particles = [];

        return (<div className="planet" style={style}>
                    <div className="shadow" style={shadowStyle}></div>
                    {this.state.particles}
                </div>);
    }
});

module.exports = Planet;
