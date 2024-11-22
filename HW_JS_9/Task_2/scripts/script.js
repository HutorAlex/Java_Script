// OPLI89c9G
// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.createElement('ul');
menu.classList.add('menu');
for (const item of arr) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);
