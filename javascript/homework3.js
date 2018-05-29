'use strict'
/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы

    2) Проверяет валидность логина используя вспомогательную
       функцию checkLoginValidity(login), которая проверяет
       количество символов логина и возвращает true если логин
       подходит под условие длины от 4-х до 16-ти символов
       включительно, и false если не подходит
    3) Если логин не валиден, прекратить исполнение функции addLogin
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    4) Если логин валиден, функция addLogin проверяеть уникальность
       логина с помощью функции checkIfLoginExists(logins, login),
       которая проверяет наличие логина в массиве logins, возвращая
       false если такого логина в массиве еще нет, и true если есть

    5) Если checkIfLoginExists вернет false, addLogin добавляет новый логин
       в logins и возвращает строку 'Логин успешно добавлен!'

    6) Если checkIfLoginExists вернет true, тогда addLogin не добавляет
       логин в массив и возвращает строку 'Такой логин уже используется!'

    Принцип единственной ответственности функции:
    - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false. Больше ничего не делает.
    - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false. Больше ничего не делает.
    - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет,
      возвращая строки указанные в пунктах 5 и 6. Больше ничего не делает.
*/

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let checkLoginValidity = function (login) {
  let logWordCount = login.length;
    if ( 3 < logWordCount && logWordCount < 17 && logWordCount !== null ) {
      login = true;
  } else {
      login = false;
  }
  return login;
}

let checkIfLoginExists = function ( logins, login) {
  let loginCheck;
    if ( logins.includes(login)){
      loginCheck = true;
    } else{
      loginCheck = false;
    }
      console.log(loginCheck);
  return loginCheck;
}

let addLogin = function ( logins, login ){
  if ( !checkLoginValidity(login) ) {
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if ( checkIfLoginExists( logins, login ) ){
    return alert('Такой логин уже используется!');
  } else{
      logins.push(login);
      console.log(logins);
      alert('Логин успешно добавлен!')
    return logins;
    }
}

while (logins.length < 10) {
  let login = prompt( 'Введите логин', " ");
  addLogin(logins, login);
  console.log(logins);
}
