const main = document.querySelector('main');

console.log(main.innerText);
console.log(main.innerHTML);

// main.innerHTML = main.innerHTML + '<h2 class="title">New Title</h2>';
// main.innerHTML += `<h2 class="title">New Title</h2>`;

const names = ['Arsen', 'Anna', 'Artem', 'Dmitry']

// for (let i = 0; i < names.length; i++) {
//     main.innerHTML += `
//         <p class="item-${i+1}">${names[i]}</p>`;
// }

names.forEach((el, ind) => main.innerHTML += `
<p class="item-${ind + 1}">${el}</p>`);

console.log(main.innerHTML);