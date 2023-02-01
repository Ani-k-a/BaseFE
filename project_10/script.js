
// const greenBtn = document.querySelector('.green-btn');
// greenBtn.addEventListener('click', function(event){
//     console.log('click');
//     console.log(event);
//     console.log(event.target.className);
//     console.log(event.target.style.fontSize= "30px");
//     removeEventListener;
// });


// const redBtn = document.querySelector('#red-btn');
// redBtn.addEventListener('click', function(e){
// // console.log(e.target.id);
// e.target.innerText = "Крассный";
// removeEventListener;
// });


// const redBtn = document.querySelector('.red-btn');

// function changeText (e) {
// e.target.innerText = "Крассный";
// e.target.style.color = "#ffffff";
// e.target.style.backgroundColor = "#FFA07A";
// console.log(e);
// removeEventListener;
// };

// redBtn.addEventListener('click', changeText);


// function handleClick (e) {
// console.log(e);
// e.target.style.cssText = `
// color: #E9967A;
// background-color: black;`
// }



// function handleClick (e) {
//     e.target.style.color = e.target.innerText;
// }

// greenBtn.addEventListener('click', handleClick);
// redBtn.addEventListener('click', handleClick);








// ДЗ. 1. При нажатии на кнопку img, менять фон body на картинку, которую нужно заранее подготовить
//          На этапе получения текста, проверить, если в тексте есть img, то делаем одно
//          иначе делаем document.body.style.backgroundColor = event.target.innerText

// 2. На этапе получения текста, проверить, если(есть класс random-btn) в тексте(классе) есть random,
// то менять цвет body на случайный.  Math.random() - случайное число. rgba(Math.random())


const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

function handleClick(event) {
    console.log(event);

    if (event.target.innerText === "img") {
        body.style.backgroundColor = 'none';
        body.style.backgroundImage = 'url(./img.jpeg)';
    } else if (event.target.className.includes('btn-random')) {
        body.style.backgroundColor = getRandomHexColor();
        body.style.backgroundImage = 'none';
    }
    else {
        body.style.backgroundColor = event.target.innerText;
        body.style.backgroundImage = 'none';
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

buttons.forEach(el => el.addEventListener('click', handleClick));

// console.log(Math.random());
// console.log(Math.random() * 16777215);
// console.log(Math.floor(Math.random() * 16777215));
// console.log(Math.floor(Math.random() * 16777215).toString(16));
// console.log(Math.floor(Math.random() * 16777215)
// .toString(16)
// .padStart(6, 0));
