/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setGreetingNameLoad: function() { return /* binding */ setGreetingNameLoad; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



const setGreetingNameLoad = () => _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent = (0,_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.getStorageGreetingName)()

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageGreetingName: function() { return /* binding */ getStorageGreetingName; },
/* harmony export */   greetingName: function() { return /* binding */ greetingName; },
/* harmony export */   setStorageGreetingName: function() { return /* binding */ setStorageGreetingName; }
/* harmony export */ });
const greetingName = document.querySelector('.greeting__name')

const setStorageGreetingName = () => localStorage.setItem('name', (greetingName.textContent).trim())

const getStorageGreetingName = () => localStorage.getItem('name')

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageCity: function() { return /* binding */ getStorageCity; },
/* harmony export */   setStorageCity: function() { return /* binding */ setStorageCity; }
/* harmony export */ });
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const setStorageCity = () => localStorage.setItem('city', _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.weatherInput.value)

const getStorageCity = () => localStorage.getItem('city') || 'Гомель'

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAndDisplayWeather: function() { return /* binding */ fetchAndDisplayWeather; },
/* harmony export */   weatherInput: function() { return /* binding */ weatherInput; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _setText_setWeatherText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _weatherIconStyler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _weatherErrorHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);





const weatherInput = document.querySelector('.weather__input')

const fetchAndDisplayWeather = async () => {
	try {
		const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
		const weatherCityValue = (weatherInput.value).trim()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityValue}&lang=${currLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		weatherInput.value = weatherCityValue
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		;(0,_weatherIconStyler__WEBPACK_IMPORTED_MODULE_2__.updateWeatherIconStyle)(data)
		;(0,_setText_setWeatherText__WEBPACK_IMPORTED_MODULE_1__.setWeatherText)(data, currLang)
		;(0,_weatherErrorHandling__WEBPACK_IMPORTED_MODULE_3__.showWeatherError)('remove')
	} catch (error) {
		(0,_setText_setWeatherText__WEBPACK_IMPORTED_MODULE_1__.setWeatherErrorText)()
		;(0,_weatherErrorHandling__WEBPACK_IMPORTED_MODULE_3__.showWeatherError)('add')
	}
}

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageLanguage: function() { return /* binding */ getStorageLanguage; },
/* harmony export */   setStorageLanguage: function() { return /* binding */ setStorageLanguage; }
/* harmony export */ });
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


const getStorageLanguage = () => localStorage.getItem('language') || 'en'

const setStorageLanguage = () => localStorage.setItem('language', _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__.languageSelect.value)

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languageSelect: function() { return /* binding */ languageSelect; },
/* harmony export */   selectLanguageChildrenArr: function() { return /* binding */ selectLanguageChildrenArr; },
/* harmony export */   setSelectedLanguageValue: function() { return /* binding */ setSelectedLanguageValue; }
/* harmony export */ });
const languageSelect = document.querySelector('.language__select')
const selectLanguageChildrenArr = Array.from(languageSelect.children)

const setSelectedLanguageValue = (lang, value) => {
	const item = selectLanguageChildrenArr.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setWeatherErrorText: function() { return /* binding */ setWeatherErrorText; },
/* harmony export */   setWeatherText: function() { return /* binding */ setWeatherText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _weatherErrorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _weatherText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




const weatherTemperature = document.querySelector('.weather__temperature')
const weatherTemperatureDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')

const setWeatherText = (data, currLang) => {
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${_weatherText__WEBPACK_IMPORTED_MODULE_2__.weatherText[currLang].wind} ${Math.round(data.wind.speed)} ${_weatherText__WEBPACK_IMPORTED_MODULE_2__.weatherText[currLang].units}`;
	weatherHumidity.textContent = `${_weatherText__WEBPACK_IMPORTED_MODULE_2__.weatherText[currLang].humidity} ${Math.round(data.main.humidity)}%`;
	_weatherErrorHandling__WEBPACK_IMPORTED_MODULE_1__.weatherError.textContent = '';
}

const setWeatherErrorText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	_weatherErrorHandling__WEBPACK_IMPORTED_MODULE_1__.weatherError.textContent = `${_weatherText__WEBPACK_IMPORTED_MODULE_2__.weatherText[currLang].error}`;
}

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showWeatherError: function() { return /* binding */ showWeatherError; },
/* harmony export */   weatherError: function() { return /* binding */ weatherError; }
/* harmony export */ });
const weatherError = document.querySelector('.weather_error')

const showWeatherError = (value) => weatherError.classList[value]('weather_error-show')

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherText: function() { return /* binding */ weatherText; }
/* harmony export */ });
const weatherText = {
	en: {
		wind: 'Wind speed:',
		units: 'm/s',
		humidity: 'Humidity:',
		error: "Error: City wasn't found!"
	},
	ru: {
		wind: 'Скорость ветра:',
		units: 'м/c',
		humidity: 'Влажность:',
		error: "Ошибка: Город не найден!"
	}
}

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWeatherIconStyle: function() { return /* binding */ updateWeatherIconStyle; }
/* harmony export */ });
const weatherIcon = document.querySelector('.weather__icon')

const updateWeatherIconStyle = (data) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setWeatherInputFromStorage: function() { return /* binding */ setWeatherInputFromStorage; }
/* harmony export */ });
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _weatherStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const setWeatherInputFromStorage = () => _weatherAPI__WEBPACK_IMPORTED_MODULE_0__.weatherInput.value = (0,_weatherStorage__WEBPACK_IMPORTED_MODULE_1__.getStorageCity)()

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageQueryInputValue: function() { return /* binding */ getStorageQueryInputValue; },
/* harmony export */   setStorageQueryInputValue: function() { return /* binding */ setStorageQueryInputValue; }
/* harmony export */ });
/* harmony import */ var _changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const getStorageQueryInputValue = () => localStorage.getItem('queryInputValue')
const setStorageQueryInputValue = () => localStorage.setItem('queryInputValue', (_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_0__.queryInput.value).trim())

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePexelsImgOnQueryInputChange: function() { return /* binding */ changePexelsImgOnQueryInputChange; },
/* harmony export */   queryInput: function() { return /* binding */ queryInput; },
/* harmony export */   queryWrapper: function() { return /* binding */ queryWrapper; }
/* harmony export */ });
/* harmony import */ var _slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _slider_sliderStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _slider_changeImages_Pexels_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _setQueryValue_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);





const queryWrapper = document.querySelector('.query')
const queryInput = document.querySelector('.query__input')
const forbiddenSymbols = ['#', '%', '&', '+', ';']

const changePexelsImgOnQueryInputChange = () => {
	const queryInputValue = String(queryInput.value.trim())
	const checkIncludeForbiddenSymbols = Array.from(queryInputValue).some(e => forbiddenSymbols.includes(e))
	if (queryInputValue === '' || checkIncludeForbiddenSymbols) {
		(0,_slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_0__.showSliderPopup)('add')
		return
	}
	(0,_setQueryValue_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_3__.setQueryVariableValue)(queryInputValue)
	queryInput.value = queryInputValue
	;(0,_slider_sliderStorage__WEBPACK_IMPORTED_MODULE_1__.setStorageNumPicturePexels)(0)
	;(0,_slider_changeImages_Pexels_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__.changePexelsImages)()
}

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popupShadow: function() { return /* binding */ popupShadow; },
/* harmony export */   showSliderPopup: function() { return /* binding */ showSliderPopup; },
/* harmony export */   sliderPopup: function() { return /* binding */ sliderPopup; }
/* harmony export */ });
/* harmony import */ var _changeImages_imageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const sliderPopup = document.querySelector('.slider__popup')
const popupShadow = document.querySelector('.popup__shadow')

const showSliderPopup = (value) => {
	sliderPopup.classList[value]('slider__popup_show')
	popupShadow.classList[value]('popup__shadow-slider_show')
	_changeImages_imageLoader__WEBPACK_IMPORTED_MODULE_0__.body.classList[value]('body_fixed')
}

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: function() { return /* binding */ body; },
/* harmony export */   loadImageFromUrl: function() { return /* binding */ loadImageFromUrl; }
/* harmony export */ });
const body = document.body
const image = new Image();

const loadImageFromUrl = (url) => {
	image.src = url
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageNumPicturePexels: function() { return /* binding */ getStorageNumPicturePexels; },
/* harmony export */   setStorageNumPicturePexels: function() { return /* binding */ setStorageNumPicturePexels; }
/* harmony export */ });
const getStorageNumPicturePexels = () => +localStorage.getItem('pexelsNum')

const setStorageNumPicturePexels = (value) => localStorage.setItem('pexelsNum', value)

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAX_PEXELS_IMAGES: function() { return /* binding */ MAX_PEXELS_IMAGES; },
/* harmony export */   changePexelsImages: function() { return /* binding */ changePexelsImages; }
/* harmony export */ });
/* harmony import */ var pexels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _query_setQueryValue_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _sliderStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);








const client = (0,pexels__WEBPACK_IMPORTED_MODULE_0__.createClient)('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
let MAX_PEXELS_IMAGES;

const changePexelsImages = () => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_4__.getStorageImagesSrc)()
	const pexelsNumb = (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_5__.getStorageNumPicturePexels)()
	if (imagesSrc === 'pexels') {
		_query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_2__.queryWrapper.classList.remove('query_hide')
		client.photos.search({ query: _query_setQueryValue_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_1__.query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				if (!pexelsNumb) {
					(0,_sliderStorage__WEBPACK_IMPORTED_MODULE_5__.setStorageNumPicturePexels)(0)
					;(0,_imageLoader__WEBPACK_IMPORTED_MODULE_6__.loadImageFromUrl)(e.photos[pexelsNumb].src.landscape)
				}
				else {
					pexelsNumb >= 0 ? (0,_imageLoader__WEBPACK_IMPORTED_MODULE_6__.loadImageFromUrl)(e.photos[pexelsNumb].src.landscape) : (0,_imageLoader__WEBPACK_IMPORTED_MODULE_6__.loadImageFromUrl)(e.photos[MAX_PEXELS_IMAGES + pexelsNumb].src.landscape)
				}
			} else {
				(0,_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_3__.showSliderPopup)('add')
			}
		});
	}
}

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClient: function() { return /* binding */ c; }
/* harmony export */ });
var t={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function r(r,e){var n={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:r}},o=t[e];return function(t,r){return fetch(""+o+t+"?"+function(t){return Object.keys(t).map(function(r){return r+"="+t[r]}).join("&")}(r||{}),n).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})}}function e(t){var e=r(t,"collections");return{all:function(t){return void 0===t&&(t={}),e("",t)},media:function(t){var r=t.id,n=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r.indexOf(e=i[n])>=0||(o[e]=t[e]);return o}(t,["id"]);return e(""+r,n)},featured:function(t){return void 0===t&&(t={}),e("featured",t)}}}function n(t){return!(!t||!t.photos)}var o={__proto__:null,isPhotos:n,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function i(t){var e=r(t,"photo");return{search:function(t){return e("/search",t)},curated:function(t){return void 0===t&&(t={}),e("/curated",t)},show:function(t){return e("/photos/"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then(function(t){return n(t)?t.photos[0]:t})}catch(t){return Promise.reject(t)}}}}function u(t){var e=r(t,"video");return{search:function(t){return e("/search",t)},popular:function(t){return void 0===t&&(t={}),e("/popular",t)},show:function(t){return e("/videos/"+t.id)}}}function c(t){if(!t||"string"!=typeof t)throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");return{typeCheckers:o,photos:i(t),videos:u(t),collections:e(t)}}__webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(20);
module.exports = self.fetch.bind(self);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMException: function() { return /* binding */ DOMException; },
/* harmony export */   Headers: function() { return /* binding */ Headers; },
/* harmony export */   Request: function() { return /* binding */ Request; },
/* harmony export */   Response: function() { return /* binding */ Response; },
/* harmony export */   fetch: function() { return /* binding */ fetch; }
/* harmony export */ });
/* eslint-disable no-prototype-builtins */
var g =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  // eslint-disable-next-line no-undef
  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
  {}

var support = {
  searchParams: 'URLSearchParams' in g,
  iterable: 'Symbol' in g && 'iterator' in Symbol,
  blob:
    'FileReader' in g &&
    'Blob' in g &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in g,
  arrayBuffer: 'ArrayBuffer' in g
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
      }
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body._noBody) return
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)
  var encoding = match ? match[1] : 'utf-8'
  reader.readAsText(blob, encoding)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    // eslint-disable-next-line no-self-assign
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._noBody = true;
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }
  }

  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this)
      if (isConsumed) {
        return isConsumed
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        )
      } else {
        return Promise.resolve(this._bodyArrayBuffer)
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer)
    } else {
      throw new Error('could not read as ArrayBuffer')
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal || (function () {
    if ('AbortController' in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  }());
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        try {
          headers.append(key, value)
        } catch (error) {
          console.warn('Response ' + error.message)
        }
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
  }
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 200, statusText: ''})
  response.ok = false
  response.status = 0
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = g.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      // This check if specifically for when a user fetches a file locally from the file system
      // Only if the status is out of a normal range
      if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request timed out'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && g.location.href ? g.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name))
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
      request.headers.forEach(function(value, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value)
        }
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!g.fetch) {
  g.fetch = fetch
  g.Headers = Headers
  g.Request = Request
  g.Response = Response
}


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: function() { return /* binding */ query; },
/* harmony export */   setQueryVariableValue: function() { return /* binding */ setQueryVariableValue; }
/* harmony export */ });
let query;

const setQueryVariableValue = (value) => query = value

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageImagesSrc: function() { return /* binding */ getStorageImagesSrc; },
/* harmony export */   setStorageImagesSrc: function() { return /* binding */ setStorageImagesSrc; }
/* harmony export */ });
const getStorageImagesSrc = () => localStorage.getItem('source') || 'github'

const setStorageImagesSrc = (value) => localStorage.setItem('source', value)

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setQueryInputValue: function() { return /* binding */ setQueryInputValue; }
/* harmony export */ });
/* harmony import */ var _changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _localStorageQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



const setQueryInputValue = () => _changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_0__.queryInput.value = (0,_localStorageQuery__WEBPACK_IMPORTED_MODULE_1__.getStorageQueryInputValue)()

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeAppText: function() { return /* binding */ changeAppText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _greeting_setText_greetingName_greetingNamePlaceholder_setGreetingNamePlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _imagesSrc_setText_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _language_setText_selectText_setLanguageSelectText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _language_setText_descriptionText_setLanguageDescriptionText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _query_setText_setQueryLabelText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _slider_sliderPopup_setText_setSliderPopupText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var _settings_setText_titleText_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var _settings_setText_inputsText_setSettingsInputsText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
/* harmony import */ var _greeting_setText_greetingPopup_setGreetingPopupText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);












const changeAppText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	if (currLang === 'en') {
		(0,_greeting_setText_greetingName_greetingNamePlaceholder_setGreetingNamePlaceholder__WEBPACK_IMPORTED_MODULE_1__.setGreetingNamePlaceholder)('en')
		;(0,_imagesSrc_setText_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__.setImagesSrcText)('en')
		;(0,_language_setText_selectText_setLanguageSelectText__WEBPACK_IMPORTED_MODULE_4__.setLanguageSelectText)('en', 'en', 'en', 'ru')
		;(0,_language_setText_descriptionText_setLanguageDescriptionText__WEBPACK_IMPORTED_MODULE_5__.setLanguageDescriptionText)('en')
		;(0,_query_setText_setQueryLabelText__WEBPACK_IMPORTED_MODULE_6__.setQueryLabelText)('en')
		;(0,_slider_sliderPopup_setText_setSliderPopupText__WEBPACK_IMPORTED_MODULE_7__.setSliderPopupText)('en')
		;(0,_settings_setText_titleText_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_8__.setSettingsTitleText)('en')
		;(0,_settings_setText_inputsText_setSettingsInputsText__WEBPACK_IMPORTED_MODULE_9__.setSettingsInputsText)('en')
		;(0,_greeting_setText_greetingPopup_setGreetingPopupText__WEBPACK_IMPORTED_MODULE_10__.setGreetingPopupText)('en')
	}
	else if (currLang === 'ru') {
		(0,_greeting_setText_greetingName_greetingNamePlaceholder_setGreetingNamePlaceholder__WEBPACK_IMPORTED_MODULE_1__.setGreetingNamePlaceholder)('ru')
		;(0,_imagesSrc_setText_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__.setImagesSrcText)('ru')
		;(0,_language_setText_selectText_setLanguageSelectText__WEBPACK_IMPORTED_MODULE_4__.setLanguageSelectText)('ru', 'en', 'ru', 'ru')
		;(0,_language_setText_descriptionText_setLanguageDescriptionText__WEBPACK_IMPORTED_MODULE_5__.setLanguageDescriptionText)('ru')
		;(0,_query_setText_setQueryLabelText__WEBPACK_IMPORTED_MODULE_6__.setQueryLabelText)('ru')
		;(0,_slider_sliderPopup_setText_setSliderPopupText__WEBPACK_IMPORTED_MODULE_7__.setSliderPopupText)('ru')
		;(0,_settings_setText_titleText_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_8__.setSettingsTitleText)('ru')
		;(0,_settings_setText_inputsText_setSettingsInputsText__WEBPACK_IMPORTED_MODULE_9__.setSettingsInputsText)('ru')
		;(0,_greeting_setText_greetingPopup_setGreetingPopupText__WEBPACK_IMPORTED_MODULE_10__.setGreetingPopupText)('ru')
	}
	(0,_greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_2__.setGreetingMessageText)()
}

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setGreetingNamePlaceholder: function() { return /* binding */ setGreetingNamePlaceholder; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _greetingNamePlaceholderText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);



const setGreetingNamePlaceholder = (lang) => {
	const name = localStorage.getItem('name')
	if (!name
		|| _greetingNamePlaceholderText__WEBPACK_IMPORTED_MODULE_1__.greetingNamePlaceholderText.en === name || _greetingNamePlaceholderText__WEBPACK_IMPORTED_MODULE_1__.greetingNamePlaceholderText.ru === name) {
		_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent = _greetingNamePlaceholderText__WEBPACK_IMPORTED_MODULE_1__.greetingNamePlaceholderText[lang]
		;(0,_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.setStorageGreetingName)()
	}
}

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greetingNamePlaceholderText: function() { return /* binding */ greetingNamePlaceholderText; }
/* harmony export */ });
const greetingNamePlaceholderText = {
	en: '[Enter name]',
	ru: '[Введите имя]'
}


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setGreetingMessageText: function() { return /* binding */ setGreetingMessageText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _greetingMessageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);



const greetingText = document.querySelector('.greeting__text')

const setGreetingMessageText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	const currHour = new Date().getHours();
	const greeting = _greetingMessageText__WEBPACK_IMPORTED_MODULE_1__.greetingMessageText[currLang][Math.floor(currHour / 6)]
	greetingText.textContent = greeting
	return greeting
}

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greetingMessageText: function() { return /* binding */ greetingMessageText; }
/* harmony export */ });
const greetingMessageText = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, ']
}

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setImagesSrcText: function() { return /* binding */ setImagesSrcText; }
/* harmony export */ });
/* harmony import */ var _imagesSrcText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


const srcDescription = document.querySelector('.source__description')

const setImagesSrcText = (lang) => srcDescription.textContent = _imagesSrcText__WEBPACK_IMPORTED_MODULE_0__.srcDescriptionText[lang]

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   srcDescriptionText: function() { return /* binding */ srcDescriptionText; }
/* harmony export */ });
const srcDescriptionText = {
	en: 'Source of images:',
	ru: 'Источник изображений:'
}

/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLanguageSelectText: function() { return /* binding */ setLanguageSelectText; }
/* harmony export */ });
/* harmony import */ var _languageSelectText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const setLanguageSelectText = (valOne, valTwo, valThree, valFour,) => {
	_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.selectLanguageChildrenArr[0].label = _languageSelectText__WEBPACK_IMPORTED_MODULE_0__.languageSelectText[valOne][valTwo]
	_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.selectLanguageChildrenArr[1].label = _languageSelectText__WEBPACK_IMPORTED_MODULE_0__.languageSelectText[valThree][valFour]
}

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languageSelectText: function() { return /* binding */ languageSelectText; }
/* harmony export */ });
const languageSelectText = {
	en: {
		en: 'English',
		ru: 'Russian'
	},
	ru: {
		en: 'Английский',
		ru: 'Русский'
	}
}

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLanguageDescriptionText: function() { return /* binding */ setLanguageDescriptionText; }
/* harmony export */ });
/* harmony import */ var _languageDescriptionText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);


const languageDescription = document.querySelector('.language__description')

const setLanguageDescriptionText = (lang) => languageDescription.textContent = _languageDescriptionText__WEBPACK_IMPORTED_MODULE_0__.languageDescriptionText[lang]

/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languageDescriptionText: function() { return /* binding */ languageDescriptionText; }
/* harmony export */ });
const languageDescriptionText = {
	en: 'Change language:',
	ru: 'Изменить язык:'
}

/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setQueryLabelText: function() { return /* binding */ setQueryLabelText; }
/* harmony export */ });
/* harmony import */ var _queryLabelText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


const queryLabel = document.querySelector('.query__label')

const setQueryLabelText = (lang) => queryLabel.textContent = _queryLabelText__WEBPACK_IMPORTED_MODULE_0__.queryLabelText[lang]

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryLabelText: function() { return /* binding */ queryLabelText; }
/* harmony export */ });
const queryLabelText = {
	en: 'Search for images by tag:',
	ru: 'Поиск изображений по тэгу:'
}

/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSliderPopupText: function() { return /* binding */ setSliderPopupText; }
/* harmony export */ });
/* harmony import */ var _sliderPopupText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);


const sliderPopupMessage = document.querySelector('.slider__popup-message')

const setSliderPopupText = (lang) => sliderPopupMessage.textContent = _sliderPopupText__WEBPACK_IMPORTED_MODULE_0__.sliderPopupText[lang]

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderPopupText: function() { return /* binding */ sliderPopupText; }
/* harmony export */ });
const sliderPopupText = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено. Попробуйте еще раз.']
}

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSettingsTitleText: function() { return /* binding */ setSettingsTitleText; }
/* harmony export */ });
/* harmony import */ var _settingsStyler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _settingsTitleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);



const setSettingsTitleText = (lang) => _settingsStyler__WEBPACK_IMPORTED_MODULE_0__.settingTitle.textContent = _settingsTitleText__WEBPACK_IMPORTED_MODULE_1__.settingsTitleText[lang]

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingTitle: function() { return /* binding */ settingTitle; },
/* harmony export */   updateSettingsActiveStyles: function() { return /* binding */ updateSettingsActiveStyles; }
/* harmony export */ });
const settingsButton = document.querySelector('.settings__header-button')
const settingTitle = document.querySelector('.settings__header-title')

const updateSettingsActiveStyles = (value) => {
	settingTitle.classList[value]('settings__header-title_active')
	settingsButton.classList[value]('settings__header-button_active')
}

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingsTitleText: function() { return /* binding */ settingsTitleText; }
/* harmony export */ });
const settingsTitleText = {
	en: 'SETTINGS',
	ru: 'НАСТРОЙКИ'
}

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSettingsInputsText: function() { return /* binding */ setSettingsInputsText; }
/* harmony export */ });
/* harmony import */ var _settingsInputsText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);


const settingsInputsTitles = document.querySelectorAll('.settings__blocks-hide p')

const setSettingsInputsText = (lang) => {
	settingsInputsTitles.forEach((e, i) => {
		e.textContent = _settingsInputsText__WEBPACK_IMPORTED_MODULE_0__.settingsInputsText[lang][i]
	})
}

/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingsInputsText: function() { return /* binding */ settingsInputsText; }
/* harmony export */ });
const settingsInputsText = {
	en: ['Show', 'Player', 'Weather', 'Clock', 'Date', 'Greeting', 'Quotes'],
	ru: ['Показать', 'Плеер', 'Погода', 'Часы', 'Дата', 'Приветствие', 'Цитата']
}

/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setGreetingPopupText: function() { return /* binding */ setGreetingPopupText; }
/* harmony export */ });
/* harmony import */ var _greetingPopupText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);


const greetingPopupMessage = document.querySelector('.greeting__popup-message')

const setGreetingPopupText = (lang) => {
	greetingPopupMessage.textContent = _greetingPopupText__WEBPACK_IMPORTED_MODULE_0__.greetingPopupText[lang]
}

/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greetingPopupText: function() { return /* binding */ greetingPopupText; }
/* harmony export */ });
const greetingPopupText = {
	en: 'Character limit exceeded.',
	ru: 'Превышен лимит символов.'
}

/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTime: function() { return /* binding */ showTime; }
/* harmony export */ });
const time = document.querySelector('.data__time')

const showTime = () => {
	const currTime = new Date().toLocaleTimeString()
	time.textContent = currTime
}

/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDate: function() { return /* binding */ showDate; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

const showDate = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	const currDate = new Date().toLocaleDateString(currLang, dateOptions)
	date.textContent = currDate
}

/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callEvents: function() { return /* binding */ callEvents; }
/* harmony export */ });
const callEvents = (e, eventsObject) => {
	const target = e.target
	for (const selector in eventsObject) {
		if (target.closest(selector)) {
			eventsObject[selector](e)
			break
		}
	}
}

/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickEvents: function() { return /* binding */ clickEvents; }
/* harmony export */ });
/* harmony import */ var _quotes_rotateQuotesChangeBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _settings_settingsStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _settings_settingsCheckedInputs_loadSettingsCheckedInputsClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _settings_hideCheckedBlocks_hideCheckedBlocksClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _greeting_clearGreetingsName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _player_playbackControl_playbackControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);
/* harmony import */ var _player_switchSong_playClickedSong__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var _player_switchSong_nextSong__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var _player_switchSong_prevSong__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67);
/* harmony import */ var _player_progressBar_rewindSong__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68);
/* harmony import */ var _slider_changeImages_Pexels_pexelsImageClickChanger___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70);
/* harmony import */ var _slider_changeImages_Github_githubImageClickChanger___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71);
/* harmony import */ var _player_volume_checkIsMute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75);
/* harmony import */ var _settings_settingsStyler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _settings_settingsVisibility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80);
/* harmony import */ var _quotes_changeQuote__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81);
/* harmony import */ var _greeting_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85);



















const clickEvents = {
	'.slider__button_prev': () => {
		(0,_slider_changeImages_Github_githubImageClickChanger___WEBPACK_IMPORTED_MODULE_12__.changeGithubImagesClick)('prev')
		;(0,_slider_changeImages_Pexels_pexelsImageClickChanger___WEBPACK_IMPORTED_MODULE_11__.changePexelsImagesClick)('prev')
	},
	'.slider__button_next': () => {
		(0,_slider_changeImages_Github_githubImageClickChanger___WEBPACK_IMPORTED_MODULE_12__.changeGithubImagesClick)('next')
		;(0,_slider_changeImages_Pexels_pexelsImageClickChanger___WEBPACK_IMPORTED_MODULE_11__.changePexelsImagesClick)('next')
	},
	'.player__playback-play': _player_playbackControl_playbackControl__WEBPACK_IMPORTED_MODULE_6__.playbackControl,
	'.player__progress': (e) => (0,_player_progressBar_rewindSong__WEBPACK_IMPORTED_MODULE_10__.rewindSong)(e),
	'.player__playback-prev': _player_switchSong_prevSong__WEBPACK_IMPORTED_MODULE_9__.prevSong,
	'.player__playback-next': _player_switchSong_nextSong__WEBPACK_IMPORTED_MODULE_8__.nextSong,
	'.player__list': (e) => (0,_player_switchSong_playClickedSong__WEBPACK_IMPORTED_MODULE_7__.playClickedSong)(e),
	'.player__volume-mute': _player_volume_checkIsMute__WEBPACK_IMPORTED_MODULE_13__.checkIsMute,
	'.slider__popup-close-button': () => (0,_slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_5__.showSliderPopup)('remove'),
	'.greeting__popup-close-button': () => (0,_greeting_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_17__.showGreetingPopup)('remove'),
	'.popup__shadow-slider_show': () => (0,_slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_5__.showSliderPopup)('remove'),
	'.popup__shadow-greeting_show': () => (0,_greeting_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_17__.showGreetingPopup)('remove'),
	'.settings__header': () => {
		(0,_settings_settingsStyler__WEBPACK_IMPORTED_MODULE_14__.updateSettingsActiveStyles)('toggle'),
			(0,_settings_settingsVisibility__WEBPACK_IMPORTED_MODULE_15__.showSettings)('toggle')
	},
	'.settings__close-button': () => {
		(0,_settings_settingsVisibility__WEBPACK_IMPORTED_MODULE_15__.showSettings)('remove'),
			(0,_settings_settingsStyler__WEBPACK_IMPORTED_MODULE_14__.updateSettingsActiveStyles)('remove')
	},
	'.quotes__change-btn': () => {
		(0,_quotes_changeQuote__WEBPACK_IMPORTED_MODULE_16__.changeQuote)()
		;(0,_quotes_rotateQuotesChangeBtn__WEBPACK_IMPORTED_MODULE_0__.rotateQuotesChangeBtn)()
	},
	'.settings__blocks-hide': (e) => {
		(0,_settings_settingsCheckedInputs_loadSettingsCheckedInputsClick__WEBPACK_IMPORTED_MODULE_2__.loadSettingsCheckedInputsClick)(e)
		;(0,_settings_hideCheckedBlocks_hideCheckedBlocksClick__WEBPACK_IMPORTED_MODULE_3__.hideCheckedBlocksClick)(e)
		;(0,_settings_settingsStorage__WEBPACK_IMPORTED_MODULE_1__.setStorageSettingsCheckedInputs)()
	},
	'.greeting__name': _greeting_clearGreetingsName__WEBPACK_IMPORTED_MODULE_4__.clearGreetingsName
}

/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotateQuotesChangeBtn: function() { return /* binding */ rotateQuotesChangeBtn; }
/* harmony export */ });
const quotesChangeBtn = document.querySelector('.quotes__change-btn')
let rotate = 0;

const rotateQuotesChangeBtn = () => {
	rotate += 180;
	quotesChangeBtn.style.transform = `rotate(${rotate}deg)`
}

/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageSettingsCheckedInputs: function() { return /* binding */ getStorageSettingsCheckedInputs; },
/* harmony export */   setStorageSettingsCheckedInputs: function() { return /* binding */ setStorageSettingsCheckedInputs; }
/* harmony export */ });
/* harmony import */ var _checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);


const setStorageSettingsCheckedInputs = () => {
	const indexOfCheckedInputs = (0,_checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__.findCheckedSettingsInputs)()
	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
}

const getStorageSettingsCheckedInputs = () => JSON.parse(localStorage.getItem('indexOfCheckedInputs'))

/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findCheckedSettingsInputs: function() { return /* binding */ findCheckedSettingsInputs; },
/* harmony export */   settingsShowInputs: function() { return /* binding */ settingsShowInputs; }
/* harmony export */ });
const settingsShowInputs = document.querySelectorAll('.settings__blocks-hide input')

const findCheckedSettingsInputs = () => Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)

/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSettingsCheckedInputsClick: function() { return /* binding */ loadSettingsCheckedInputsClick; }
/* harmony export */ });
const loadSettingsCheckedInputsClick = (e) => {
	if (e.target.closest('.settings__blocks-hide-inner') && e.target.tagName !== 'INPUT') {
		const closestInput = e.target.closest('.settings__blocks-hide-inner').querySelector('input')
		closestInput.checked = closestInput.checked ? false : true
	}
}

/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideCheckedBlocksClick: function() { return /* binding */ hideCheckedBlocksClick; }
/* harmony export */ });
const forbiddenClasses = ['settings__blocks-hide-title', 'settings__blocks-hide']

const hideCheckedBlocksClick = (e) => {
	if (!forbiddenClasses.includes(e.target.className)) {
		const dataShow = e.target.closest('[data-blockshide]').dataset.blockshide
		document.querySelector(`.${dataShow}`).classList.toggle('settings__blocks-hide_hide')
	}
}

/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearGreetingsName: function() { return /* binding */ clearGreetingsName; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const forbiddenNames = ['[Enter name]', '[Введите имя]']

const clearGreetingsName = () => {
	if (forbiddenNames.includes((_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent))) {
		_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent = ''
		;(0,_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.setStorageGreetingName)()
	}
}

/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playbackControl: function() { return /* binding */ playbackControl; }
/* harmony export */ });
/* harmony import */ var _playSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _pauseSong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _setIsPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);




const playbackControl = () => _setIsPlay__WEBPACK_IMPORTED_MODULE_2__.isPlay ? (0,_pauseSong__WEBPACK_IMPORTED_MODULE_1__.pauseSong)() : (0,_playSong__WEBPACK_IMPORTED_MODULE_0__.playSong)()

/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audio: function() { return /* binding */ audio; },
/* harmony export */   playBtn: function() { return /* binding */ playBtn; },
/* harmony export */   playBtnIcon: function() { return /* binding */ playBtnIcon; },
/* harmony export */   playSong: function() { return /* binding */ playSong; },
/* harmony export */   trackName: function() { return /* binding */ trackName; }
/* harmony export */ });
/* harmony import */ var _switchSong_setCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _setIsPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);



const trackName = document.querySelector('.player__track-name')
const audio = document.querySelector('.player__audio')
const playBtn = document.querySelector('.player__playback-play')
const playBtnIcon = document.querySelector('.player__playback-play-icon use')

const playSong = () => {
	document.querySelectorAll('li')[_switchSong_setCount__WEBPACK_IMPORTED_MODULE_0__.count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')
	audio.play()
	playBtnIcon.setAttribute('href', './images/svg/pauseSongBtn.svg#pauseSong')
	playBtn.classList.add('player__playback-play_active')
	;(0,_setIsPlay__WEBPACK_IMPORTED_MODULE_1__.setIsPlay)(true)
}

/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   count: function() { return /* binding */ count; },
/* harmony export */   decrementCount: function() { return /* binding */ decrementCount; },
/* harmony export */   incrementCount: function() { return /* binding */ incrementCount; },
/* harmony export */   setCount: function() { return /* binding */ setCount; }
/* harmony export */ });
let count = 0;

const setCount = (value) => count = value
const incrementCount = () => count++
const decrementCount = () => count--

/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPlay: function() { return /* binding */ isPlay; },
/* harmony export */   setIsPlay: function() { return /* binding */ setIsPlay; }
/* harmony export */ });
let isPlay = false;

const setIsPlay = (value) => isPlay = value

/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pauseSong: function() { return /* binding */ pauseSong; }
/* harmony export */ });
/* harmony import */ var _playSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _setIsPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);



const pauseSong = () => {
	_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.pause()
	_playSong__WEBPACK_IMPORTED_MODULE_0__.playBtnIcon.setAttribute('href', './images/svg/playSongBtn.svg#playSong')
	_playSong__WEBPACK_IMPORTED_MODULE_0__.playBtn.classList.remove('player__playback-play_active')
	;(0,_setIsPlay__WEBPACK_IMPORTED_MODULE_1__.setIsPlay)(false)
}

/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playClickedSong: function() { return /* binding */ playClickedSong; }
/* harmony export */ });
/* harmony import */ var _loadSong_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _playbackControl_playbackControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _setCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);





const playClickedSong = (e) => {
	const songNum = parseInt(e.target.getAttribute('song_number'));
	if (!isNaN(songNum)) {
		if (_setCount_js__WEBPACK_IMPORTED_MODULE_3__.count !== songNum) {
			const songList = document.querySelectorAll('.player__list-item')
			songList[_setCount_js__WEBPACK_IMPORTED_MODULE_3__.count].classList.remove('player__list-item_active');
			(0,_setCount_js__WEBPACK_IMPORTED_MODULE_3__.setCount)(songNum)
			;(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_0__.loadSong)();
			(0,_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_1__.playSong)();
		} else {
			(0,_playbackControl_playbackControl_js__WEBPACK_IMPORTED_MODULE_2__.playbackControl)()
		}
	}
}

/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSong: function() { return /* binding */ loadSong; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _switchSong_setCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _songTime_updateSongTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);





const loadSong = () => {
	const currSong = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong_setCount__WEBPACK_IMPORTED_MODULE_2__.count]
	_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__.audio.src = currSong.src
	_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__.trackName.textContent = currSong.title
	;(0,_songTime_updateSongTime__WEBPACK_IMPORTED_MODULE_3__.updateSongTime)()
}

/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const playList = [
	{
		title: "Княzz - Адель",
		src: "sounds/Княzz - Адель.mp3",
		duration: "04:29",
	},
	{
		title: "ДДТ - Дождь",
		src: "sounds/ДДТ - Дождь.mp3",
		duration: "05:04",
	},
	{
		title: "Scorpions - Still loving you",
		src: "sounds/Scorpions - Still loving you.mp3",
		duration: "06:28",
	},
	{
		title: "Imagine Dragons - Warriors",
		src: "sounds/Imagine Dragons - Warriors.mp3",
		duration: "02:50",
	},
	{
		title: "КиШ - Утренний рассвет",
		src: "sounds/КиШ - Утренний рассвет.mp3",
		duration: "02:29",
	},
];
/* harmony default export */ __webpack_exports__["default"] = (playList);


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateSongTime: function() { return /* binding */ updateSongTime; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _getSongTimeCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _switchSong_setCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);





let songCurrTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration-time')

const updateSongTime = () => {
	songCurrTime.textContent = (0,_getSongTimeCode__WEBPACK_IMPORTED_MODULE_1__.getSongTimeCode)(_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_3__.audio.currentTime)
	songDurationTime.textContent = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong_setCount__WEBPACK_IMPORTED_MODULE_2__.count].duration
}

/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSongTimeCode: function() { return /* binding */ getSongTimeCode; }
/* harmony export */ });
let seconds;
let minutes;

const getSongTimeCode = (num) => {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextSong: function() { return /* binding */ nextSong; }
/* harmony export */ });
/* harmony import */ var _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _setCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _loadSong_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);





const nextSong = () => {
	const songList = document.querySelectorAll('.player__list-item')
	songList[_setCount_js__WEBPACK_IMPORTED_MODULE_1__.count].classList.remove('player__list-item_active')
	;(0,_setCount_js__WEBPACK_IMPORTED_MODULE_1__.incrementCount)()
	if (_setCount_js__WEBPACK_IMPORTED_MODULE_1__.count > _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1) {
		(0,_setCount_js__WEBPACK_IMPORTED_MODULE_1__.setCount)(0)
	}
	(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_2__.loadSong)()
	;(0,_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_3__.playSong)()
}

/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prevSong: function() { return /* binding */ prevSong; }
/* harmony export */ });
/* harmony import */ var _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _setCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _loadSong_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);





const prevSong = () => {
	const songList = document.querySelectorAll('.player__list-item')
	songList[_setCount_js__WEBPACK_IMPORTED_MODULE_1__.count].classList.remove('player__list-item_active')
	;(0,_setCount_js__WEBPACK_IMPORTED_MODULE_1__.decrementCount)()
	if (_setCount_js__WEBPACK_IMPORTED_MODULE_1__.count < 0) {
		(0,_setCount_js__WEBPACK_IMPORTED_MODULE_1__.setCount)(_playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1)
	}
	(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_2__.loadSong)()
	;(0,_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_3__.playSong)()
}

/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rewindSong: function() { return /* binding */ rewindSong; }
/* harmony export */ });
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _updateProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);



const rewindSong = (e) => {
	let x = e.pageX - _updateProgressBar__WEBPACK_IMPORTED_MODULE_1__.progressBar.getBoundingClientRect().left
	let clickedValue = (x * _updateProgressBar__WEBPACK_IMPORTED_MODULE_1__.progressBar.max) / _updateProgressBar__WEBPACK_IMPORTED_MODULE_1__.progressBar.clientWidth;
	_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime = (_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.duration * clickedValue) / _updateProgressBar__WEBPACK_IMPORTED_MODULE_1__.progressBar.max;
}

/***/ }),
/* 69 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   progressBar: function() { return /* binding */ progressBar; },
/* harmony export */   updateProgressBar: function() { return /* binding */ updateProgressBar; }
/* harmony export */ });
const progressBar = document.querySelector('.player__progress')

const updateProgressBar = (e) => {
	const { duration, currentTime } = e.srcElement
	if (duration) {
		progressBar.max = duration;
		progressBar.value = currentTime
	}
}

/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePexelsImagesClick: function() { return /* binding */ changePexelsImagesClick; }
/* harmony export */ });
/* harmony import */ var _sliderStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);




let isAnimate = true

const changePexelsImagesClick = (direction) => {
	let pexelsNumb = (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_0__.getStorageNumPicturePexels)()
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_1__.getStorageImagesSrc)()
	if (imagesSrc === 'pexels' && isAnimate) {
		isAnimate = false
		direction === 'prev' ? pexelsNumb <= 0 ? (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_0__.setStorageNumPicturePexels)(_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__.MAX_PEXELS_IMAGES) : (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_0__.setStorageNumPicturePexels)(--pexelsNumb) : pexelsNumb >= _pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__.MAX_PEXELS_IMAGES ? (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_0__.setStorageNumPicturePexels)(0) : (0,_sliderStorage__WEBPACK_IMPORTED_MODULE_0__.setStorageNumPicturePexels)(++pexelsNumb)
		;(0,_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__.changePexelsImages)()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}

/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeGithubImagesClick: function() { return /* binding */ changeGithubImagesClick; },
/* harmony export */   randomNumGithub: function() { return /* binding */ randomNumGithub; }
/* harmony export */ });
/* harmony import */ var _imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _githubImageChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _randomNum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);




const MAX_GITHUB_IMAGES = 20;
let randomNumGithub = (0,_randomNum__WEBPACK_IMPORTED_MODULE_2__.generateRandomNum)(1, MAX_GITHUB_IMAGES)
let isAnimate = true

const changeGithubImagesClick = (direction) => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.getStorageImagesSrc)()
	if (imagesSrc === 'github' && isAnimate) {
		isAnimate = false
		randomNumGithub = (direction === 'prev') ?
			((randomNumGithub === 1) ? MAX_GITHUB_IMAGES : randomNumGithub - 1) :
			((randomNumGithub === MAX_GITHUB_IMAGES) ? 1 : randomNumGithub + 1);
		(0,_githubImageChanger__WEBPACK_IMPORTED_MODULE_1__.changeGithubImages)()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}

/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeGithubImages: function() { return /* binding */ changeGithubImages; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _greeting_translateGreeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _githubImageClickChanger___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);








const changeGithubImages = () => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_3__.getStorageImagesSrc)()
	if (imagesSrc === 'github') {
		_query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_4__.queryWrapper.classList.add('query_hide')
		const greetingText = (0,_greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_1__.setGreetingMessageText)().split(' ')[1].slice(0, -1);
		const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)();
		let value = currLang === 'en' ? greetingText : (0,_greeting_translateGreeting__WEBPACK_IMPORTED_MODULE_2__.translateGreeting)(greetingText)
		let randomNum = _githubImageClickChanger___WEBPACK_IMPORTED_MODULE_6__.randomNumGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNum}.webp`
		;(0,_imageLoader__WEBPACK_IMPORTED_MODULE_5__.loadImageFromUrl)(url)
	}
}

/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translateGreeting: function() { return /* binding */ translateGreeting; }
/* harmony export */ });
const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	день: 'afternoon',
	вечер: 'evening'
};

const translateGreeting = (greetingText) => greetingTranslations[greetingText];

/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateRandomNum: function() { return /* binding */ generateRandomNum; }
/* harmony export */ });
const generateRandomNum = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsMute: function() { return /* binding */ checkIsMute; }
/* harmony export */ });
/* harmony import */ var _localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);




const checkIsMute = () => {
	const volumeValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.getStorageVolumeValue)()
	const isMuteValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.getStorageIsMuteValue)()
	if (isMuteValue === 'true') {
		_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__.audio.volume = volumeValue;
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('muteSongBtn.svg#muteSong')
		;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.setStorageIsMuteValue)('false')
	}
	else if (isMuteValue === 'false') {
		_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_1__.audio.volume = 0;
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('unMuteSongBtn.svg#unMuteSong')
		;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.setStorageIsMuteValue)('true')
	}
}

/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageIsMuteValue: function() { return /* binding */ getStorageIsMuteValue; },
/* harmony export */   getStorageVolumeValue: function() { return /* binding */ getStorageVolumeValue; },
/* harmony export */   setStorageIsMuteValue: function() { return /* binding */ setStorageIsMuteValue; },
/* harmony export */   setStorageVolumeValue: function() { return /* binding */ setStorageVolumeValue; }
/* harmony export */ });
/* harmony import */ var _volume_setVolumeValueLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);


const setStorageVolumeValue = () => localStorage.setItem('volumeValue', _volume_setVolumeValueLoad__WEBPACK_IMPORTED_MODULE_0__.volumeInput.value)
const getStorageVolumeValue = () => localStorage.getItem('volumeValue') || _volume_setVolumeValueLoad__WEBPACK_IMPORTED_MODULE_0__.volumeInput.value

const setStorageIsMuteValue = (value) => localStorage.setItem('isMute', value)
const getStorageIsMuteValue = () => localStorage.getItem('isMute') || 'false'

/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setVolumeValueLoad: function() { return /* binding */ setVolumeValueLoad; },
/* harmony export */   volumeInput: function() { return /* binding */ volumeInput; }
/* harmony export */ });
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _setVolumeValueChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);





const volumeInput = document.querySelector('.player__volume-input')

const setVolumeValueLoad = () => {
	const volumeValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getStorageVolumeValue)()
	_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeValue
	volumeInput.value = volumeValue
	if (_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('unMuteSongBtn.svg#unMuteSong')
		_setVolumeValueChange__WEBPACK_IMPORTED_MODULE_3__.volumeMuteBtn.setAttribute('disabled', true)
	} else {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('muteSongBtn.svg#muteSong')
		_setVolumeValueChange__WEBPACK_IMPORTED_MODULE_3__.volumeMuteBtn.removeAttribute('disabled')
		;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageVolumeValue)()
	}
}

/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMuteBtnHref: function() { return /* binding */ setMuteBtnHref; }
/* harmony export */ });
const volumeMuteBtnIcon = document.querySelector(`.player__volume-mute svg use`)

const setMuteBtnHref = (iconName) => volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)

/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setVolumeValueChange: function() { return /* binding */ setVolumeValueChange; },
/* harmony export */   volumeMuteBtn: function() { return /* binding */ volumeMuteBtn; }
/* harmony export */ });
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _setVolumeValueLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);





const volumeMuteBtn = document.querySelector('.player__volume-mute')

const setVolumeValueChange = () => {
	_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = _setVolumeValueLoad__WEBPACK_IMPORTED_MODULE_3__.volumeInput.value
	;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageVolumeValue)()
	if (_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageIsMuteValue)('true')
	}
	else {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_2__.setMuteBtnHref)('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageIsMuteValue)('false')
	}
}

/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showSettings: function() { return /* binding */ showSettings; }
/* harmony export */ });
/* harmony import */ var _slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const settingsWrapper = document.querySelector('.settings__wrapper')

const showSettings = (value) => {
	settingsWrapper.classList[value]('settings__wrapper_show')
	_slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_0__.popupShadow.classList[value]('popup__shadow-settings_show')
}

/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeQuote: function() { return /* binding */ changeQuote; }
/* harmony export */ });
/* harmony import */ var _getQuotesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _showQuote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);



const changeQuote = async () => {
	try {
		const data = await (0,_getQuotesData__WEBPACK_IMPORTED_MODULE_0__.getQuotesData)()
		;(0,_showQuote__WEBPACK_IMPORTED_MODULE_1__.showQuote)(data)
	}
	catch {
		console.error('Error fetching quotes:', error);
	}
}

/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuotesData: function() { return /* binding */ getQuotesData; }
/* harmony export */ });
/* harmony import */ var _getQuotesLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);


const getQuotesData = async () => {
	const quotesLang = (0,_getQuotesLanguage__WEBPACK_IMPORTED_MODULE_0__.getQuotesLanguage)()
	const fetchRequest = await fetch(quotesLang)
	const data = await fetchRequest.json()
	return data
}

/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuotesLanguage: function() { return /* binding */ getQuotesLanguage; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const getQuotesLanguage = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	return currLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}

/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showQuote: function() { return /* binding */ showQuote; }
/* harmony export */ });
/* harmony import */ var _slider_randomNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);


const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

const showQuote = (data) => {
	const randomNum = (0,_slider_randomNum__WEBPACK_IMPORTED_MODULE_0__.generateRandomNum)(0, data.length - 1)
	quote.textContent = data[randomNum].quote
	author.textContent = data[randomNum].author
}

/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greetingPopup: function() { return /* binding */ greetingPopup; },
/* harmony export */   showGreetingPopup: function() { return /* binding */ showGreetingPopup; }
/* harmony export */ });
/* harmony import */ var _slider_changeImages_imageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const greetingPopup = document.querySelector('.greeting__popup')

const showGreetingPopup = (value) => {
	greetingPopup.classList[value]('greeting__popup_show')
	_slider_sliderPopup_sliderPopupVisibility__WEBPACK_IMPORTED_MODULE_1__.popupShadow.classList[value]('popup__shadow-greeting_show')
	_slider_changeImages_imageLoader__WEBPACK_IMPORTED_MODULE_0__.body.classList[value]('body_fixed')
}

/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeEvents: function() { return /* binding */ changeEvents; }
/* harmony export */ });
/* harmony import */ var _changeAppText_changeAppText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _date_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _imagesSrc_changeImagesSrc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var _quotes_changeQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var _language_changeLanguageIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var _weather_weatherAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony import */ var _language_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _imagesSrc_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);












const changeEvents = {
	'.query__input': _query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_7__.changePexelsImgOnQueryInputChange,
	'.source__select': (e) => {
		(0,_imagesSrc_changeImagesSrc__WEBPACK_IMPORTED_MODULE_3__.changeImagesSrc)(e),
			(0,_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_8__.closeSettingsIcon)(_imagesSrc_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_10__.imagesSrcSelect)
	},
	'.language__select': () => {
		(0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__.setStorageLanguage)()
		;(0,_weather_weatherAPI__WEBPACK_IMPORTED_MODULE_6__.fetchAndDisplayWeather)()
		;(0,_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
		;(0,_changeAppText_changeAppText__WEBPACK_IMPORTED_MODULE_0__.changeAppText)()
		;(0,_quotes_changeQuote__WEBPACK_IMPORTED_MODULE_4__.changeQuote)()
		;(0,_language_changeLanguageIcon__WEBPACK_IMPORTED_MODULE_5__.changeLanguageIcon)()
		;(0,_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_8__.closeSettingsIcon)(_language_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_9__.languageSelect)
	},
	'.weather__input': _weather_weatherAPI__WEBPACK_IMPORTED_MODULE_6__.fetchAndDisplayWeather
}

/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeImagesSrc: function() { return /* binding */ changeImagesSrc; }
/* harmony export */ });
/* harmony import */ var _localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _slider_changeImages_Github_githubImageChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _slider_changeImages_Pexels_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);




const changeImagesSrc = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		(0,_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.setStorageImagesSrc)('github')
		;(0,_slider_changeImages_Github_githubImageChanger__WEBPACK_IMPORTED_MODULE_1__.changeGithubImages)()
	} else {
		(0,_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.setStorageImagesSrc)('pexels')
		;(0,_slider_changeImages_Pexels_pexelsImageChanger__WEBPACK_IMPORTED_MODULE_2__.changePexelsImages)()
	}
}

/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLanguageIcon: function() { return /* binding */ changeLanguageIcon; }
/* harmony export */ });
/* harmony import */ var _localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);



const changeLanguageIcon = () => {
	const currLang = (0,_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	if (currLang === 'en') {
		_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.remove('language__inner_ru')
		_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.add('language__inner_en')
	}
	else if (currLang === 'ru') {
		_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.remove('language__inner_en')
		_settings_closeSettingsIcon__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.add('language__inner_ru')
	}
}

/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSettingsIcon: function() { return /* binding */ closeSettingsIcon; },
/* harmony export */   selectLanguageInner: function() { return /* binding */ selectLanguageInner; }
/* harmony export */ });
const selectLanguageInner = document.querySelector('.language__inner')

const closeSettingsIcon = (el) => el.blur()

/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imagesSrcSelect: function() { return /* binding */ imagesSrcSelect; },
/* harmony export */   setSelectedImagesSrc: function() { return /* binding */ setSelectedImagesSrc; }
/* harmony export */ });
const imagesSrcSelect = document.querySelector('.source__select')
const imagesSrcSelectArr = Array.from(imagesSrcSelect.children)

const setSelectedImagesSrc = (num, value) => imagesSrcSelectArr[num].selected = value

/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputEvents: function() { return /* binding */ inputEvents; }
/* harmony export */ });
/* harmony import */ var _greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _player_volume_setVolumeValueChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _greeting_checkGreetingNameLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);



const inputEvents = {
	'.player__volume-input': _player_volume_setVolumeValueChange__WEBPACK_IMPORTED_MODULE_1__.setVolumeValueChange,
	'.greeting__name': () => {
		(0,_greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.setStorageGreetingName)()
		;(0,_greeting_checkGreetingNameLength__WEBPACK_IMPORTED_MODULE_2__.checkGreetingNameLength)()
	}
}

/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkGreetingNameLength: function() { return /* binding */ checkGreetingNameLength; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);



const maxLength = 19;

const checkGreetingNameLength = () => {
	if (_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent.length >= maxLength) {
		_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.blur()
		_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent = _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent.slice(0, maxLength - 1)
		;(0,_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.setStorageGreetingName)()
		;(0,_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_1__.showGreetingPopup)('add')
	}
}

/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSelectedImagesSrc: function() { return /* binding */ checkSelectedImagesSrc; }
/* harmony export */ });
/* harmony import */ var _localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);



const checkSelectedImagesSrc = () => {
	const getSrc = (0,_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.getStorageImagesSrc)()
	if (getSrc === 'github') {
		(0,_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__.setSelectedImagesSrc)(1, false)
		;(0,_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__.setSelectedImagesSrc)(0, true)
	} else if (getSrc === 'pexels') {
		(0,_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__.setSelectedImagesSrc)(0, false)
		;(0,_setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__.setSelectedImagesSrc)(1, true)
	}
}

/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSelectedLanguageValue: function() { return /* binding */ changeSelectedLanguageValue; }
/* harmony export */ });
/* harmony import */ var _localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const changeSelectedLanguageValue = () => {
	const currLang = (0,_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	if (currLang === 'en') {
		(0,_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.setSelectedLanguageValue)('ru', false)
		;(0,_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.setSelectedLanguageValue)('en', true)
	} else if (currLang === 'ru') {
		(0,_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.setSelectedLanguageValue)('en', false)
		;(0,_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__.setSelectedLanguageValue)('ru', true)
	}
}

/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayList: function() { return /* binding */ createPlayList; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);


const playList = document.querySelector('.player__list')

const createPlayList = () => {
	_playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('song_number', i)
		playList.append(li)
	})
}

/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setQueryVariableValueLoad: function() { return /* binding */ setQueryVariableValueLoad; }
/* harmony export */ });
/* harmony import */ var _greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _greeting_translateGreeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _localStorageQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _setQueryVariableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);






const greetingText = (0,_greeting_setText_greetingMessage_setGreetingMessageText__WEBPACK_IMPORTED_MODULE_0__.setGreetingMessageText)().split(' ')[1].slice(0, -1);

const setQueryVariableValueLoad = () => {
	const queryValue = (0,_localStorageQuery__WEBPACK_IMPORTED_MODULE_3__.getStorageQueryInputValue)()
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__.getStorageLanguage)()
	if (queryValue) {
		(0,_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_4__.setQueryVariableValue)(queryValue)
	} else {
		(0,_setQueryVariableValue__WEBPACK_IMPORTED_MODULE_4__.setQueryVariableValue)(currLang === 'ru' ? (0,_greeting_translateGreeting__WEBPACK_IMPORTED_MODULE_2__.translateGreeting)(greetingText) : greetingText)
	}
}

/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlSliderPopupBtnHover: function() { return /* binding */ controlSliderPopupBtnHover; }
/* harmony export */ });
const sliderPopupBtn = document.querySelector('.slider__popup-close-button')

const controlSliderPopupBtnHover = (value) => sliderPopupBtn.classList[value]('slider__popup-close-button_hover')

/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSettingsCheckedInputs: function() { return /* binding */ loadSettingsCheckedInputs; }
/* harmony export */ });
/* harmony import */ var _checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _settingsStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);



const loadSettingsCheckedInputs = () => {
	const settingsCheckedInputs = (0,_settingsStorage__WEBPACK_IMPORTED_MODULE_1__.getStorageSettingsCheckedInputs)()
	if (settingsCheckedInputs) {
		settingsCheckedInputs.map((e) => _checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__.settingsShowInputs[e].checked = true)
	}
}

/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideCheckedBlocksLoad: function() { return /* binding */ hideCheckedBlocksLoad; }
/* harmony export */ });
/* harmony import */ var _checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);


const hideCheckedBlocksLoad = () => {
	Array.from(_checkedSettingsInputsFinder__WEBPACK_IMPORTED_MODULE_0__.settingsShowInputs).filter(e => e.checked).map(e => document.querySelector(`.${e.getAttribute('name')}`).classList.add('settings__blocks-hide_hide'))
}

/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callKeydownEvent: function() { return /* binding */ callKeydownEvent; }
/* harmony export */ });
/* harmony import */ var _keydownEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);


const callKeydownEvent = (e) => {
	const key = e.key
	if (key in _keydownEvents__WEBPACK_IMPORTED_MODULE_0__.keydownEvents) {
		_keydownEvents__WEBPACK_IMPORTED_MODULE_0__.keydownEvents[key]()
	}
}

/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keydownEvents: function() { return /* binding */ keydownEvents; }
/* harmony export */ });
/* harmony import */ var _greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _weather_weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _settings_settingsVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _settings_settingsStyler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _greeting_setText_greetingName_setGreetingNameTrim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var _greeting_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);








const keydownEvents = {
	'Enter': () => {
		_greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.blur()
		_weather_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.weatherInput.blur()
		_query_changePexelsImgOnQueryInputChange__WEBPACK_IMPORTED_MODULE_2__.queryInput.blur()
		;(0,_greeting_setText_greetingName_setGreetingNameTrim__WEBPACK_IMPORTED_MODULE_5__.setGreetingNameTrim)()
	},
	'Escape': () => {
		(0,_settings_settingsVisibility__WEBPACK_IMPORTED_MODULE_3__.showSettings)('remove')
		;(0,_settings_settingsStyler__WEBPACK_IMPORTED_MODULE_4__.updateSettingsActiveStyles)('remove')
		;(0,_greeting_greetingPopup_showGreetingPopup__WEBPACK_IMPORTED_MODULE_6__.showGreetingPopup)('remove')
	}
}

/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setGreetingNameTrim: function() { return /* binding */ setGreetingNameTrim; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const setGreetingNameTrim = () => _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent = (_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.textContent).trim()

/***/ }),
/* 103 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkClickOutGreetingName: function() { return /* binding */ checkClickOutGreetingName; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _setText_greetingName_setGreetingNameTrim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);



const checkClickOutGreetingName = (e) => {
	if (!e.target.classList.contains('greeting__name')) {
		_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.blur()
		;(0,_setText_greetingName_setGreetingNameTrim__WEBPACK_IMPORTED_MODULE_1__.setGreetingNameTrim)()
	}
}

/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlGreetingPopupBtnHover: function() { return /* binding */ controlGreetingPopupBtnHover; }
/* harmony export */ });
const popupGreetingBtn = document.querySelector('.greeting__popup-close-button')

const controlGreetingPopupBtnHover = (value) => {
	popupGreetingBtn.classList[value]('greeting__popup-close-button_hover')
}


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsMuteValueLoad: function() { return /* binding */ checkIsMuteValueLoad; }
/* harmony export */ });
/* harmony import */ var _localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _setMuteBtnHref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _playbackControl_playSong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);





const checkIsMuteValueLoad = () => {
	const volumeValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.getStorageVolumeValue)()
	const isMuteValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_0__.getStorageIsMuteValue)()
	if (isMuteValue === 'true') {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_1__.setMuteBtnHref)('unMuteSongBtn.svg#unMuteSong')
		_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_2__.audio.volume = 0
	}
	else if (isMuteValue === 'false') {
		(0,_setMuteBtnHref__WEBPACK_IMPORTED_MODULE_1__.setMuteBtnHref)('muteSongBtn.svg#muteSong')
		_playbackControl_playSong__WEBPACK_IMPORTED_MODULE_2__.audio.volume = volumeValue
	}
}

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_greeting_setText_greetingName_setGreetingNameLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_weather_weatherStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_weather_weatherInputValueSetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _components_weather_weatherAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_query_localStorageQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _components_query_setQueryValue_setQueryInputValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _components_changeAppText_changeAppText_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _components_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var _components_date_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _components_eventHandlers_callEvents_callEvents_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);
/* harmony import */ var _components_eventHandlers_clickEvents_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49);
/* harmony import */ var _components_eventHandlers_changeEvents_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86);
/* harmony import */ var _components_eventHandlers_inputEvents_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91);
/* harmony import */ var _components_imagesSrc_checkSelectedImagesSrc_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93);
/* harmony import */ var _components_language_changeSelectedLanguageValue_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94);
/* harmony import */ var _components_language_changeLanguageIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88);
/* harmony import */ var _components_player_createPlayList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95);
/* harmony import */ var _components_player_loadSong_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62);
/* harmony import */ var _components_player_songTime_updateSongTime_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64);
/* harmony import */ var _components_player_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57);
/* harmony import */ var _components_player_switchSong_nextSong_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(66);
/* harmony import */ var _components_player_progressBar_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69);
/* harmony import */ var _components_player_volume_setVolumeValueLoad_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(77);
/* harmony import */ var _components_quotes_changeQuote_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(81);
/* harmony import */ var _components_slider_changeImages_Github_githubImageChanger_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(72);
/* harmony import */ var _components_slider_changeImages_Pexels_pexelsImageChanger_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(17);
/* harmony import */ var _components_query_setQueryValue_setQueryVariableValueLoad_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(96);
/* harmony import */ var _components_slider_sliderPopup_sliderPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(97);
/* harmony import */ var _components_slider_sliderPopup_sliderPopupVisibility_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14);
/* harmony import */ var _components_settings_settingsCheckedInputs_loadSettingsCheckedInputs_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(98);
/* harmony import */ var _components_settings_hideCheckedBlocks_checkedBlocksLoader_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(99);
/* harmony import */ var _components_eventHandlers_callEvents_callKeydownEvent_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(100);
/* harmony import */ var _components_greeting_checkClickOutGreeting_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(103);
/* harmony import */ var _components_greeting_greetingPopup_showGreetingPopup_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(85);
/* harmony import */ var _components_greeting_greetingPopup_controlGreetingPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(104);
/* harmony import */ var _components_player_volume_checkIsMuteValueLoad_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(105);





































setInterval(() => {
	(0,_components_date_time__WEBPACK_IMPORTED_MODULE_7__.showTime)()
	;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_8__.showDate)()
}, 1000)

;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_8__.showDate)()
;(0,_components_date_time__WEBPACK_IMPORTED_MODULE_7__.showTime)()
;(0,_components_changeAppText_changeAppText_js__WEBPACK_IMPORTED_MODULE_6__.changeAppText)()
;(0,_components_quotes_changeQuote_js__WEBPACK_IMPORTED_MODULE_23__.changeQuote)()
;(0,_components_player_createPlayList__WEBPACK_IMPORTED_MODULE_16__.createPlayList)()
;(0,_components_player_loadSong_js__WEBPACK_IMPORTED_MODULE_17__.loadSong)()
;(0,_components_language_changeSelectedLanguageValue_js__WEBPACK_IMPORTED_MODULE_14__.changeSelectedLanguageValue)()
;(0,_components_language_changeLanguageIcon_js__WEBPACK_IMPORTED_MODULE_15__.changeLanguageIcon)()
;(0,_components_imagesSrc_checkSelectedImagesSrc_js__WEBPACK_IMPORTED_MODULE_13__.checkSelectedImagesSrc)()
;(0,_components_weather_weatherInputValueSetter_js__WEBPACK_IMPORTED_MODULE_2__.setWeatherInputFromStorage)()
;(0,_components_weather_weatherAPI_js__WEBPACK_IMPORTED_MODULE_3__.fetchAndDisplayWeather)()
;(0,_components_greeting_setText_greetingName_setGreetingNameLoad_js__WEBPACK_IMPORTED_MODULE_0__.setGreetingNameLoad)()
;(0,_components_query_setQueryValue_setQueryVariableValueLoad_js__WEBPACK_IMPORTED_MODULE_26__.setQueryVariableValueLoad)()
;(0,_components_slider_changeImages_Github_githubImageChanger_js__WEBPACK_IMPORTED_MODULE_24__.changeGithubImages)()
;(0,_components_slider_changeImages_Pexels_pexelsImageChanger_js__WEBPACK_IMPORTED_MODULE_25__.changePexelsImages)()
;(0,_components_player_volume_setVolumeValueLoad_js__WEBPACK_IMPORTED_MODULE_22__.setVolumeValueLoad)()
;(0,_components_query_setQueryValue_setQueryInputValue_js__WEBPACK_IMPORTED_MODULE_5__.setQueryInputValue)()
;(0,_components_settings_settingsCheckedInputs_loadSettingsCheckedInputs_js__WEBPACK_IMPORTED_MODULE_29__.loadSettingsCheckedInputs)()
;(0,_components_settings_hideCheckedBlocks_checkedBlocksLoader_js__WEBPACK_IMPORTED_MODULE_30__.hideCheckedBlocksLoad)()
;(0,_components_player_volume_checkIsMuteValueLoad_js__WEBPACK_IMPORTED_MODULE_35__.checkIsMuteValueLoad)()

window.addEventListener('beforeunload', () => {
	;(0,_components_weather_weatherStorage_js__WEBPACK_IMPORTED_MODULE_1__.setStorageCity)()
	;(0,_components_query_localStorageQuery_js__WEBPACK_IMPORTED_MODULE_4__.setStorageQueryInputValue)()
})

_components_player_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_19__.audio.addEventListener('timeupdate', function (e) {
	;(0,_components_player_songTime_updateSongTime_js__WEBPACK_IMPORTED_MODULE_18__.updateSongTime)()
	;(0,_components_player_progressBar_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_21__.updateProgressBar)(e)
})

window.addEventListener('click', function (e) {
	;(0,_components_eventHandlers_callEvents_callEvents_js__WEBPACK_IMPORTED_MODULE_9__.callEvents)(e, _components_eventHandlers_clickEvents_js__WEBPACK_IMPORTED_MODULE_10__.clickEvents)
	;(0,_components_greeting_checkClickOutGreeting_js__WEBPACK_IMPORTED_MODULE_32__.checkClickOutGreetingName)(e)
})

_components_player_playbackControl_playSong_js__WEBPACK_IMPORTED_MODULE_19__.audio.addEventListener('ended', _components_player_switchSong_nextSong_js__WEBPACK_IMPORTED_MODULE_20__.nextSong)
window.addEventListener('input', (e) => (0,_components_eventHandlers_callEvents_callEvents_js__WEBPACK_IMPORTED_MODULE_9__.callEvents)(e, _components_eventHandlers_inputEvents_js__WEBPACK_IMPORTED_MODULE_12__.inputEvents))
window.addEventListener('change', (e) => (0,_components_eventHandlers_callEvents_callEvents_js__WEBPACK_IMPORTED_MODULE_9__.callEvents)(e, _components_eventHandlers_changeEvents_js__WEBPACK_IMPORTED_MODULE_11__.changeEvents))
window.addEventListener('keydown', (e) => (0,_components_eventHandlers_callEvents_callKeydownEvent_js__WEBPACK_IMPORTED_MODULE_31__.callKeydownEvent)(e))
_components_slider_sliderPopup_sliderPopupVisibility_js__WEBPACK_IMPORTED_MODULE_28__.sliderPopup.addEventListener('mouseleave', () => (0,_components_slider_sliderPopup_sliderPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_27__.controlSliderPopupBtnHover)('add'))
_components_slider_sliderPopup_sliderPopupVisibility_js__WEBPACK_IMPORTED_MODULE_28__.sliderPopup.addEventListener('mouseenter', () => (0,_components_slider_sliderPopup_sliderPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_27__.controlSliderPopupBtnHover)('remove'))
_components_greeting_greetingPopup_showGreetingPopup_js__WEBPACK_IMPORTED_MODULE_33__.greetingPopup.addEventListener('mouseleave', () => (0,_components_greeting_greetingPopup_controlGreetingPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_34__.controlGreetingPopupBtnHover)('add'))
_components_greeting_greetingPopup_showGreetingPopup_js__WEBPACK_IMPORTED_MODULE_33__.greetingPopup.addEventListener('mouseenter', () => (0,_components_greeting_greetingPopup_controlGreetingPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_34__.controlGreetingPopupBtnHover)('remove'))
}();
/******/ })()
;