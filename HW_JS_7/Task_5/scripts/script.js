// 8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Kolya', 'Dobr', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(2, 'Olya', 'Dobr2', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(3, 'Gena', 'Dobr3', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }]),
    new Client(4, 'Vova', 'Dobr4', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(5, 'Tima', 'Dobr5', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(6, 'Ira', 'Dobr6', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(7, 'Vasya', 'Dobr7', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(8, 'Yra', 'Dobr8', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(9, 'Sasha', 'Dobr9', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
    new Client(10, 'Masha', 'Dobr10', 'weer@err', '23322233', [{ title: 'phone', price: '12000' }, { title: 'phone', price: '12000' }]),
];
const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);

