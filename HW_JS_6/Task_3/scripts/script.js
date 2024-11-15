// ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let s = 'HELLO WORLD';
const s1 = s.toLowerCase();
console.log(s1);

let a = 'LOREM IPSUM';
const a1 = a.toLowerCase();
console.log(a1);

let b = 'JAVASCRIPT IS COOL';
const b1 = b.toLowerCase();
console.log(b1);

/*-------------------------------------або------------------------------*/

let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let lowercasedStrings = strings.map(str => str.toLowerCase())
console.log(lowercasedStrings);