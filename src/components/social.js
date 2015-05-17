var React = require('react');

var Social = React.createClass({
    onInfoClick: function(){
        //show site info via dispatcher
    },
    render: function(){
        return (<div className="social">
                    <div className="addthis_sharing_toolbox"></div>
                    <div className="icon-info" onClick={this.onInfoClick}></div>
                </div>);
    }
});
module.exports = Social;
