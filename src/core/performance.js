var dispatcher = require('./dispatcher'),
    isChrome = !!window.chrome && !isOpera;

exports.calculate = function(){
    if (!isChrome){
        dispatcher.dispatch({ action: 'frame-stop' });
    }
}
