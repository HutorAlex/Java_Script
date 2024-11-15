// 8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let s = 'hello world';
const s1 = s.toUpperCase();
console.log(s1);

let a = 'lorem ipsum';
const a1 = a.toUpperCase();
console.log(a1);

let b = 'javascript is cool';
const b1 = b.toUpperCase();
console.log(b1);

/*------------------------------або----------------------*/

let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let uppercasedStrings = strings.map(str => str.toUpperCase());
console.log(uppercasedStrings);