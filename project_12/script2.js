const posts = [
    {
        id: 1,
        img: "https://placekitten.com/640/360",
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        img: "https://placekitten.com/540/360",
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира"
    },
    {
        id: 3,
        img: "https://placekitten.com/640/380",
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]

/*  */

const main = document.querySelector('main');
const article = document.querySelector('article');

posts.forEach((post, ind) => main.innerHTML += `
    <article class="item item-${ind+1}">
        <h5 class="title">${post.title}</h5>
        <img src="${post.img}" alt="">
        <p class="description">${post.descr}</p>
    </article>
`);
