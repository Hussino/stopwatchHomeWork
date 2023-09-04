const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('timer');

var startTime;
var elapsedTime = 0;
var timer;

function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const millisecondsDisplay = Math.floor((milliseconds % 1000)).toString().padStart(2,'0');

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}:${millisecondsDisplay}`;
}

function updateTimer() {
  const elapsedTimeMs = Date.now() - startTime + elapsedTime;
  display.textContent = formatTime(elapsedTimeMs);
}

function startStopwatch() {
  startTime = Date.now();
  timer = setInterval(updateTimer, 10); 
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

