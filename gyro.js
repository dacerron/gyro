var Gyro = (function() {

    var alpha;
    var beta;
    var gamma;

    function init() {
        window.onload = function(e) {
            window.addEventListener("deviceorientation", handleOrientation, true);
            alpha = document.querySelector(".alpha");
            beta = document.querySelector(".beta");
            gamma = document.querySelector(".gamma");
        }
    }

    function handleOrientation(e) {
        alpha.innerHTML = e.alpha;
        beta.innerHTML = e.beta;
        gamma.innerHTML = e.gamma;
    }

    return {
        init
    }
})();

Gyro.init();