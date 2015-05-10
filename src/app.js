var React = require('react'),
    applicationNode = document.querySelector('.application'),
    Application = require('./components/application'),
    dispatcher = require('./core/dispatcher');

React.render(<Application/>, applicationNode);

function renderAnimationFrame(){
    dispatcher.dispatch({ action: 'frame' });
    requestAnimationFrame(renderAnimationFrame);
}

requestAnimationFrame(renderAnimationFrame);
