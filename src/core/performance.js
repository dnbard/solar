var dispatcher = require('./dispatcher'),
    isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
    isChrome = !!window.chrome && !isOpera;

exports.calculate = function(){
    if (!isChrome){
        dispatcher.dispatch({ action: 'frame-stop' });
    }
}
