// nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname , email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(1, 'Kolya', 'Dobr', 'weer@err', '23322233', new Product('tv', '10000'), new Product('phone', '5000')),
    new Client(2, 'Olya', 'Dobr2', 'weer@err', '23322233', new Product('cd', '11000'), new Product('phone', '5000')),
    new Client(3, 'Gena', 'Dobr3', 'weer@err', '23322233', new Product('dvd', '12000'), new Product('phone', '5000')),
    new Client(4, 'Vova', 'Dobr4', 'weer@err', '23322233', new Product('console', '13000'), new Product('phone', '5000')),
    new Client(5, 'Tima', 'Dobr5', 'weer@err', '23322233', new Product('PS', '8000'), new Product('phone', '5000')),
    new Client(6, 'Ira', 'Dobr6', 'weer@err', '23322233', new Product('xbox', '7000'), new Product('phone', '5000')),
    new Client(7, 'Vasya', 'Dobr7', 'weer@err', '23322233', new Product('clima', '50000'), new Product('phone', '5000')),
    new Client(8, 'Yra', 'Dobr8', 'weer@err', '23322233', new Product('pen', '17000'), new Product('phone', '5000')),
    new Client(9, 'Sasha', 'Dobr9', 'weer@err', '23322233', new Product('tablet', '18000'), new Product('phone', '5000')),
    new Client(10, 'Masha', 'Dobr10', 'weer@err', '23322233', new Product('lamp', '6000'), new Product('phone', '5000')),
];
console.log(clients);