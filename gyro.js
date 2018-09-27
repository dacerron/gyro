var Gyro = (function() {

    var alpha = document.querySelector(".alpha");
    var beta = document.querySelector(".beta");
    var gamma = document.querySelector(".gamma");

    function init() {
        window.addEventListener("deviceorientation", handleOrientation, true)
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