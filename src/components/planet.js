var React = require('react'),
    Particle = require('./particle'),
    Line = require('./line'),
    PlanetsData = require('../data/planets');

var Planet = React.createClass({
    getInitialState: function(){
        var particles = [],
            lines = [],
            data = PlanetsData[this.props.name],
            line, particle;

        for(var i = 0; i < (data.lines || []).length; i ++){
            line = data.lines[i];
            lines.push(<Line key={'line:' + i} top={line.top} height={line.height} color={line.color}></Line>);
        }

        for(var i = 0; i < (data.particles || []).length; i ++){
            particle = data.particles[i];
            for(var j = 0; j < data.particles[i].count; j ++){
                particles.push(<Particle key={'particle:' + i + ',' + j} length={data.size} size={data.size * particle.size}
                    speed={particle.speed} color={particle.color} layer={particle.layer}/>);
            }
        }

        return {
            lines: lines,
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
                    {this.state.lines}
                </div>);
    }
});

module.exports = Planet;
