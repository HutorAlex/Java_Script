// bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArrau(str) {
    if (str) {
        const split = str.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToArrau('Ревуть воли як ясла повні'))

/*------------------------------ще--------------------------------*/
let stringToarray = str => str.split(' ');

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);

console.log(arr);