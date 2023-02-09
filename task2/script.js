let consoleLog = document.querySelector('#consoleLog'),
    fn_alert = document.querySelector('#alert'),
    fn_prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert("Метод отправки сообщения в консоль браузера");
});
fn_alert.addEventListener('click', () => {
    alert("Функция вывода всплывающего сообщений в браузере");
});
fn_prompt.addEventListener('click', () => {
    alert("Функция запроса пользовательских данных через всплывающее сообщение");
});