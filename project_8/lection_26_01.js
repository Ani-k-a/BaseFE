const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 100000,
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 100000,
    }
]
// console.log(products[2].name, products[2].price);

// console.log(`<h1>${products[1].name + products[2].price}</h1>`);

// Вывести в консоли div, внутри которого в теге h1 отобразить название продукта, у которого id = 1,
// и внутри того же div'а в теге <p> отобразить цену того же продукта

// console.log(`<div>
// <h1>${products[0].name}</h1>
// <p>${products[0].price}</p>
// </div>`);

// const productsArray = products.map(el => console.log(`${el.name} - ${el.price}`));


// const links = [
//     {
//         name: "О нас",
//         link : "/about.html"
//     },
//     {
//         name: "Контакты",
//         link : "/contacts.html"
//     }
// ]
// for(let i = 0; i < links.length; i++) {
//     // Вызвать showLiTag("О нас")
//     showLiTag(links[i].name, links[i].link)
// }

// function showLiTag(text, link) {
//     // Создание тега li
//     console.log(`<li>
//         <a href="${link}">
//         ${text}
//         </a>
//     </li>`)
// }


