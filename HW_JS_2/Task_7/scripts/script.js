//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 45;
if (time >=0 && time <= 14) {
    console.log('first')
} else if (time >=15 && time <=29) {
    console.log('second')
} else if (time >=30 && time <=44) {
    console.log('third')
} else if (time >=45 && time <60) {
    console.log('fourth')
}