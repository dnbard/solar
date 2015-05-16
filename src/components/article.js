var React = require('react'),
    articlesData = require('../data/articles'),
    dispatcher = require('../core/dispatcher');

var Article = React.createClass({
    getInitialState: function(){
        return {
            selectedPlanet: null
        };
    },
    componentDidMount: function(){
        dispatcher.register(function(data){
            if (data.action !== 'planet-select'){
                return;
            }

            this.setState({ selectedPlanet: data.name });
        }.bind(this));
    },
    render: function(){
        var selectedArticle = this.state.selectedPlanet || 'solar',
            articleText = (articlesData[selectedArticle] || []).map(function(node){
                var nodeClass = node.class || null;
                return (<div className={nodeClass}>{node.text}</div>);
            });

        return (<div className="article">{articleText}</div>);
    }
});

module.exports = Article;
