// 2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
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

const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);