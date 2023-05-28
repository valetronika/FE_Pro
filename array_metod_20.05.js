// -- 1
// В программе задан массив, передающий строковые элементы. Напишите программу, которая которая ответит на вопрос:
// присутствует ли в массиве элемент, чей корень длины возвращает целое число? В качестве ответа необходимо вывести булевый тип true, false.
// Пример: ['Велосипед','Торт','Тенис,'Ракетка','Город']
// Результат: true
const strings_array = ["Велосипед", "Торт", "Тенис", "Ракетка", "Город"];
function root_of_length() {
    return strings_array.some((el) => Math.sqrt(el.length) % 2 == 0);
}
//2 console.log(root_of_length());

// -- 2

// В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует
// новый массив из отрицательных чисел заданного массива.
// Пример: [1,2,3,-4,5,-6,7,-8,9,10]
// Результат: [-4,-6,-8]
const array_of_numbers = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
const array_of_negative_numbers = array_of_numbers.filter((el) => el < 0);
//2 console.log(array_of_negative_numbers);

// -- 3


// В программе задана переменная numbers, которая хранит массив из чисел.
// Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве)
// можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
// Пример значений переменных:
let numbers = [10,20,10,1,2,3,4,5,29,100];
// Пример результата: 2
//- способ без метода массива:
let counter = 1;
let num = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    num += numbers[i];
    if (num <= 50) counter++;
    else break;
}
// console.log(counter);

//- способ с методом массива:
let counter2 = 0;
let arr_counter = 0;
numbers.forEach((el) => {
    if (arr_counter + el <= 50) {
        arr_counter += el;
        counter2++;
    }
});
// console.log(counter2);

// -- 4

// В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов,
// которые при преобразовании в число не вернут значение NaN.
// Результат выведите в консоль.
// Пример значений переменных:
let values = ["100", "30", "Не число", "20", "Тоже не число"];
// Пример результата: 150
const value_num = (arr) => {
    return (newValues = arr
        .filter((element) => +element)
        .map(Number)
        .reduce((acc, val) => acc + val, 0));
};
//2 console.log(value_num(values));

// -- 5


// В программе заданы два массива array_1 и array_2, элементы которого являются числами.
// Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в
// качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые
// встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

// Пример значений переменных:
let array_1 = [1, 4, 7, 8, 2];
let array_2 = [1, 5, 11, 6, 2];

// Пример результата: [2, 1]
const intersection = (arr1,arr2) => {
    const arr_1_2 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) arr_1_2.push(arr1[i]);
        }
    }
    return arr_1_2.sort((a, b) => b - a);
};
// console.log(intersection(array_1,array_2))
