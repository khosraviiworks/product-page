let searchInput = document.querySelector('#search-input');
let products = document.querySelectorAll('.product-item');
let buttons = document.querySelectorAll('.filter');
let searchPriceBtn = document.getElementById('search-price').querySelector('button');



/**
 * 
 * 
 * search name
 * 🔽🔽🔽🔽🔽
 */

const searchHandeler = ()=> {
    let inputValue = searchInput.value.toLowerCase().trim();
    products.forEach(product => {
        const productName = product.children[1].innerHTML.toLowerCase();
        if (productName.includes(inputValue)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
}
)};

searchInput.addEventListener('keyup' , searchHandeler);

/**
 * 
 * 
 * 🔼🔼🔼🔼🔼🔼
 * search name
 */





/**
 * 
 * 
 * button categori
 * 🔽🔽🔽🔽🔽
 * 
 * 
 */



let changeClass = filter=> {
    buttons.forEach(btn=>{
        if (btn.dataset.filter === filter) {
            btn.classList.add('selected')
        }else {
            btn.classList.remove('selected')
        }
    })
}
let filterHandler = (filter)=> {
    let filterVal = filter.target.dataset.filter;
    changeClass(filterVal);
    products.forEach(product => {
        let productDataVal = product.dataset.categori;
        console.log(productDataVal);
        if(filterVal == 'all') {
            product.style.display = 'block'
        }else {
            filterVal===productDataVal?product.style.display = 'block':product.style.display = 'none';

        }
    })
}
buttons.forEach(e => {
    e.addEventListener('click' , filterHandler)
})



/**
 * 
 * 
 * 🔼🔼🔼🔼🔼🔼
 * button categori
 * 
 * 
 */



/**
 * 
 * 
 * search price filter
 * 🔽🔽🔽🔽🔽
 * 
 */
const searchPriceHandeler = (e)=> {
    const inputPriceVal = +searchPriceBtn.parentElement.children[0].value;
    
    products.forEach(product=> {
        let productPrice = product.children[2].innerText;
        let finalPrice = productPrice.split(' ')[1]
        if (!inputPriceVal) {
            product.style.display = 'block'
        } else{
            inputPriceVal==finalPrice? product.style.display = 'block': product.style.display = 'none'
        }
    })
}
searchPriceBtn.addEventListener('click' , searchPriceHandeler)


/**
 * 
 * 
 * 🔼🔼🔼🔼🔼🔼
 * search price filter 
 * 
 */