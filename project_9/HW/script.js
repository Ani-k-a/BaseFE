const posts = [
    {
        title: "Столица Германии",
        descr: "Берлин - ....",
        img: "img1.jpeg"
    },
    {
        title: "Столица Кыргызстана",
        descr: "Бишкек - ...",
        img: "img2.jpeg"
    }
]

const htmlTitle = document.querySelectorAll('.title');
const htmlPTag = document.querySelectorAll('p');
const htmlImg = document.querySelectorAll('img');

for (let i = 0; i < posts.length; i++) {
    htmlTitle[i].innerText = posts[i].title;
    htmlPTag[i].innerText = posts[i].descr;
    htmlImg[i].setAttribute('src', posts[i].img);

}