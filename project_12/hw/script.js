// ДЗ
//     https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

//     Сверстать макет.
//     Создать структуру данных
//     products = [
//         {
//             id: 1,
//             name: "Велосипед",
//             price: 40000
//         },
//         {}
//     ]
//     Создайте 4 объекта в массиве, с name и price.
//     Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
//         Отобразить карточки товаров из массива products


const products = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000,
    },
    {
        id: 2,
        name: "Самокат",
        price: 15000,
    },
    {
        id: 3,
        name: "Лыжи",
        price: 20000,
    },
    {
        id: 4,
        name: "Сноуборд",
        price: 25000,
    }
]

const productsList = document.querySelector('.product-list');

products.forEach(el => {
    productsList.innerHTML += `
    <li class="section section-product">
        <div class="product-name">${el.name}</div>
        <div class="product-price">${el.price}</div>
    </li>
    `
});

const productNameAdd = document.querySelector('.add-product_name');
const productPriceAdd = document.querySelector('.add-product_price');
const productAddButton = document.querySelector('.add-btn');



