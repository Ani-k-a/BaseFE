
const greenBtn = document.querySelector('.green-btn');
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


const redBtn = document.querySelector('.red-btn');

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



function handleClick (e) {
    e.target.style.color = e.target.innerText;
}

greenBtn.addEventListener('click', handleClick);
redBtn.addEventListener('click', handleClick);



