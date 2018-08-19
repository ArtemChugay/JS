
const btnStart = document.querySelector('.js-start');
const timerString = document.querySelector('.js-time')
const btnReset = document.querySelector('.js-reset');
const btnTakeLap = document.querySelector('.js-take-lap');
const ulLap = document.querySelector('.js-laps');
const li = document.createElement('li');
let timerId;
let startTime
let isActive = false;
let pauseTime = 0;
let timer;
let laps = [];


btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', resetAll);

function resetAll() {
  ulLap.innerHTML = '';
  laps = [];
  isActive = false;
  timerString.textContent = '00:00.0'
  pauseTime = 0;
  clearInterval(timerId);
  btnStart.textContent = 'Start';
}

  function startTimer() {
    startTime = Date.now();
    if (isActive) {
      clearInterval(timerId);
      isActive = false;
      btnStart.textContent = 'Continue';
      pauseTime = timer;
    } else {
      btnStart.textContent = 'Pause';
      isActive = true;
      timerId = setInterval(function() {
        let currentTime = Date.now();
        if (pauseTime > 0) {
          timer = (currentTime - startTime) + pauseTime;
        } else {
          timer = currentTime - startTime;
        };
        let a = new Date(timer);
        timerString.textContent =  getFormattedTime(a);
      }, 100);
    }

}

function getFormattedTime(time) {
  const sss = new Date(time);
  const minutes = addZero(sss.getMinutes());
  const seconds = addZero(sss.getSeconds());
  const milliseconds = Number.parseInt(sss.getMilliseconds()/100);
  function addZero(d) {
    if(d < 10){
      return '0' + d;
    }else {
      return d;
    }
  }
  return `${minutes}:${seconds}.${milliseconds}`;
}

btnTakeLap.addEventListener('click', takeLap);

function takeLap({target}){
  console.log(target);
  const li = document.createElement('li');
  console.log(li);
    li.textContent = timerString.textContent;
    ulLap.append(li);
    laps.push(timerString.textContent);
    console.log(laps);

  return laps;
}
