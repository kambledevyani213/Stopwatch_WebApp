let timer;
let seconds = 0;
let running = false;

const timeDisplay = document.getElementById('time');
const lapList = document.getElementById('lapList');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear laps
}

function addLap() {
    const lapTime = formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

function updateDisplay() {
    timeDisplay.textContent = formatTime(seconds);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
