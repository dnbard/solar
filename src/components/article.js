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

            if (this.state.selectedPlanet === data.name){
                this.setState({ selectedPlanet: null });
            } else {
                this.setState({ selectedPlanet: data.name });
            }
        }.bind(this));
    },
    render: function(){
        var selectedArticle = this.state.selectedPlanet || 'solar',
            articleText = (articlesData[selectedArticle] || []).map(function(node, index){
                var nodeClass = node.class || 'article-node__default';
                return (<div key={index} className={nodeClass}>{node.text}</div>);
            });

        return (<div className="article">{articleText}</div>);
    }
});

module.exports = Article;
