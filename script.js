console.log('Connected!')
timeRemaining = 500;

var clock = setInterval(tickClock, 10)
function tickClock() {
    document.getElementsByClassName('mainscore')[0].innerHTML = timeRemaining
    timeRemaining -= 1
}
function stopClock() {
    clearInterval(clock);
}

document.addEventListener("click", stopClock);