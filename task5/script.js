document.querySelector('button').addEventListener('click', (event) => {

    let user_data = document.querySelector("input").value;

    console.log("Текст из инпута: " + user_data);
    document.querySelector('#duplicateField').textContent = "Введенный текст: " + user_data;
    user_data = '';

    event.preventDefault();

});