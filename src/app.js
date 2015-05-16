var React = require('react'),
    applicationNode = document.querySelector('.application'),
    Application = require('./components/application'),
    dispatcher = require('./core/dispatcher'),
    performance = require('./core/performance'),
    PerformanceAlert = require('./components/performanceAlert'),
    Article = require('./components/article'),
    isAnimated = true;

React.render(<div>
                <Application/>
                <PerformanceAlert />
                <Article />
             </div>, applicationNode);

function renderAnimationFrame(){
    dispatcher.dispatch({ action: 'frame' });
    if (isAnimated){
        requestAnimationFrame(renderAnimationFrame);
    }
}

dispatcher.register(function(payload){
    if (payload.action !== 'frame-stop'){ return; }

    isAnimated = false;
});

performance.calculate();

requestAnimationFrame(renderAnimationFrame);
