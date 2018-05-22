'use strict'

let userInput;
const numbers = [];
let total = 0;
let s;
let max;
do {
  userInput = prompt('Введите число');
  s = Number(userInput);
  if ( userInput === null ) {
    break;
  }

  if (isNaN(s)) {
    alert('Было введено не число, попробуйте еще раз');
  }

  if ( !isNaN(s)) {
    numbers.push(s);
    console.log(numbers);
  }
} while ( userInput !== null);
max = numbers.length;

for (let i = 0; i < max; i +=1) {
  total += numbers[i];
}
console.log(total);
