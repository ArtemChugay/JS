
// Задание №1
// let string = 'Hello! I love javascript becouse it is my life';
// let arr = [];
// arr = string.split(' ');
// console.log(string.split(' '));
// console.log(arr.length);
// let max = arr.length;
// // console.log(max);
// for (let i = 0; i < max; i += 1) {
//   console.log(arr[i]);
// };
// for (let i = 0; i < max; i += 2) {
//   console.log(arr[i]);
// }
// =========================================
// Задание №4

// const numbers = [12, 15, 25, 37, 41];
// const Input = prompt('Введите цифру меджу 12 и 41', '');
// console.log(typeof Input);
// if (!isNaN(Input)){
//   let InputNumber = Number(Input);
//   let max = numbers.length;
//   // console.log(max);
//   // for (let i = 0; i <= max; i += 1) {
//     if (numbers.includes(InputNumber)){
//       alert('Pozdravlyaem, vu vigrali');
//
//     }else {
//       alert('Sojaleem, vu ne ygadali');
//       // break;
//     }
//   }else {
//   alert('Vvedeno ne chislo')
// }

// =========================================================

// Задание №5
/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num.
  В результате получается новый массив, только с подходящими
  числами.
*/
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// let arr = [];
//
// const max = numbers.length;
// for( i = 0; i < max; i += 1){
//   if (numbers[i] > num) {
//     arr.push(numbers[i]);
//     console.log(arr);
//   }
// }
// ===================================

// Zadanie 6
/*
  Написать скрипт, который проверяет произвольную строку
  и находит самое длинное слово в строке.
*/

// const string = "May the force be with you";
// let longestWord = 0;
// const arr = string.split(' ');
// console.log(arr);
// for( i = 0; i < arr.length; i += 1){
//   if ( arr[i].length > longestWord ){
//     longestWord = arr[i].length;
//     // console.log(arr[i]);
//   }
//
// }
// console.log(longestWord);

// Доделать
// ===========================================================

// Задание 7
/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100.

  Если посетитель ввёл другое число –
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо
  посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.
*/
// let num;
// let s;
// do {
//   num = prompt('Vvedite chislo', '');
//   s = Number(num);
//   if( num === null){
//     break;
//   }
// } while ( num < 100 || isNaN(s));

// Задание 8
/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt
    и сохраняет их в массиве.

  - Заканчивает запрашивать числа, как только посетитель
    введёт пустую строку, не число или нажмёт Cancel.

  - При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
*/

// console.log(Number(' '));
// console.log(typeof Number(' '));


let num;
let s;
let arr = [];
let max;
let sum = 0;
do {
  num = prompt('Vvedite chislo');
  s = Number(num);
  if( num === null || num === ' '){
    break;
  }
  if( !isNaN(s) ){
    arr.push(s);

    console.log(arr);
  }

} while (!isNaN(s) || num >= 0 || num !== null);
// console.log(s);
max = arr.length;
for (i = 0; i < max; i +=1){
  // console.log( typeof arr[i]);
  sum += arr[i];
}
console.log(sum);
