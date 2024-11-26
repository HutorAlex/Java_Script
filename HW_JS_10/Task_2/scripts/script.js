// j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const message = document.getElementById('message');

checkAgeBtn.addEventListener('click', () => {
    const age = Number(ageInput.value);

    if (isNaN(age) || age <= 0) {
        message.textContent = 'Введіть коректний вік.';
    } else if (age < 18) {
        message.textContent = 'Вам ще немає 18 років.';
    } else {
        message.textContent = 'Ваш вік підходить.';
    }
});