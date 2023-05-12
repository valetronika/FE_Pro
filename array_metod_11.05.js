let goods = [
    { id: 1, title: "Микроволновка", price: 1500, count: 4 },
    { id: 2, title: "Телевизор", price: 2500, count: 1 },
    { id: 3, title: "Тумба", price: 5500, count: 5 },
    { id: 4, title: "Холодильник", price: 200, count: 2 },
    { id: 5, title: "Стол", price: 5600, count: 5 },
    { id: 6, title: "Телефон", price: 1900, count: 12 },
    { id: 7, title: "Компьютер", price: 4200, count: 11 },
    { id: 8, title: "Мангал", price: 250, count: 7 },
    { id: 9, title: "Люстра", price: 300, count: 3 },
];
//1 - использовать только методы (цикл for использовать запрещено)

//- 1 Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

    const get_even_id = goods.filter((el) => (el.id % 2 === 0 ? el : ""));
// console.log( get_even_id);

//- 2 Посчитайте сумму всех товаров, учитывая их количество

    const get_sum = goods.reduce((acc, value) => acc + value.price, 0);
// console.log( get_sum);

//- 3 Найдите значение элемента массива (продукта), цена которого будет кратна 5

    console.log(goods.find((el)=>el.price%5===0));
    goods.find((el)=>el.price%5===0?console.log(el.title):'' )         // тут не совсем поняла условие задачи наверно

//- 4 Найдите индекс элемента, count которого будет больше 11
    const get_index_11 = goods.findIndex((el) => el.count > 11);
// console.log(get_index_11);
//- 5 Посчитайте количество элементов, count которых является нечетным числом

    const count_odd = goods.reduce(
        (acc, value) => acc + (value.count % 2 !== 0 ? 1 : 0),
        0
    );
// console.log(count_odd);
//- 6 Посчитайте количество элементов, имя которых начинается на “Т”

    const count_T = goods.reduce(
        (acc, value) => acc + (value.title[0] === "Т" ? 1 : 0),
        0
    );
// console.log(count_T);
//- 7 Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

    const disc_arr = goods.map((el) => el.price * 0.65);
// console.log(disc_arr);

//- 8 Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

    const zero_count = goods.map((arr) => ({ ...arr, count: 0 }));

// console.log(zero_count);
//- 9 Отфильтруйте массив по сво-ву title

    const goods_new = goods.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        if (a.title == b.title) return 0;
    });
// console.log(goods_new);
