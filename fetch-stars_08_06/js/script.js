// Задана ссылка на api:
// let url = "https://dummyjson.com/products"
// Напишите fetch-запрос, который получит данные от сервера в виде массива и для каждого полученного элемента формирует div элемент с описанием товара.

// В div необходимо указать следующую информацию:
// -Изображение товара
// -Имя продукта
// -Стоимость продукта
// Рейтинг продукта (*)
// Требования к работе:
// -В работе должна присутствовать небольшая стилизация (grid/flex сетка). Все элементы можно расположить по правилам grid сетки (по 3 элемента)
// -Скрипт должен быть разделен на назначенные функции (fetch, render, rating (*) )
// (*) У каждого товара назначен рейтинг (дробное число). Необходимо написать функцию rating(n), которая получает рейтинг и выводит в разметке 5 иконок звезды. В зависимости от n аргумента на разметке должно появиться n активных звезд из 5.
// Внутри функции аргумент необходимо округлить до целого числа по правилам математики
// Иконку можно импортировать сразу на разметку:

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// Элемент неактивной звезды:
// <span class="fa fa-star"></span>

// Активная звезда:
// <span class="fa fa-star active"></span>

// (css)
// .active {
// 	color: orange
// }

const root = document.querySelector(".root");

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    // .then((data)=>console.log(data.products))
    .then((data) => render(data.products));

function render(array) {
    array.forEach((element) => {
        const prodContainer = document.createElement("div");
        const imgElem = document.createElement("img");
        const titleElem = document.createElement("h2");
        const priceElem = document.createElement("p");

        imgElem.src = element.images[0];
        imgElem.setAttribute("alt", "product");
        titleElem.innerText = element.title;
        priceElem.innerText = `price: ${element.price}$`;

        prodContainer.className = "product__item";

        prodContainer.append(
            imgElem,
            titleElem,
            priceElem,
            rating(element.rating)
        );
        root.append(prodContainer);
    });
}
function rating(params) {
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "rating__container";

    let rat_num = Math.round(params);
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.classList.add("fa", "fa-star");
        if (i < rat_num) {
            star.classList.add("active");
        }
        ratingContainer.append(star);
    }
    return ratingContainer;
}
