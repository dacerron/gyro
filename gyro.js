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
        alpha.innerHTML = "z rot: " + e.alpha.toFixed(2);
        beta.innerHTML = "x rot: " + e.beta.toFixed(2);
        gamma.innerHTML = "y rot: " + e.gamma.toFixed(2);
    }

    function handleMotion(e) {
        accAlpha.innerHTML = "x acc:" + e.acceleration.x.toFixed(1);
        accBeta.innerHTML = "y acc:" + e.acceleration.y.toFixed(1);
        accGamma.innerHTML = "z acc:" + e.acceleration.z.toFixed(1);
    }

    return {
        init
    }
})();

Gyro.init();