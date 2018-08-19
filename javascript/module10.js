/*
  Написать приложение для работы с REST сервисом,
  все функции делают запрос и возвращают Promise
  с которым потом можно работать.

  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

  - функция getUserById(id) - должна вернуть пользователя с переданным id.

  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

  - функция removeUser(id) - должна удалять из БД юзера по указанному id.

  - функция updateUser(id, user) - должна обновлять данные пользователя по id.
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
  А так же панелью для вывода результатов операций с бэкендом.
*/
  const result = document.querySelector('.result');
  const resultById = document.querySelector('.resultById');
  const resultAddUser = document.querySelector('.resultAddUser');
  let get = document.querySelector('.js-get');
  let getId = document.querySelector('.js-getId');
  const input  = document.querySelector('input');
  const inputAddUserName  = document.querySelector('.js-addUserName');
  const inputAddUserAge  = document.querySelector('.js-addUserAge');
  const inputDeleteUser  = document.querySelector('.js-deleteUser');
  const addUserContainer = document.querySelector('.addUser');
  const btnAddUser = document.querySelector('.js-addUser');
  const btnDeleteUser = document.querySelector('.js-deleteId');
  const inputPostUserName  = document.querySelector('.js-postUserName');
  const inputPostUserAge  = document.querySelector('.js-postUserAge');
  const inputPostUserId  = document.querySelector('.js-postUserId');
  const btnUpdate = document.querySelector('.js-updateUser');
  const resultUpdateUser = document.querySelector('.resultUpdateUser');

// ===============================================getAllUsers

const getAllUsers = () =>{
  event.preventDefault();
  fetch('https://test-users-api.herokuapp.com/users')
  .then(res => {
    if(res.status = 200){
      return res.json();
  }
}).then(data => {
    return data.data;
}).then(arr => {
    arr.map(object =>{
      result.textContent = result.textContent + ' ' + object.name;
  });
})
.catch(error => console.log('ERROR' + error));
};

get.addEventListener('click', getAllUsers);

// ==============================================getIdById

const getIdById = (event) =>{
  event.preventDefault();
  let a = input.value;
  console.log(input.value);
  fetch(`https://test-users-api.herokuapp.com/users/${a}`)
  .then(response => response.json())
  .then(post => {
  return post.data})
  .then(obj => {
    const li = document.createElement('li')
    li.textContent = obj.name;
    resultById.append(li);
})
.catch(error => console.log('ERROR' + error));
}

getId.addEventListener('click', getIdById);

// ===========================================addUser

const addUser = (event) =>{
  event.preventDefault();
  const objUser = {};
  objUser.name = inputAddUserName.value;
  objUser.age = inputAddUserAge.value;
  // console.log(objUser);
  fetch('https://test-users-api.herokuapp.com/users',{
    method: 'POST',
    body: JSON.stringify(objUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
}).then(response => response.json())
  .then(data => {
    return data.data;
  })
  .then( object => {
    resultAddUser.textContent = JSON.stringify(object);
  });
};

btnAddUser.addEventListener('click', addUser);

// ==============================================================removeUser

const removeUser = () =>{
  event.preventDefault();
  const deleteId = inputDeleteUser.value
  fetch(`https://test-users-api.herokuapp.com/users/${deleteId}`, {
    method: 'DELETE'
  }).then(() => alert('success'))
  .catch(error => console.log('ERROR' + error));
}

btnDeleteUser.addEventListener('click', removeUser);

// ======================================================updateUser

const updateUser = () =>{
  event.preventDefault();
  const objUserUpdate = {};
  objUserUpdate.name = inputPostUserName.value;
  objUserUpdate.age = inputPostUserAge.value;
  const updateId = inputPostUserId.value;
  fetch(`https://test-users-api.herokuapp.com/users/${updateId}`, {
    method: 'PUT',
    body: JSON.stringify(objUserUpdate),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {return data.data})
  .then(objUpdate => {
    resultUpdateUser.textContent = JSON.stringify(objUpdate);
  })
}
btnUpdate.addEventListener('click', updateUser);
