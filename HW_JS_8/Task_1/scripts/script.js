// AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepCopy(obj) {
    if (obj === null)
        throw new Error("Cannot copy null!");
    if (obj === undefined)
        throw new Error("Cannot copy undefined!");
    if (obj) {
        let functions =[];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionCopy = obj[key].bind({});
                functions.push({functionCopy, key});
            }
        }
        console.log(functions);
        const str = JSON.stringify(obj);
        const copyObj = JSON.parse(str);
        for (const func of functions) {
            copyObj[func.key] = func.functionCopy
        }
        console.log(copyObj);
        return copyObj;
    }
    throw new Error('Error!')
}
deepCopy({id: 1, name: 'Vasya', foo1() {}, foo() {}});