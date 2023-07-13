const backgrounds = document.querySelector(".backgrounds");
const div_slider_control = document.querySelector(".slider_control");
const click_container_left = document.querySelector(".click_container > .left");
const click_container_right = document.querySelector(
    ".click_container > .right"
);
const main_div = document.querySelector(".main");

const backgroundImg = "./img/backgr.svg";
// имитация массива картинок
const images = [];
let slider_index = 0;
for (let i = 0; i < 5; i++) {
    images.push(backgroundImg);
}
//
const servises = [
    {
        title: "Бухгалтерские услуги в вашем городе",
        button: "Наша презентация",
    },
    { title: "Куръерские услуги в вашем регионе", button: "Посмотреть цены" },
    { title: "Оценочная стоимость", button: "Заказать" },
    { title: "Организация мероприятий", button: "Хочу крутой празник!" },
];
// -----------------slaider
document.addEventListener("DOMContentLoaded", loadPage);

const frame = document.createElement("div");
const cards = document.createElement("div");
cards.className = "cards_wrapper";
frame.className = "frame";
cards.style.left = `${0}px`;

function loadPage() {
    sliderControlColor(slider_control_items_array, `slider_control_item`);
}
// устанавливаю текст в наши услуги
const main_container = document.querySelector(".main___content");
let servises_count = 0;
// let servises_count_ind = servises[servises_count]

const serv_container = document.createElement("div");
serv_container.classList.add('serv_container')
main_container.prepend(serv_container);

serv_container.style.left=0

servises.forEach((el) => {
    const servisesAll = document.createElement("div");
    const textEl = document.querySelector("h1");
    const buttonEl = document.querySelector("button");

    textEl.innerText = el.title;
    buttonEl.innerText = el.button;

    buttonEl.classList.add("button");

    servisesAll.append(textEl, buttonEl);
    serv_container.prepend(servisesAll);
});


// ---------------------
for (let elem of images) {
    let card = document.createElement("div");
    let slider_control_item = document.createElement("div");

    card.className = "card";
    slider_control_item.className = "slider_control_item";

    card.style.backgroundImage = `url(${elem})`;
    slider_control_item.innerText = ".";

    cards.append(card);
    div_slider_control.append(slider_control_item);
}
const slider_control_items_array = Array.from(
    document.querySelectorAll(".slider_control_item")
);

frame.append(cards);
main_div.append(frame);

const go_right = () => {
    if (slider_index < images.length - 1) {
        slider_index++;
    } else {
        slider_index = 0;
    }
    cards.style.left = `${-1 * slider_index * 1920}px`;
    sliderControlColor(slider_control_items_array, `slider_control_item`);
};
const go_left = () => {
    if (slider_index != 0) {
        slider_index--;
        cards.style.left = `${-1 * slider_index * 1920}px`;
    } else {
        slider_index = images.length - 1;
        cards.style.left = `${-1 * slider_index * 1920}px`;
    }
    sliderControlColor(slider_control_items_array, `slider_control_item`);
};
// окрашивать кружки
function sliderControlColor(array, defaultClassName) {
    array.forEach((el, index) => {
        if (index === slider_index) {
            el.classList.add(`slider_control_active`);
        } else {
            el.className = defaultClassName;
        }
    });
}

click_container_left.addEventListener("click", go_left);

click_container_right.addEventListener("click", go_right);

// service_grid--------------------------

const service_grid = document.querySelector(".service_grid");

for (let i = 0; i < 6; i++) {
    const servContainer = document.createElement("div");
    const servP = document.createElement("p");

    servContainer.className = "servContainer";
    servP.innerText = "Бухгалтерское  обслуживание";
    servContainer.append(servP);
    service_grid.append(servContainer);
}
// about__us_grid-----------------------------

const about__us_grid = document.querySelector(".about__us_grid");

for (let i = 0; i < 4; i++) {
    const about__us_grid_div = document.createElement("div");
    const deals_count = document.createElement("h3");
    const deals_info = document.createElement("p");
    const link_cases = document.createElement("a");

    deals_count.innerText = 90;
    deals_info.innerText = `Завершено  крупных сделок`;
    link_cases.innerText = `Все кейсы`;
    link_cases.href = `#`;

    about__us_grid_div.classList.add("about_us_item");

    about__us_grid_div.append(deals_count, deals_info, link_cases);
    about__us_grid.append(about__us_grid_div);
}

// clients-------------------------------------
let client_control_panel_counter = 0;

const clients_gallery = document.querySelector(".clients_gallery");
let sponsorImg = "./img/sponsor.svg";
for (let i = 0; i < 21; i++) {
    client_control_panel_counter++;
    const sponsor_div = document.createElement("div");
    const sponsorImgItem = document.createElement("img");

    sponsorImgItem.src = sponsorImg;
    sponsorImgItem.alt = "img";

    sponsor_div.className = "sponsor_div";
    sponsor_div.append(sponsorImgItem);
    clients_gallery.append(sponsor_div);

    // ----
    // let client_control_item = document.createElement("div");
    // client_control_item.className = "slider_control_item";
    // client_control_item.innerText = ".";
    // document.querySelector(`.clients_control`).append(client_control_item)
    // console.log(client_control_panel_counter);
}
render_client_control_panel(
    client_control_panel_counter,
    "clients_control_item control_item",
    `.clients_control`
);

function render_client_control_panel(count, class_name, target) {
    for (let i = 0; i < count / 4; i++) {
        let client_control_item = document.createElement("div");
        client_control_item.className = class_name;
        client_control_item.innerText = ".";
        document.querySelector(target).append(client_control_item);
    }
}

const clients_click_left = document.querySelector(
    ".clients_click_container > .left"
);
const clients_click_right = document.querySelector(
    ".clients_click_container > .right"
);

let clients_count = 0;
clients_gallery.style.left = 0;
clients_click_right.addEventListener("click", () => {
    const clients_gallery_array = Array.from(
        document.querySelectorAll(".sponsor_div")
    );
    const maxCount = Math.floor(clients_gallery_array.length / 4);
    if (clients_count >= maxCount) {
        clients_count = 0;
        clients_gallery.style.left = `${-1 * (clients_count * 1140)}px`;
        sliderControlColor(
            clients_control_arr,
            `clients_control_item control_item`
        );
    } else {
        clients_count++;
        clients_gallery.style.left = `${-1 * (clients_count * 1140)}px`;
        sliderControlColor(
            clients_control_arr,
            `clients_control_item control_item`
        );
    }
    console.log(clients_count);
});
let clients_control_arr = Array.from(
    document.querySelectorAll(".clients_control_item")
);

// sliderControlColor(clients_control_item)
// };
// окрашивать кружки
// function clientControlColor(clients_control_item) {
//     array.forEach((el,index)=>{
//         if(index===slider_index){
//             el.classList.add(`slider_control_active`)
//         }else{
//             el.className=`slider_control_item`
//         }

//     })
// }
