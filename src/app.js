var React = require('react'),
    applicationNode = document.querySelector('.application'),
    Application = require('./components/application'),
    dispatcher = require('./core/dispatcher'),
    performance = require('./core/performance'),
    PerformanceAlert = require('./components/performanceAlert'),
    Article = require('./components/article'),
    Social = require('./components/social'),
    isAnimated = true;

React.render(<div>
                <Application id="aappy"/>
                <PerformanceAlert />
                <Article />
                <Social />
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
