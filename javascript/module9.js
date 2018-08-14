/*
  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени,
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
    с 6 секунд, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.

  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/


let startTime = Date.now();
const btnStart = document.querySelector('.js-start');
const timerString = document.querySelector('.js-time')
const btnReset = document.querySelector('.js-reset');
const btnTakeLap = document.querySelector('.js-take-lap');
const ulLap = document.querySelector('.js-laps');
const li = document.createElement('li');
let minutes;
let seconds;
let milliseconds;
let isActive = false;
let pauseTime = null;
let laps = [];

btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', resetAll);

function resetAll() {
  ulLap.innerHTML = '';
  laps = [];
  isActive = false;
  timerString.textContent = '00:00.0'
  pauseTime = null;
  clearInterval(time);
  btnStart.textContent = 'Start';
}


  function startTimer({target}) {
    startTime = Date.now();
    if ((!isActive) && (btnStart.textContent == 'Start')) {
      console.log('1st');
      isActive = true;
      time = setInterval(function(){
      const current = Date.now();
      deltaTime = current - startTime;
      const timeSS = new Date(deltaTime);
      timerString.textContent = getFormattedTime(timeSS);
      btnStart.textContent = 'Pause';
      return pauseTime;
  }, 100);
}else if ((!isActive) && (btnStart.textContent == 'Continue')) {
    time = setInterval(function(){
    isActive = true;
    const currentTime1 = Date.now();
    const deltaTime1 = currentTime1 - pauseTime;
    const timeSS2 = new Date(deltaTime1);
  timerString.textContent = getFormattedTime(timeSS2);
  btnStart.textContent = 'Pause';
  return pauseTime;
}, 100);
}else if(isActive){
  pauseTime = Date.now();
  clearInterval(time);
  isActive = false;
  btnStart.textContent = 'Continue';
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
