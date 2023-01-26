// ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
// 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
//    скидкой 10%
//    2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
//        продукты:
//            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
//            б) категория который "phone"; const categoryPhone = []
//    3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
//        max(10, 20) // 20
//        max(100, 5) // 100
//    4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
//        и "НЕЧЕТ", если нечетное
//    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
//        power(10, 2) // 100
//        power(12, 2) // 144
//        power(2, 5) // 32

const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    },
    {
        id: 4,
        name: "Iphone 11",
        price: 70100,
        category: "phone"
    },
    {
        id: 5,
        name: "Iphone 10",
        price: 68000,
        category: "phone"
    },
    {
        id: 6,
        name: "Iphone 8",
        price: 57300,
        category: "mobile"
    },
    {
        id: 7,
        name: "Iphone 6",
        price: 35000,
        category: "mobile"
    },
    {
        id: 8,
        name: "Iphone 1",
        price: 110000,
        category: "mobile"
    }
]

// 1 Task

// const productsWithDiscount = products.map(el => console.log(`Price of ${el.name} with discont 10% is ${el.price-el.price*10/100}}`));

// 2 Task
//    const MIN_PRICE = 88000;
//    const CATEGORY = "phone";

// const moreThanPrice = products.filter(el => el.price > MIN_PRICE);
// const categoryPhone = products.filter(el => el.category === CATEGORY);

// console.log(moreThanPrice);
// console.log(categoryPhone);

// 3 Task

// function maxNumber (firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         return firstNumber;
//     }
//     return secondNumber;
// }

// console.log(maxNumber(10, 20));
// console.log(maxNumber(100, 5));

// 4 Task
// Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
// //        и "НЕЧЕТ", если нечетное


// const checkUserNumbers = (callback) => {
// const userNumber = prompt("Enter your number")
// return callback(userNumber);
// };

// const chechNumber = (userNumber) =>
// {
//     if (userNumber%2 === 0) {
//         return "You enter even number";
//     }
//     return "You enter odd number";
// };

// console.log(checkUserNumbers(chechNumber));

// 5 Task
// Написать функцию, которая получает два числа и возводит первое число в степень второго


// const power = (firstNumber, secondNumber) => Math.pow(firstNumber, secondNumber);

//   console.log(power(10, 2));    // 100
//   console.log(power(12, 2));    // 144
//   console.log(power(2, 5));     // 32