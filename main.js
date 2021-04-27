/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mainPage = (() => {
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'We love making the most delicious pizza!'
    article.appendChild(h1)
    let firstTab = document.createElement('section')
    firstTab.setAttribute('class', 'tab')
    let firstH2 = document.createElement('h2')
    firstH2.innerHTML = 'Traditions over 40 years'
    let firstSpan = document.createElement('span')
    firstSpan.innerHTML='OUR FAMILY HAS CRAFTED RICH ITALIAN TASTES WITH ARTISAN INGREDIENTS FOR 40+ YEARS. FROM PIZZA AND\n' +
        '                    PASTA TO FRESH SALADS AND DECADENT DESSERTS, WE OFFER CLASSIC CHICAGO-STYLE DISHES AND UNIQUE\n' +
        '                    ARIZONA CREATIONS.'
    firstTab.appendChild(firstH2)
    firstTab.appendChild(firstSpan)
    article.appendChild(firstTab)

    let firstImage = document.createElement('section')
    firstTab.setAttribute('class', 'tab')
    firstImage.setAttribute('class', 'image1')
    article.appendChild(firstImage)

    let secondTab = document.createElement('section')
    secondTab.setAttribute('class', 'tab')
    let secondH2 = document.createElement('h2')
    secondH2.innerHTML ='Order delivery'
    let secondSpan = document.createElement('span')
    secondSpan.innerHTML = 'WE PROVIDE OUR BEST QUALITY EVEN AT YOUR OWN HOME! LOW DELIVERY FEES AND TIME ARE GUARANTEED!'
    secondTab.appendChild(secondH2)
    secondTab.appendChild(secondSpan)
    article.appendChild(secondTab)

    let deliverImages = document.createElement('section')
    deliverImages.setAttribute('class', 'deliveryImages')
    let wolt = document.createElement('img')
    wolt.setAttribute('src', 'images/wolt.png')
    let uber = document.createElement('img')
    uber.setAttribute('src', 'images/uber.webp')
    deliverImages.appendChild(wolt)
    deliverImages.appendChild(uber)
    article.appendChild(deliverImages)

    return {article}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const food = (name, price, picture) => {
    let pizzaName = document.createElement('span')
    pizzaName.setAttribute('id', 'pizzaName')
    pizzaName.innerHTML = name
    let pizzaPrice = document.createElement('span')
    pizzaPrice.innerHTML = `${price}$`
    pizzaPrice.setAttribute('id', 'pizzaPrice')
    let pizzaPicture = document.createElement('img')
    pizzaPicture.setAttribute('src', `images/pizzas/${picture}.jpg`)

    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.appendChild(pizzaName)
    card.appendChild(pizzaPicture)
    card.appendChild(pizzaPrice)

    return card
}
const menuPage = (() => {
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Providing the best quality pizzas'
    article.appendChild(h1)
    let menu = document.createElement('div')
    menu.setAttribute('class', 'tab menu')
    const pizzas = ['Cheese Pizza', 'Veggie Pizza', 'Pepperoni Pizza', 'Meat Pizza', 'Margherita Pizza',
        'Hawaiian Pizza', 'Buffalo Pizza', 'Supreme Pizza']
    const prices = [5,6,7,10,4,7,15,20]
    const picture = ['cheese', 'veggie', 'pepperoni', 'meat', 'margherita', 'hawaiian', 'buffalo', 'supreme']
    for(let i=0; i<pizzas.length; i++){
        menu.appendChild(food(pizzas[i],prices[i],picture[i]))
    }
    article.appendChild(menu)


    return {article}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactPage = (()=>{
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Be our guest anytime'
    article.appendChild(h1)
    let tab1 = document.createElement('section')
    tab1.setAttribute('class', 'tab')
    let firstH2 = document.createElement('h2')
    firstH2.innerHTML = 'Contact us with confidence'
    tab1.appendChild(firstH2)
    let phone = document.createElement('p')
    phone.innerHTML = '<b>Mobile:</b> (503)543-3467'
    tab1.appendChild(phone)
    let email = document.createElement('p')
    email.innerHTML = '<b>Email:</b> info@pizza.com'
    tab1.appendChild(email)
    let facebook = document.createElement('p')
    facebook.innerHTML = '<b>Facebook:</b> www.facebook.com/orderapizza'
    tab1.appendChild(facebook)
    article.appendChild(tab1)

    let placeHolderTab = document.createElement('section')
    placeHolderTab.setAttribute('class', 'tab')
    placeHolderTab.style.backgroundColor = 'rgba(0,0,0,0)'
    placeHolderTab.style.display = 'inline-block'
    placeHolderTab.style.height = '100px'
    article.appendChild(placeHolderTab)

    let tab2 = document.createElement('section')
    tab2.setAttribute('class', 'tab')

    let secondH2 = document.createElement('h2')
    secondH2.innerHTML = 'Meet us'
    tab2.appendChild(secondH2)

    let address = document.createElement('p')
    address.innerHTML = '<b>Address:</b> 2 W 34th St, New York, NY 10001, USA'
    tab2.appendChild(address)

    let map = document.createElement('iframe')
    map.setAttribute('id', 'map')
    map.setAttribute('loading', 'lazy')
    map.setAttribute('allowfullscreen', '')
    map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyCqexLPFcIOkm1lksLKtAPd2nYSZxRcD3w&q=2 W 34th St, New York, NY 10001, USA")
    tab2.appendChild(map)

    article.appendChild(tab2)


    return {article}
})()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Modules_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Modules_contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const scrollTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const createHeader = () =>{
    let header = document.createElement('header')
    let logo = document.createElement('img')
    logo.setAttribute('src','images/logo.png')
    logo.setAttribute('alt','logo')
    let homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'mainButton')
    homeButton.addEventListener('click', ()=>{
        loadPage('main')
        scrollTop()
    })
    homeButton.innerHTML='Home'
    let menuButton = document.createElement('button')
    menuButton.setAttribute('id', 'menuButton')
    menuButton.addEventListener('click', ()=>{
        loadPage('menu')
        scrollTop()
    })
    menuButton.innerHTML ='Menu'
    let contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contactButton')
    contactButton.addEventListener('click', ()=>{
        loadPage('contact')
        scrollTop()
    })
    contactButton.innerHTML ='Contact'
    let orderButton = document.createElement('button')
    orderButton.setAttribute('id','order')
    orderButton.innerHTML = 'Order Now!'

    header.appendChild(logo)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactButton)
    header.appendChild(orderButton)

    return header
}

const createFooter = () =>{
    let footer = document.createElement('footer')
    footer.setAttribute('class', 'tab')
    footer.setAttribute('id', 'footer')

    let link = document.createElement('a')
    link.setAttribute('href', 'https://github.com/zalan0724')
    let logo = document.createElement('img')
    logo.setAttribute('src', 'images/github.png')
    link.appendChild(logo)
    let credit = document.createElement('span')
    credit.innerHTML = "Created by: <br> @zalan0724"

    footer.appendChild(link)
    footer.appendChild(credit)

    return footer
}

function loadPage(page) {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    content.appendChild(createHeader())
    switch(page) {
        case 'main':
            content.appendChild(_Modules_mainPage__WEBPACK_IMPORTED_MODULE_0__.default.article)
            break
        case 'menu':
            content.appendChild(_Modules_menuPage__WEBPACK_IMPORTED_MODULE_1__.default.article)
            break
        case 'contact':
            content.appendChild(_Modules_contactPage__WEBPACK_IMPORTED_MODULE_2__.default.article)
            break
        default:
            content.appendChild(_Modules_mainPage__WEBPACK_IMPORTED_MODULE_0__.default.article)
            break
    }
    content.appendChild(createFooter())
    document.querySelector(`#${page}Button`).setAttribute('class', 'actualPageButton')
    console.log('Done')
}
loadPage('main')


})();

/******/ })()
;