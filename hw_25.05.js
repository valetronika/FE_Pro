// 1 уровень сложности: https://github.com/VazgenDav2021/FRONTEND - ссылка на материалы

// Вот задачи для решения, предварительно скажу что есть моменты которые надо прогуглить, несколько здача являются очень частыми ворпосами на собесах

const numbers = [15, -6, 7, -6, 15];
const strings = ["array", "with", "strings"];

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
numbers.every((el)=>el>=0);

// Отсортируйте массив в порядке возрастания.
numbers.sort((a,b)=>a-b)

// Отсортируйте массив в порядке убывания.
numbers.sort((a,b)=> b-a)
// console.log(numbers);

// Извлеките все уникальные элементы из массива.
const a =[... new Set(numbers)] //уникальная коллекция
// console.log(a);

// Проверьте, является ли массив палиндромом (т.е. читается одинаково слева направо и справа налево).
const numbers1 = [1,2,3,2,1];

const palindrome = [...numbers1].reverse();
const palindrome_check = () => {
    let temp = 0;
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== numbers1[i]) temp++;
    }
    return temp == 0;
};
console.log(palindrome_check());           //способ 1
console.log(palindrome.join()===numbers1.join());//способ 2
console.log(JSON.stringify(palindrome)===JSON.stringify(numbers1));//способ 3
// Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов.

const double_arr = strings.concat( numbers.map(String))

// console.log(double_arr);
