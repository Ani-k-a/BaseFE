// console.log(document.body);
// document.title = "DOM elements";

// const redButton = document.querySelector('button');
// console.log(redButton);

// const redButtonClass = document.querySelector('.red');
// console.log(redButtonClass);

// const redButtonID = document.querySelector('#red');
// console.log(redButtonID);

// const main = document.querySelector('main');
// console.log(main);

// const allButtons = document.querySelectorAll('button');
// console.log(allButtons);
// console.log(allButtons[1]);

// Задача. 
// В переменную titles - положить все заголовки
// В переменную descrSecond - положить все теги p из второго section
// В переменную firstDescr - положить тег с id first-descr 
// В переменную sections - положить оба section

// const titles= document.querySelectorAll('h2');
// console.log(titles);

// const descrSecond = document.querySelectorAll('.item-2 p')
// console.log(descrSecond);

// const firstDescr = document.querySelector('#first-description')
// console.log(firstDescr);

// const sections = document.querySelectorAll('section');
// console.log(sections);

// const links = document.querySelectorAll('a');
// const myLinks = document.querySelectorAll('.my-link');
// const secondLink = document.querySelector('.second-link');
// console.log(links);
// console.log(myLinks);
// console.log(secondLink);

// const firstDescr = document.querySelector('#first-description');
// console.log(firstDescr.innerText);
// firstDescr.innerText = "Good bye";

// const secondLink = document.querySelector('#second-link');
// secondLink.innerText = "Ссылка";



// const links = ["Google", "Facebook", "Instagram", "Linkedin"];

// // for (let i = 0; i <links.length; i++) {
// //     console.log(links[i]);
// // }

// const htmlLinks = document.querySelectorAll('a');
// for (let i=0; i< htmlLinks.length; i++) {
//     console.log(links[i]);
//     console.log(htmlLinks[i]);
//     htmlLinks[i].innerText=links[i];
// }

// const texts = ["Привет", "Привет, мир", "ПриветПривет"];

// const htmlPTag = document.querySelectorAll('p');
// for (let i=0; i< texts.length; i++) {
//     htmlPTag[i].innerText=texts[i];
// }

//  const img = document.querySelector('#img');
//  console.log(img.getAttribute('src'));
//  img.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=3fbcb58878664c3d332bf88a2cbe9df0_l-5179184-images-thumbs&n=27&h=384&w=480');


//  const links = [
//     {
//         name: "Google",
//         link: "https://google.com"
//     },
//     {
//         name: "Facebook",
//         link: "https://facebook.com"
//     },
//     {
//         name: "Instagram",
//         link: "https://instagram.com"
//     },
//     {
//         name: "Linkedin",
//         link: "https://linkedin.com"
//     },
// ]

// const linksTag = document.querySelectorAll('a');

// for (let i = 0; i < links.length; i++) {
//     linksTag[i].innerText = links[i].name;
//     linksTag[i].setAttribute('href', links[i].link);
// }

const imgTag = document.querySelectorAll('img');

for (let i = 0; i < imgTag.length; i++) { 
   imgTag[i].setAttribute('src', "./img1.jpeg");
}
console.log(imgTag);