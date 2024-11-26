// kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const tableContainer = document.getElementById('tableContainer');
const tableGenForms = document.forms['tableGenForms'];

tableGenForms.onsubmit = function (e) {
    e.preventDefault();
    const rowsValue = +tableGenForms.rows.value;
    const columnsValue = +tableGenForms.columns.value;
    const contentValue = tableGenForms.content.value;
    console.log(rowsValue, columnsValue, contentValue);

    for (let i = 0; i < rowsValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columnsValue; j++) {
            const td = document.createElement('td');
            td.innerText = contentValue;
            tr.appendChild(td);
        }
        tableContainer.appendChild(tr);
    }
}
