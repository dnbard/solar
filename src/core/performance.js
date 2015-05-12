var dispatcher = require('./dispatcher'),
    isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6;

exports.calculate = function(){
    var lastFrame = new Date();

    dispatcher.register(function(payload){
        var currentFrame = new Date();

        if (payload.action !== 'frame'){ return; }

        if (!isChrome){
            setTimeout(function(){
                dispatcher.dispatch({ action: 'frame-stop' });
            }, 0);
        }
    });
}
