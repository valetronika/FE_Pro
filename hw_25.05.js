// 1 уровень сложности: https://github.com/VazgenDav2021/FRONTEND - ссылка на материалы

// Вот задачи для решения, предварительно скажу что есть моменты которые надо прогуглить, несколько здача являются очень частыми ворпосами на собесах

const numbers = [15, 15, -6, 95, 7];
// Найдите сумму всех элементов в массиве.
const sum_numbers = numbers.reduce((acc, val) => acc + val, 0);
// console.log(sum_numbers);
// Найдите наибольшее число в массиве.
const big_number = numbers.reduce((acc, val) => (acc < val ? val : acc), 0);
// console.log(big_number);
// Найдите наименьшее число в массиве.
const small_number = numbers.reduce((acc, val) => (acc > val ? val : acc), 0);
// console.log(small_number);
// Посчитайте количество отрицательных чисел в массиве.
let count=0;
numbers.forEach((el) => (el < 0 ? count++ : count));
// console.log(count);
// Проверьте, все ли элементы в массиве являются положительными числами.
// console.log( numbers.every((el)=>el>=0));
// Отсортируйте массив в порядке возрастания.
numbers.sort((a,b)=>a-b)
// Отсортируйте массив в порядке убывания.
numbers.sort((a,b)=> b-a)
// console.log(numbers);
// Извлеките все уникальные элементы из массива.
let new_arr= numbers.filter(el=>)
console.log(new_arr);
// Проверьте, является ли массив палиндромом (т.е. читается одинаково слева направо и справа налево).
// Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов.
