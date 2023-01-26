// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };


// for (let index = 0; index < 3; index++) {
//     prompt("Enter your number"); 
// }

// const numbers = [0, -100, 632, 0.5, -0.7, -100, 500];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         console.log(numbers[i]);
//     }
// }

// const numbers = [7, 16, 32, 51, 100, 121, 40];

// for (let number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// const numbers = [-100, 0, 43, -29, 150, 70, 15, 1.5];
// let total = 0;

// for (let number of numbers) {
//     if (number > 0) {
//         total += number;
//     }
// };
// console.log(total);



/* 
    ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
*/

// const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5];

// let total = 0;
// for (const number of numbers) {
//     if(number %2 !== 0) {
//         total += number;
//     } 
// }
// console.log(total);


// const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5];


// let evenNumbersTotal = 0;
// let oddNumbersTotal = 0;


// for (const number of numbers) {
//     if(number %2 === 0) {
//         evenNumbersTotal += number;
//     } else oddNumbersTotal += number;
// }

// let total = evenNumbersTotal > oddNumbersTotal ? evenNumbersTotal- oddNumbersTotal: oddNumbersTotal - evenNumbersTotal;

// console.log(evenNumbersTotal);
// console.log(oddNumbersTotal);
// console.log(total);


// OBJECTS

// const arr = [];
// const obj = {};

// const shoes  = {
//     name,
//     price,
//     material,
//     id,
//     color,
//     category,
//     additional: {
//         country,
//         sex,
//     },
//     sizes : ["21", "22", "23"],
// }


/*
        ДЗ. 
        1. Создать объект, у которого будет название, цена и цвет. Вывести его в консоль
        2. Создать объект user, у которого будет email, password, login, age.
            Вывести в консоль год рождения пользователя, используя свойтсво age из объекта user
        3. Есть массив prices. Нужно найти общую цену всех товаров внутри массива объектов prices
            и вывести в консоли
            const prices = [
                {
                    name: "Iphone 14",
                    price : 100000
                },
                {
                    name: "Iphone 13",
                    price : 80000
                },
                {
                    name : "Iphone 12",
                    price: 70000
                }
            ]
    */



// const paint = {
//     price: 45,
//     color: "green",
// }
// console.log(paint);




// const user = {
//     email: "user@email.com",
//     password: "jhh55", 
//     login: "admin",
//     age: 34,
// }
// let date = new Date();
// let year = date.getFullYear();
// console.log(year - user.age);


// const prices = [
//     {
//         name: "Iphone 14",
//         price : 100000,
//     },
//     {
//         name: "Iphone 13",
//         price : 80000,
//     },
//     {
//         name : "Iphone 12",
//         price: 70000,
//     }
// ];

// let totalPrice = 0;
// for(let element of prices) {
//     totalPrice += element.price;
// }
// console.log(totalPrice);
