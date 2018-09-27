var Gyro = (function() {

    var alpha;
    var beta;
    var gamma;
    var accAlpha;
    var accBeta;
    var accGamma;

    function init() {
        window.onload = function(e) {
            window.addEventListener("deviceorientation", handleOrientation, true);
            window.addEventListener("devicemotion", handleMotion, true)
            alpha = document.querySelector(".alpha");
            beta = document.querySelector(".beta");
            gamma = document.querySelector(".gamma");
            accAlpha = document.querySelector(".accAlpha");
            accBeta = document.querySelector(".accBeta");
            accGamma = document.querySelector(".accGamma");
        }
    }

    function handleOrientation(e) {
        alpha.innerHTML = "z: " + e.alpha;
        beta.innerHTML = "x: " + e.beta;
        gamma.innerHTML = "y: " + e.gamma;
    }

    function handleMotion(e) {
        accAlpha.innerHTML = e.acceleration.x;
        accBeta.innerHTML = e.acceleration.y;
        accGamma.innerHTML = e.acceleration.z;
    }

    return {
        init
    }
})();

Gyro.init();