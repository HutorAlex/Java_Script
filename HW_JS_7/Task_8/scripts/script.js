// zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.



class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
const cinderellas = [
    new Cinderella("Аня", 18, 35),
    new Cinderella("Оля", 20, 36),
    new Cinderella("Катя", 19, 37),
    new Cinderella("Юля", 21, 38),
    new Cinderella("Наталя", 22, 39),
    new Cinderella("Ірина", 23, 40),
    new Cinderella("Маша", 18, 36.5),
    new Cinderella("Софія", 25, 37.5),
    new Cinderella("Вікторія", 20, 38.5),
    new Cinderella("Аліна", 19, 39.5),
];

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
const prince = new Prince("Олександр", 30, 37);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


// for (const cinderella of cinderellas) {
//     if (cinderella.footsize === prince.foundShoeSize) {
//         prince.newWife = cinderella;
//     }
// }
// console.log(prince.newWife);


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const prices = cinderellas.find(cindarella => cindarella.footsize === prince.foundShoeSize);
prince.newWife = prices;

console.log(prince.newWife);

