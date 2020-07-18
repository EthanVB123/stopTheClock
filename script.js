console.log('Connected!')
var timeRemaining = 500;
var attempts = 1;
var maxAttempts = 5;
var score = 0;
var targetScore = 50;
var clock = setInterval(tickClock, 10)
var scoreHUD = setInterval(updateScore, 10)
var x = 0
function tickClock() {
    document.getElementsByClassName('mainscore')[0].innerHTML = Math.abs(timeRemaining)
    timeRemaining -= 1
}
function updateScore() {
    document.getElementsByClassName('attempts')[0].innerHTML = 'Attempt '+attempts+' of '+maxAttempts
    document.getElementsByClassName('target')[0].innerHTML = 'Max Score: '+targetScore
    document.getElementsByClassName('score')[0].innerHTML = 'Current Score: '+score
}
function stopClock() {
    clearInterval(clock);
    attempts += 1
    score += Math.abs(timeRemaining);
    while (x < 50000) {
        console.log(x);
        x++;
    }
    x = 0
    timeRemaining = 500
    clock = setInterval(tickClock, 10)


}

document.addEventListener("click", stopClock);