  //
  // Сеть фастфудов предлагает несколько видов гамбургеров.
  //
  // Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	// - маленькая (+30 денег, +50 калорий)
	// - большая (+50 денег, +100 калорий)
  //
  // Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	// - сыром (+15 денег, +20 калорий)
	// - салатом (+20 денег, +5 калорий)
	// - мясом (+35 денег, +15 калорий)
  //
  // Дополнительно, гамбургер можно:
	// - посыпать приправой (+10 денег, +0 калорий)
	// - полить соусом (+15 денег, +5 калорий)
  // Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  // создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  // Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  // указанные методы, которые принимают и возвращают данные указанного типа.


/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {

  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._topping = [];
  }

  addTopping(topping) {
    if(!this._topping.includes(topping)){
      this._topping.push(topping);
    }
  }

  removeTopping(topping) {
    this._topping = this._topping.filter(str => str !== topping );
  }

  get topping() {
     let toppings = this._topping;
     return toppings;
   }

  get size () {
    return this._size;
  }

   get stuffing() {
     return this._stuffing;
   }


  calculatePrice() {
    return Object.values(Hamburger.SIZES[this._size])[0] +
     Object.values(Hamburger.STUFFINGS[this._stuffing])[0] +
      this._topping.reduce((sum, current) => sum + Object.values(Hamburger.TOPPINGS[current])[0], 0);
  }


  calculateCalories() {
    return Object.values(Hamburger.SIZES[this._size])[1] +
    Object.values(Hamburger.STUFFINGS[this._stuffing])[1] +
    this._topping.reduce((sum, current) => sum + Object.values(Hamburger.TOPPINGS[current])[1], 0);
  }
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  }
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// // Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());
console.log("calories with sauce: ", hamburger.calculateCalories());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.topping.length); // 1
