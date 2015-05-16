var React = require('react'),
    Particle = require('./particle'),
    Line = require('./line'),
    PlanetsData = require('../data/planets'),
    dispatcher = require('../core/dispatcher'),
    uuid = require('node-uuid').v4;

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
            id: uuid(),
            lines: lines,
            particles: particles,
            data: data,
            authmosphere: data.authmosphere || null,
            selected: false
        };
    },
    componentDidMount: function(){
        dispatcher.register(function(data){
            if (data.action !== 'planet-select'){ return; }

            this.setState({ selected: this.state.id === data.id });
        }.bind(this));
    },
    onPlanetClick: function(){
        dispatcher.dispatch({ action: 'planet-select', id: this.state.id });
    },
    render: function(){
        var boxShadow = [];
        if (this.state.authmosphere){
            boxShadow.push(this.state.authmosphere);
        }
        if (this.state.selected){
            boxShadow.push('0 0 0 20px rgba(255, 255, 255, 0.3)');
        }
        var style = {
            width: this.state.data.size + 'px',
            height: this.state.data.size + 'px',
            left: this.props.left + 'px',
            margin: (this.props.boxHeight - this.state.data.size) * 0.5 + 'px 0px',
            background: this.state.data.color,
            boxShadow: boxShadow.join(',')
        }, shadowStyle = {
            marginLeft: parseInt(this.state.data.size) * 0.5 + 'px',
            width: parseInt(this.state.data.size) * 0.5 + 'px',
            height: this.state.data.size + 'px'
        }, particles = [];

        return (<div className="planet" onClick={this.onPlanetClick} style={style}>
                    <div className="shadow" style={shadowStyle}></div>
                    {this.state.particles}
                    {this.state.lines}
                </div>);
    }
});

module.exports = Planet;
