document.querySelector('.content a').addEventListener('click', (event) => {

    event.preventDefault();

    let user_data = prompt("Введите новый текст ссылки");

    event.target.textContent = "Новый текст: " + user_data;

});