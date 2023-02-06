// ДЗ
//     https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

//     Сверстать макет.
//     Создать структуру данных
//     products = [
//         {
//             id: 1,
//             name: "Велосипед",
//             price: 40000
//         },
//         {}
//     ]
//     Создайте 4 объекта в массиве, с name и price.
//     Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
//         Отобразить карточки товаров из массива products


const products = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000,
    },
    {
        id: 2,
        name: "Самокат",
        price: 15000,
    },
    {
        id: 3,
        name: "Лыжи",
        price: 20000,
    },
    {
        id: 4,
        name: "Сноуборд",
        price: 25000,
    }
]


const productForm = document.querySelector('.section-add');
const productName = document.querySelector('.add-product_name');
const productPrice = document.querySelector('.add-product_price');

const productsList = document.querySelector('.product-list');

const paramsSort = document.querySelector('.sort-select');
const namesSort = document.querySelector('.sort-item');


function renderProducts() {
    productsList.innerHTML = '';
    products.forEach(el => {
        productsList.innerHTML += `
    <li class="section section-product" id="${el.id}">
        <div class="product-name">${el.name}</div>
        <div class="product-price">${el.price}</div>
        <button class="delete-btn"><svg class="delete-icon"><use href="./symbol-defs.svg#icon-modal_close"></use></svg></button>
    </li>
    `
    }); 
   
    onHover();
    deleteProduct();
};
renderProducts();

function addProducts (ev) {
    ev.preventDefault();
    products.push({
        id: products.length + 1,
        name: productName.value,
        price: Number(productPrice.value),
    })
    renderProducts();
    clearInput();
};

function clearInput() {
    productName.value = '';
    productPrice.value = '';
}
productForm.addEventListener('submit', addProducts);


function onHover() {
    const productCard = document.querySelectorAll('.section-product');
    productCard.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            const deleteBtn = el.querySelector('.delete-btn');
            deleteBtn.style.display = 'flex';
        })

        el.addEventListener('mouseout', function () {
            const deleteBtn = el.querySelector('.delete-btn');
            deleteBtn.style.display = 'none';
        })
    })
};
onHover();

function deleteProduct() {
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(function (el, ind) {
        el.addEventListener('click', function() {
            el.parentElement.remove();
            products.splice(ind, 1); 
            renderProducts();   
        })   
    })
};

function sortByParams () {
    paramsSort.addEventListener('change', function(){
            if (paramsSort.value === "Price") {
                products.sort((firstEl, secondEl) => firstEl.price - secondEl.price);
                renderProducts()                
            } else if (paramsSort.value === "Name") {
                products.sort((firstEl, secondEl)=> firstEl.name.localeCompare(secondEl.name));
                renderProducts()
            } else renderProducts();
        })
}
sortByParams();



// IN PROCESS

// function sortByName () {
//     namesSort.addEventListener('input', function(ev){
       
//         products.filter(el => el.name === ev.currentTarget.value)
//         .forEach(el => {
//             productsList.innerHTML += `
//         <li class="section section-product" id="${el.id}">
//             <div class="product-name">${el.name}</div>
//             <div class="product-price">${el.price}</div>
//             <button class="delete-btn"><svg class="delete-icon"><use href="./symbol-defs.svg#icon-modal_close"></use></svg></button>
//         </li>
//         `
//         })
//         });
        

// }
// sortByName();


