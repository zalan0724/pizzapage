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
const mainPage = () => {
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

    return article
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);


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


const createHeader = () =>{
    let header = document.createElement('header')
    let logo = document.createElement('img')
    logo.setAttribute('src','images/logo.png')
    logo.setAttribute('alt','logo')
    let homeButton = document.createElement('button')
    homeButton.innerHTML='Home'
    let menuButton = document.createElement('button')
    menuButton.innerHTML ='Menu'
    let contactButton = document.createElement('button')
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

(function loadPage() {
    let content = document.querySelector('#content')
    content.appendChild(createHeader())
    content.appendChild((0,_Modules_mainPage__WEBPACK_IMPORTED_MODULE_0__.default)())
    content.appendChild(createFooter())
    console.log('Done')
})()
})();

/******/ })()
;