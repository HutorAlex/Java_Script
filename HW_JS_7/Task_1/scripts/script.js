// jJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user = new User(1, 'Ivan', 'Petrov', 'ifg@uky', '+380998899');
console.log(user)

let users = [
    new User(1, 'Oleksandr', 'Dovgan', 'dffg@kkk', '+3445665444'),
    new User(2, 'Roman', 'Kirienko', 'dwwfwf@dfdfdf', '93949040393'),
    new User(3, 'Maksim', 'Slipenko', 'sddf@dffg', '566585855'),
    new User(4, 'Yriy', 'Rogov', 'dffg@ddd', '=+344556677'),
    new User(5, 'Gora', 'Hura', 'sddfff@ddff', '9393939393'),
    new User(6, 'Maks', 'Senko', 'sddf@dffg', '566585855'),
    new User(7, 'Kola', 'Karpenko', 'sddf@dffg', '566585855'),
    new User(8, 'Olya', 'Romanov', 'sddf@dffg', '566585855'),
    new User(9, 'Dima', 'ladd', 'sddf@dffg', '566585855'),
    new User(10, 'Joga', 'Vovk', 'sddf@dffg', '566585855'),
];
console.log(users);