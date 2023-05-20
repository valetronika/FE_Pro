// Напишите функцию checkString(arg), который принимает аргумент строкового типа.
// Функция должна вывести в консоль первую букву аргумента.

let checkString = function (arg) {
    console.log(arg[0]);
};
checkString('dog')

// Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения.
// Функция должна вернуть их среднее значение.
// * Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части

let checkMiddleValue = function (num1, num2) {
    return (+(num1 + num2) / 2).toFixed(2);  // возращает строку ставим + спереди
};
console.log(checkMiddleValue(56, 45));

//2  Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число).
// Функция, в зависимости от первого аргумента (булевого типа) должна изменить число по следующему правилу:
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

let changeValue = (arg1, arg2) => (arg1 ? Math.pow(arg2, 2) : Math.sqrt(arg2));

// let changeValue = (arg1, arg2) => (arg1 ? arg2**2 : arg2**0.5);

console.log(changeValue(false, 25));

// Напишите функцию countString(arg), которая принимает в качестве аргумента строковый
// тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало
// верхний и нижний регистр (А а, О о, У у, С с)

// let countString = (arg) => {
//     let a = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (
//             arg[i].toLowerCase() != "a" &&
//             arg[i].toLowerCase() != "o" &&
//             arg[i].toLowerCase() != "y" &&
//             arg[i].toLowerCase() != "c"
//         )
//             a.push(arg[i]);
//     }
//     return a.length;
// };

let countString = (arg) => {
    let a = [];
    for (let i = 0; i < arg.length; i++) {
        let b= arg[i].toLowerCase()
        if (
            b != "a" &&
            b != "o" &&
            b != "y" &&
            b != "c"
        )
            a.push(arg[i]);
    }
    return a.length;
};


console.log(countString("Cucfdhrtey"));

// Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. 
// Функция должна построить последовательность строк в консоле, 
// количество которых зависит от аргумента 

function createQuence(num){
    let a = '*'
    for (let i = 0; i < num; i++) {
        // console.log(a);
        a = a + '*';
    }
}

// function createQuence(num) {  не мое решение, оставила тут для примера
//     let result = '';

//     for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= i; j++) {
//         result += '*';
//       }
//       result += '\n';
//     }
//     console.log(result);
//   }
// createQuence(5)