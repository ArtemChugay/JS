'use strict'

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/


// const Account = function (login, email, friendsCount) {
//   this.Login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }
//
// Account.prototype.getAccountInfo = function(){
//   console.log(`Login ${this.Login}, email ${this.email} and he has friends ${this.friendsCount}`);
// }
//
// const a = new Account ('Artem.Chugay', 't_e_m_a23@gmail.com', 33);
//
// console.log(a);
// a.getAccountInfo();
//
// const b = new Account ('Anna.Schcur', 'anna@gmail.com', 22);
// console.log(b);
// b.getAccountInfo();



/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string = "") {
//   this.value = string;
// }
//
// StringBuilder.prototype.getValue = function(){
//   console.log(this.value);
// }
//
//
// StringBuilder.prototype.append = function(str){
//   this.value = this.value + str;
// }
//
//
// StringBuilder.prototype.prepend = function(str){
//   this.value = str + this.value;
// }
//
//
// StringBuilder.prototype.pad = function(str){
//   this.value = str + this.value + str;
// }
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='




/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//   constructor(maxSpeed) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//
//         - maxSpeed - для хранения максимальной скорости
//
//         - running - для отслеживания заведен ли автомобиль,
//           возможные значения true или false. Изначально false.
//
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }
//
//   turnOn() {
//     this.running = true;
//     return this.running;
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }
//
//   turnOff() {
//     this.running = false;
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }
//
//   accelerate(spd) {
//     if (spd < this.maxSpeed){
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }
//
//   decelerate(spd) {
//     if (spd < this.maxSpeed && spd > 0){
//       this.speed = spd;
//     }
//     return this.speed;
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }
//
//   drive(hours) {
//     if(this.running){
//       this.distance = this.speed * hours;
//     }
//     return this.distance;
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
//
//   static getSpecs (car){
//     console.log( 'maxSpeed :' + this.maxSpeed + ', Zavedena:' + this.running  + ', Distance:' + this.distance );
//   }
// }

// const a = new Car(120);
//
// console.log(a);
//
// a.turnOn();
// console.log(a);
//
// a.accelerate(33);
// console.log(a);
//
// a.drive(9);
// console.log(a);
//
// Car.getSpecs(a);

/*
  Добавьте классу Car свойство value - цена автомобиля.

  Добавьте классу Car использование геттеров и сеттеров для свойства value.

  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят

  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value

  Использование выглядит следующим образом:

  const myCar = new Car(50, 2000);

  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
  constructor(maxSpeed, value) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this._value = value;
  }
  turnOn() {
    this.running = true;
    return this.running;
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd < this.maxSpeed){
      this.speed = spd;
    }
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd < this.maxSpeed && spd > 0){
      this.speed = spd;
    }
    return this.speed;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if(this.running){
      this.distance = this.speed * hours;
    }
    return this.distance;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }

  get value(){
    return this._value;
  }

  set value(value){
     this._value = value;
  }
}

const myCar = new Car(50, 2000);

console.log(myCar.value); // 2000
myCar.value = 4000;
console.log(myCar.value); // 4000
