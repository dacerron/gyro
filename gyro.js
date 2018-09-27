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
        alpha.innerHTML = "z rot: " + e.alpha;
        beta.innerHTML = "x rot: " + e.beta;
        gamma.innerHTML = "y rot: " + e.gamma;
    }

    function handleMotion(e) {
        accAlpha.innerHTML = "x acc:" + e.acceleration.x;
        accBeta.innerHTML = "y acc:" + e.acceleration.y;
        accGamma.innerHTML = "z acc:" + e.acceleration.z;
    }

    return {
        init
    }
})();

Gyro.init();