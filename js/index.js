/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showGreetingText: function() { return /* binding */ showGreetingText; }
/* harmony export */ });
const time = document.querySelector('.data__time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
	setInterval(() => {
		showTime()
		showDate()
	}, 1000)
}

showTime()

const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}
const showDate = () => {
	const currentDate = new Date().toLocaleDateString('en-US', dateOptions)
	date.textContent = currentDate
}

showDate()

const greetingText = document.querySelector('.greeting__text')
const greetingArr = ['night', 'morning', 'afternoon', 'evening']

const showGreetingText = () => {
	const currentTime = new Date().getHours();
	const getGreeting = greetingArr[Math.floor(currentTime / 6)]
	greetingText.textContent = `Good ${getGreeting} ,`
	return getGreeting
}

showGreetingText()

const greetingName = document.querySelector('.greeting__name')

const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

window.addEventListener('beforeunload', setGreetingName)
window.addEventListener('load', getGreetingName)



/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

console.log(_date__WEBPACK_IMPORTED_MODULE_0__.showGreetingText);
const body = document.body
const sliderButtonPrev = document.querySelector('.main__button_prev')
const sliderButtonNext = document.querySelector('.main__button_next')

const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = getRandomNumber(1, 20)

const changeBg = () => {
	let randomNumberForImages = randomNumber.toString().padStart(2, '0')
	let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${(0,_date__WEBPACK_IMPORTED_MODULE_0__.showGreetingText)()}/${randomNumberForImages}.webp`
	const image = new Image();
	image.src = url;
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

const showBgOnLoad = () => changeBg()

showBgOnLoad()

const showBgOnClick = (direction) => {
	randomNumber = (direction === 'prev') ?
		((randomNumber === 1) ? 20 : randomNumber - 1) :
		((randomNumber === 20) ? 1 : randomNumber + 1);
	changeBg()
}

sliderButtonPrev.addEventListener('click', () => showBgOnClick('prev'))
sliderButtonNext.addEventListener('click', () => showBgOnClick('next'))



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



}();
/******/ })()
;