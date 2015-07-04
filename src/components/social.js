var React = require('react');

var Social = React.createClass({
    render: function(){
        return (<div className="social">
                    <div className="addthis_sharing_toolbox"></div>
                    <div className="source-site">
                        <span>Made by Alex Bardanov. Find more space facts at </span>
                        <a target="_blank" href="http://space-facts.com/">space-facts.com</a>
                    </div>
                </div>);
    }
});
module.exports = Social;
