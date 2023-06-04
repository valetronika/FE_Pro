// Требования к работе:
// //Стилизация элементов может быть вариативной (приветствуется более продуманное решение стилизации согласно указанному макету )
// Для каждого выводимого товара должны быть реализованы две кнопки (-, +), которые будут инкрементировать и декрементировать значение сво-ва count.
// Доработать процесс таким образом, чтобы при указании значения 0 для count элемент удалялся с интерфейса.
// На разметке необходимо предусмотреть форму для добавления нового товара. В момент добавления значение count по дефолту
// должно формировать значение 1, а id - автоинкремент.
// Весь процесс должен при изменении массива должен сохранять значение в localStorage (в том числе формировать чтение данных в момент загрузки)
// Работу необходимо опубликовать на github pages (см примечание).
const contentContainer = document.querySelector(".content");
const add_form = document.querySelector(".add_form");

let products = [
    { id: 1, title: "Велосипед", count: 4 },
    { id: 2, title: "Велосипед", count: 2 },
    { id: 3, title: "Велосипед", count: 100 },
    { id: 4, title: "Велосипед", count: 1 },
];

let productsData = JSON.parse(localStorage.getItem("productsDat")) ?? products; 

// нахожу максимальное значение ID
let maxId = productsData.reduce((acc, val) => {
    return val.id > acc ? val.id : acc;
}, 0);

add_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { add } = event.target; //деструкт инпут по name инпута, обращаться по add.value
    const new_obj = {
        id: ++maxId,
        title: add.value,
        count: 1,
    };
    productsData = [...productsData, new_obj];
    localStorage.setItem("productsDat", JSON.stringify(productsData));
    productsData = JSON.parse(localStorage.getItem("productsDat"));

    rerender(productsData);
    add.value = "";
});

function rerender(arr) {
    contentContainer.innerHTML = "";
    renderCard(arr);
}

console.log(productsData);
function renderCard(arrayData) {
    arrayData.forEach((elem) => {
        const cardElement = document.createElement("div");
        const titleElement = document.createElement("p");
        titleElement.innerText = elem.title;
        // create counter el
        const counterContainer = document.createElement("div");
        counterContainer.classList.add("counterContainer");
        const button_add = document.createElement("button");
        button_add.innerText = "+";
        button_add.classList.add("btnAdd");
        const button_reduce = document.createElement("button");
        button_reduce.innerText = "-";
        button_reduce.classList.add("btnReduce");

        const counterElement = document.createElement("p");
        counterElement.innerText = elem.count;
        counterContainer.append(button_reduce, counterElement, button_add);
        //
        cardElement.append(titleElement, counterContainer);
        contentContainer.append(cardElement);
        //--------------
        button_add.addEventListener("click", () => {
            counterElement.innerText = ++elem.count;

            productsData.map((el) => {
                if (el.id === elem.id) {
                    el.count++;
                    return el;
                } else {
                    return el;
                }
            });
            setLS(productsData);
        });
        button_reduce.addEventListener("click", () => {
            counterElement.innerText = --elem.count;
            if (elem.count === 0) {
                cardElement.remove();
            }
            const a = productsData

                .map((el) => {
                    if (el.id === elem.id) {
                        --el.count;
                        return el;
                    } else {
                        return el;
                    }
                })
                .filter((el) => el.count > 0);
            setLS(a);
        });
    });
}
renderCard(productsData);

function setLS(array) {
    localStorage.setItem("productsDat", JSON.stringify(array));
}
