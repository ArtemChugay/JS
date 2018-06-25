'use strict'

// * Есть база данных товаров, в формате "имя-товара":"цена за одну единицу"


function Cashier ( name, productsDatabase ) {
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
  this.name = name;
  this.productsDatabase = productsDatabase;
  // console.log(this.name);
  // console.log(this.productsDatabase);
  this.greet = function () {
    alert( `Здравствуйте, вас обслуживает ${this.name}` );
  }
  this.onSuccess = function () {
    if( this['changeAmount'] > 0 ){
      alert(`Спасибо за покупку, ваша сдача ${this['changeAmount']}`);
    } else{
        alert(`Спасибо за покупку`);
      }
  }
  this.onError = function () {
    alert('Очень жаль, вам не хватает денег на покупки');
  }
  this.countTotalPrice = function (order) {
    console.log(typeof(products['bread']));
    console.log(typeof(order['bread']));
    this.totalPrice = products['bread']*order['bread'] + products['milk']*order['milk'] + products['apples']*order['apples'] + products['chicken']*order['chicken'] + products['cheese']*order['cheese'];
    console.log(this.totalPrice);
    return this.totalPrice;
  }
  this.getCustomerMoney = function () {
    this.customerMoney = Number(prompt('Daite dengi'));
    console.log(this['customerMoney']);
  }
  this.countChange = function () {
    if ( this['customerMoney'] >= this['totalPrice']) {
      this['changeAmount'] = this['customerMoney'] - this['totalPrice'];
      return this['changeAmount'];
    } else{
        return this['changeAmount'] = null;
      }
  }
  this.reset = function () {
    this['totalPrice'] = 0;
    this['customerMoney'] = 0;
    this['changeAmount'] = 0;
  }
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  chicken: 0,
  cheese: 1
};

const mango = new Cashier('Mango', products);

console.log(mango.name);
console.log(mango.productsDatabase);
console.log(mango.totalPrice);
console.log(mango.customerMoney);
console.log(mango.changeAmount);

// Вызываем метод greet
mango.greet();

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
mango.countTotalPrice(order);

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney();

// Вызываем countChange для подсчета сдачи
const result = mango.countChange();

// Проверяем что нам вернул countChange
console.log(result);

// Проверяем результат подсчета денег
if(result !== null) {
  mango.onSuccess();
} else {
    mango.onError();
}
// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения полей после reset
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0
