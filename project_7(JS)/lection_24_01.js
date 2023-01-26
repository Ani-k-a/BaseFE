// const userNumber = prompt("Enter number");
// if (userNumber > 100) {
//     console.log(userNumber);
// } else console.log("Your number is lower");

// Есть переменная price. Если price > 1000, то в консоли выводим "скидка 10%"
// если price > 1500, то в консоли выводим "скидка 15%"
// иначе выводим "Скидки нет"



// ДЗ. 
//     1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
//     2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"
//     3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
//         squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
//         в итоге  squares = [1, 16, 4, 36, 81]
//     4. Используя методы push, unshift,shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
//         В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]



// const price = prompt("Enter price");
// if (price > 1000 && price <= 1500) {
//     console.log("скидка 10%");
// } else if (price > 1500){
//     console.log("скидка 15%");
// }
// else console.log("Скидки нет");

// const userFirstNumber = prompt("Enter first number");
// const userSecondNumber = prompt("Enter second number");

// if (userFirstNumber > userSecondNumber) {
//     console.log(`the biggest number is ${userFirstNumber}`)
// } else if (userFirstNumber === userSecondNumber) {
//     console.log(`the numbers is equal`)
// }
// else console.log(`the biggest number is ${userSecondNumber}`);


// const userNumber = Number(prompt("Enter your number"));

// if (userNumber > 0) {
//     console.log(`${userNumber} is positive`)
// } else if (userNumber === 0) {
//     console.log(`${userNumber} is null`)
// }
// else console.log(`${userNumber} is negative`);


// const arr = [1, 4, 2, 6, 9];
// const squares = [];
// for (let i = 0; i < arr.length; i++) {
//     squares.push(Math.pow(arr[i], 2));
// }
// console.log(squares);

// const arr =  ["Властелин колец", "Аватар", "Звездные войны", "Гарри Поттер"];

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === "Властелин колец" || arr[index] === "Звездные войны") {
//         arr.splice(index, 1);
//     }   
// }
// console.log(arr);


