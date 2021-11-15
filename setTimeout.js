
// state

let countdown;
let seconds = 10;
window.onload = main;

function main() {
    addEventListener();
}

function addEventListener() {
    const buttonStart = document.getElementById('start');
    const buttonStop = document.getElementById('stop');
    buttonStart.onclick = startCountdown;
    buttonStop.onclick = stopCountdown;
}


function startCountdown(){
    if(!countdown) {
    countdown = setInterval(handleTick, 1000);
    }
}

function stopCountdown(){
    clearInterval(countdown);
    console.log('STOP');
}

function handleTick(){
    seconds -=1;
    console.log('TICK', seconds);
    if (seconds === 0) {
        stopCountdown();
    }
}

