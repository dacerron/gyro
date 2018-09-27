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
        alpha.innerHTML = "z: " + e.alpha;
        beta.innerHTML = "x: " + e.beta;
        gamma.innerHTML = "y: " + e.gamma;
    }

    return {
        init
    }
})();

Gyro.init();