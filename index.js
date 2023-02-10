console.log("Hello World");

var timerObj = document.getElementById("timer");
var startBtnObj = document.getElementById("start-btn");
var resetBtnObj = document.getElementById("reset-btn");
var isTimerRunning = false;
var interval;

resetBtnObj.addEventListener("click", function () {
  console.log("Reset Button Clicked");
  timerObj.textContent = "00:00";
});

startBtnObj.addEventListener("click", () => {
  console.log("Start Button Clicked");
  if (isTimerRunning) {
    startBtnObj.textContent = "START";
    isTimerRunning = false;
    clearInterval();
  } else {
    startBtnObj.textContent = "STOP";
    isTimerRunning = true;
    interval = setInterval(function () {
      console.log("Hi");
    }, 1000);
  }
});
