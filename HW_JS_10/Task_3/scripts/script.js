// ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const firstForm = document.forms.firstForm;
const target = document.getElementById('outputContainer');

firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = firstForm.name.value;
    const surnameValue = firstForm.surname.value;
    const ageValue = firstForm.age.value;
    let object = {nameValue, surnameValue, ageValue}

    if (!nameValue || !surnameValue || !ageValue || ageValue <= 0) {
        alert('Будь ласка, заповніть всі поля коректно.');
        return;
    }

    console.log(object);
    target.textContent = object.nameValue + ' ' + object.surnameValue + ' ' + object.ageValue
});

