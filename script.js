// Get Id's from DOM
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let genes = document.getElementsByClassName('genetic-material')

// Event Listener
startBtn.addEventListener('click', startAnimation);
stopBtn.addEventListener('click', stopAnimation);

function startAnimation() {
    for (let i = 0; i < genes.length; i++) {
        genes[i].style.animation = "coil 4s linear infinite " + (0.2 * i) + "s";
    }
}

function stopAnimation() {
    for (var i = 0; i < genes.length; i++)
        genes[i].style.animationPlayState = 'paused';
}