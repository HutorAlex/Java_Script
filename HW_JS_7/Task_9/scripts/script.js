// gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
};
['Audi', 'BMW', 'Mersedes', 'VW'].myForEach((auto) => console.log(auto));


Array.prototype.myFilter = function (callback) {
    const arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    { name: 'Alice', age: 25, status: true },
    { name: 'Bob', age: 30, status: false },
    { name: 'Charlie', age: 35, status: true },
    { name: 'Diana', age: 28, status: false },
    { name: 'Eve', age: 22, status: true },
    { name: 'Frank', age: 40, status: false },
    { name: 'Grace', age: 29, status: true },
    { name: 'Hank', age: 32, status: false },
    { name: 'Ivy', age: 26, status: true },
    { name: 'Jack', age: 38, status: false }
];
let result = users.myFilter((user) => user.status);

console.log(result);