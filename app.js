//setting seconds and tens:
let seconds = 00;
let tens = 00;

//selecting elements:
const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');

const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

//adding events to elements:
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
buttonReset.addEventListener('click', reset);

//to store timer values:
let interval;

//counting function:
function tickTock() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

//START / STOP / RESET functions for existing buttons:
function start() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(tickTock, 10); //seconds seems to be advancing much rapidly, so adding 10 miliseconds!
    console.log('Timer started!');
    buttonStart.classList.add('disabled-start');
    buttonStop.classList.remove('disabled');
    buttonReset.classList.remove('disabled');
    disable(buttonStart);
    enable(buttonStop);
    enable(buttonReset);
}

function stop() {
    clearInterval(interval);
    console.log('Timer stopped!');
    buttonStart.classList.remove('disabled-start');
    buttonStop.classList.add('disabled');
    enable(buttonStart);
    enable(buttonReset);
    disable(buttonStop);
}

function reset() {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    console.log('Reset Timer!');
    buttonStart.classList.remove('disabled-start');
    buttonStop.classList.remove('disabled');
    buttonReset.classList.add('disabled');
    enable(buttonStart);
    enable(buttonStop);
    disable(buttonReset);
}

//functions to desable and re-enable HTML elements (instead 'toggle' function):
function disable(element) {
    element.setAttribute('disabled', '');
}

function enable(element) {
    element.removeAttribute('disabled');
}
