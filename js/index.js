/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageLanguage: function() { return /* binding */ getStorageLanguage; },
/* harmony export */   setStorageLanguage: function() { return /* binding */ setStorageLanguage; },
/* harmony export */   setStorageLanguageDefault: function() { return /* binding */ setStorageLanguageDefault; }
/* harmony export */ });
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const setStorageLanguageDefault = () => {
	const currLang = getStorageLanguage()
	if (!currLang) {
		localStorage.setItem('language', 'en')
	}
}

const getStorageLanguage = () => localStorage.getItem('language')

const setStorageLanguage = () => {
	localStorage.setItem('language', _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__.languageSelect.value)
}

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDate: function() { return /* binding */ showDate; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeAppText: function() { return /* binding */ changeAppText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _greeting_setPlaceholderText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _greeting_showGreeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _imagesSrc_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _language_setLanguageText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _query_setQueryLabelText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _settings_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _slider_setErrorPopupText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);









const changeAppText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	if (currLang === 'en') {
		(0,_greeting_setPlaceholderText__WEBPACK_IMPORTED_MODULE_1__.setPlaceholderText)('en')
		;(0,_imagesSrc_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__.setImagesSrcText)('en')
		;(0,_language_setLanguageText__WEBPACK_IMPORTED_MODULE_4__.setLanguageText)('en', 'en', 'en', 'ru', 'en')
		;(0,_query_setQueryLabelText__WEBPACK_IMPORTED_MODULE_5__.setQueryLabelText)('en')
		;(0,_settings_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_6__.setSettingsTitleText)('en')
		;(0,_slider_setErrorPopupText__WEBPACK_IMPORTED_MODULE_7__.setErrorPopupText)('en')
	}
	else if (currLang === 'ru') {
		(0,_greeting_setPlaceholderText__WEBPACK_IMPORTED_MODULE_1__.setPlaceholderText)('ru')
		;(0,_imagesSrc_setImagesSrcText__WEBPACK_IMPORTED_MODULE_3__.setImagesSrcText)('ru')
		;(0,_language_setLanguageText__WEBPACK_IMPORTED_MODULE_4__.setLanguageText)('ru', 'en', 'ru', 'ru', 'ru')
		;(0,_query_setQueryLabelText__WEBPACK_IMPORTED_MODULE_5__.setQueryLabelText)('ru')
		;(0,_settings_setSettingsTitleText__WEBPACK_IMPORTED_MODULE_6__.setSettingsTitleText)('ru')
		;(0,_slider_setErrorPopupText__WEBPACK_IMPORTED_MODULE_7__.setErrorPopupText)('ru')
	}
	(0,_greeting_showGreeting__WEBPACK_IMPORTED_MODULE_2__.showGreetingText)()
}

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPlaceholderText: function() { return /* binding */ setPlaceholderText; }
/* harmony export */ });
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


const greetingObj = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

const setPlaceholderText = (lang) => {
	_localStorageGreeting__WEBPACK_IMPORTED_MODULE_0__.greetingName.placeholder = greetingObj[lang]
}

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageGreetingName: function() { return /* binding */ getStorageGreetingName; },
/* harmony export */   greetingName: function() { return /* binding */ greetingName; },
/* harmony export */   setStorageGreetingName: function() { return /* binding */ setStorageGreetingName; }
/* harmony export */ });
const greetingName = document.querySelector('.greeting__name')

const setStorageGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getStorageGreetingName = () => {
	greetingName.value = localStorage.getItem('name') || ''
}

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showGreetingText: function() { return /* binding */ showGreetingText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const greetingText = document.querySelector('.greeting__text')
const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, ']
}

const showGreetingText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	const currTime = new Date().getHours();
	const greeting = greetingObj[currLang][Math.floor(currTime / 6)]
	greetingText.textContent = greeting
	return greeting
}

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setImagesSrcText: function() { return /* binding */ setImagesSrcText; }
/* harmony export */ });
const srcDescription = document.querySelector('.source__description')
const srcDescriptionObj = {
	en: 'Source of images:',
	ru: 'Источник изображений:'
}

const setImagesSrcText = (lang) => {
	srcDescription.textContent = srcDescriptionObj[lang]
}

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLanguageText: function() { return /* binding */ setLanguageText; }
/* harmony export */ });
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const languageDescription = document.querySelector('.language__description')

const languageObj = {
	en: {
		en: 'English',
		ru: 'Russian'
	},
	ru: {
		en: 'Английский',
		ru: 'Русский'
	}
}

const languageDescriptionObj = {
	en: 'Change language:',
	ru: 'Изменить язык:'
}

const setLanguageText = (valOne, valTwo, valThree, valFour, lang) => {
	_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__.selectLanguageChildrenArr[0].textContent = languageObj[valOne][valTwo]
	_setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_0__.selectLanguageChildrenArr[1].textContent = languageObj[valThree][valFour]
	languageDescription.textContent = languageDescriptionObj[lang]
}

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setQueryLabelText: function() { return /* binding */ setQueryLabelText; }
/* harmony export */ });
const queryLabel = document.querySelector('.query__label')
const queryObj = {
	en: 'Search for images by tag:',
	ru: 'Поиск изображений по тэгу:'
}

const setQueryLabelText = (lang) => {
	queryLabel.textContent = queryObj[lang]
}

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSettingsTitleText: function() { return /* binding */ setSettingsTitleText; }
/* harmony export */ });
/* harmony import */ var _toggleSettingsActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const settingsTitleObj = {
	en: 'SETTINGS',
	ru: 'НАСТРОЙКИ'
}

const setSettingsTitleText = (value) => {
	_toggleSettingsActive__WEBPACK_IMPORTED_MODULE_0__.settingTitle.textContent = settingsTitleObj[value]
}

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingTitle: function() { return /* binding */ settingTitle; },
/* harmony export */   settingsButton: function() { return /* binding */ settingsButton; },
/* harmony export */   toggleSettingsActive: function() { return /* binding */ toggleSettingsActive; }
/* harmony export */ });
const settingsButton = document.querySelector('.settings__button')
const settingTitle = document.querySelector('.settings__title')

const toggleSettingsActive = () => {
	settingTitle.classList.toggle('settings__title_active')
	settingsButton.classList.toggle('settings__button_active')
}

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setErrorPopupText: function() { return /* binding */ setErrorPopupText; }
/* harmony export */ });
const popupMessage = document.querySelector('.popup__message')
const popupErrorObj = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено. Попробуйте еще раз.']
}

const setErrorPopupText = (value) => {
	popupMessage.textContent = popupErrorObj[value]
}

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageCity: function() { return /* binding */ getStorageCity; },
/* harmony export */   setStorageCity: function() { return /* binding */ setStorageCity; }
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);



const setStorageCity = () => {
	if (_getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value) {
		localStorage.setItem('city', String(_getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value).trim())
	}
}

const getStorageCity = () => {
	const getCity = localStorage.getItem('city')
	_getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value = getCity ? getCity : 'Гомель'
	;(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)()
}

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: function() { return /* binding */ getWeather; },
/* harmony export */   weatherCityInput: function() { return /* binding */ weatherCityInput; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _setWeatherText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _setWeatherStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);





const weatherCityInput = document.querySelector('.weather__input')

async function getWeather() {
	try {
		const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
		const weatherCityValue = String(weatherCityInput.value).trim()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityValue}&lang=${currLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		weatherCityInput.value = weatherCityValue
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		;(0,_setWeatherText__WEBPACK_IMPORTED_MODULE_1__.setWeatherText)(data, currLang)
		;(0,_setWeatherStyles__WEBPACK_IMPORTED_MODULE_2__.setWeatherStyles)(data)
	}
	catch (error) {
		(0,_setWeatherText__WEBPACK_IMPORTED_MODULE_1__.setWeatherErrorText)()
	}
}

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setWeatherErrorText: function() { return /* binding */ setWeatherErrorText; },
/* harmony export */   setWeatherText: function() { return /* binding */ setWeatherText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _setWeatherStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



const weatherTemperature = document.querySelector('.weather__temperature')
const weatherTemperatureDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')
const weatherTranslations = {
	en: {
		wind: 'Wind speed:',
		units: 'm/s',
		humidity: 'Humidity:',
		error: "ERROR: City wasn't found!"
	},
	ru: {
		wind: 'Скорость ветра:',
		units: 'м/c',
		humidity: 'Влажность:',
		error: "Ошибка: Город не найден!"
	}
}

const setWeatherText = (data, currLang) => {
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherTranslations[currLang].wind} ${Math.round(data.wind.speed)} ${weatherTranslations[currLang].units}`;
	weatherHumidity.textContent = `${weatherTranslations[currLang].humidity} ${Math.round(data.main.humidity)}%`;
	_setWeatherStyles__WEBPACK_IMPORTED_MODULE_1__.weatherError.textContent = '';
}

const setWeatherErrorText = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	_setWeatherStyles__WEBPACK_IMPORTED_MODULE_1__.weatherError.style.display = 'block';
	_setWeatherStyles__WEBPACK_IMPORTED_MODULE_1__.weatherError.textContent = `${weatherTranslations[currLang].error}`;
}

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setWeatherStyles: function() { return /* binding */ setWeatherStyles; },
/* harmony export */   weatherError: function() { return /* binding */ weatherError; }
/* harmony export */ });
const weatherIcon = document.querySelector('.weather__icon')
const weatherError = document.querySelector('.weather_error')

const setWeatherStyles = (data) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherError.style.display = 'none';
}

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: function() { return /* binding */ body; },
/* harmony export */   changeBG: function() { return /* binding */ changeBG; },
/* harmony export */   changeBGOnClick: function() { return /* binding */ changeBGOnClick; },
/* harmony export */   changeQueryInput: function() { return /* binding */ changeQueryInput; },
/* harmony export */   queryInput: function() { return /* binding */ queryInput; },
/* harmony export */   setQueryValue: function() { return /* binding */ setQueryValue; }
/* harmony export */ });
/* harmony import */ var pexels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _greeting_showGreeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _getRandomNum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _translateGreeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _setErrorPopupClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _localStorageSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);









const client = (0,pexels__WEBPACK_IMPORTED_MODULE_0__.createClient)('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
const body = document.body
const queryWrapper = document.querySelector('.query')
const queryInput = document.querySelector('.query__input')
const greetingText = (0,_greeting_showGreeting__WEBPACK_IMPORTED_MODULE_1__.showGreetingText)().split(' ')[1].slice(0, -1);
let query;
const image = new Image();
const MAX_GITHUB_IMAGES = 20;
let MIN_PEXELS_IMAGES = 0;
let MAX_PEXELS_IMAGES;
let randomNumGithub = (0,_getRandomNum__WEBPACK_IMPORTED_MODULE_3__.getRandomNum)(1, MAX_GITHUB_IMAGES)
let isAnimate = true
const forbiddenSymbols = ['#', '%', '&', '+', ';']

const setQueryValue = () => {
	const queryValue = (0,_localStorageSlider__WEBPACK_IMPORTED_MODULE_6__.getQueryInputValueLoad)()
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_2__.getStorageLanguage)()
	if (queryValue) {
		query = queryValue
	} else {
		query = currLang === 'ru' ? (0,_translateGreeting__WEBPACK_IMPORTED_MODULE_4__.translateGreeting)(greetingText) : greetingText
	}
}

const changeQueryInput = () => {
	const queryInputValue = String(queryInput.value.trim())
	const checkIncludeForbiddenSymbols = Array.from(queryInputValue).some(e => forbiddenSymbols.includes(e))
	if (queryInputValue === '' || checkIncludeForbiddenSymbols) {
		(0,_setErrorPopupClass__WEBPACK_IMPORTED_MODULE_5__.setErrorPopupClass)('add')
		return
	}
	query = queryInputValue
	queryInput.value = queryInputValue
	MIN_PEXELS_IMAGES = 0;
	changePexelsImages()
}

const changeGithubImages = () => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_7__.getStorageImagesSrc)()
	if (imagesSrc === 'github') {
		queryWrapper.classList.add('query_hide')
		const greetingText = (0,_greeting_showGreeting__WEBPACK_IMPORTED_MODULE_1__.showGreetingText)().split(' ')[1].slice(0, -1);
		const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_2__.getStorageLanguage)();
		let value = currLang === 'en' ? greetingText : (0,_translateGreeting__WEBPACK_IMPORTED_MODULE_4__.translateGreeting)(greetingText)
		let randomNum = randomNumGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNum}.webp`
		loadImage(url)
	}
}

const changePexelsImages = () => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_7__.getStorageImagesSrc)()
	if (imagesSrc === 'pexels') {
		queryWrapper.classList.remove('query_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				loadImage(e.photos[MIN_PEXELS_IMAGES].src.landscape)
			} else {
				(0,_setErrorPopupClass__WEBPACK_IMPORTED_MODULE_5__.setErrorPopupClass)('remove')
			}
		});
	}
}

const loadImage = (url) => {
	image.src = url
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

const changeBG = () => {
	changeGithubImages()
	changePexelsImages()
}

const changeBGOnClick = (direction) => {
	const imagesSrc = (0,_imagesSrc_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_7__.getStorageImagesSrc)()
	if (imagesSrc === 'github') {
		if (isAnimate) {
			isAnimate = false
			randomNumGithub = (direction === 'prev') ?
				((randomNumGithub === 1) ? MAX_GITHUB_IMAGES : randomNumGithub - 1) :
				((randomNumGithub === MAX_GITHUB_IMAGES) ? 1 : randomNumGithub + 1);
			changeGithubImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
	else if (imagesSrc === 'pexels') {
		if (isAnimate) {
			isAnimate = false
			MIN_PEXELS_IMAGES = (direction === 'prev') ?
				((MIN_PEXELS_IMAGES === 0) ? MAX_PEXELS_IMAGES : MIN_PEXELS_IMAGES - 1) :
				((MIN_PEXELS_IMAGES === MAX_PEXELS_IMAGES) ? 0 : MIN_PEXELS_IMAGES + 1);
			changePexelsImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClient: function() { return /* binding */ c; }
/* harmony export */ });
var t={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function r(r,e){var n={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:r}},o=t[e];return function(t,r){return fetch(""+o+t+"?"+function(t){return Object.keys(t).map(function(r){return r+"="+t[r]}).join("&")}(r||{}),n).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})}}function e(t){var e=r(t,"collections");return{all:function(t){return void 0===t&&(t={}),e("",t)},media:function(t){var r=t.id,n=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r.indexOf(e=i[n])>=0||(o[e]=t[e]);return o}(t,["id"]);return e(""+r,n)},featured:function(t){return void 0===t&&(t={}),e("featured",t)}}}function n(t){return!(!t||!t.photos)}var o={__proto__:null,isPhotos:n,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function i(t){var e=r(t,"photo");return{search:function(t){return e("/search",t)},curated:function(t){return void 0===t&&(t={}),e("/curated",t)},show:function(t){return e("/photos/"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then(function(t){return n(t)?t.photos[0]:t})}catch(t){return Promise.reject(t)}}}}function u(t){var e=r(t,"video");return{search:function(t){return e("/search",t)},popular:function(t){return void 0===t&&(t={}),e("/popular",t)},show:function(t){return e("/videos/"+t.id)}}}function c(t){if(!t||"string"!=typeof t)throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");return{typeCheckers:o,photos:i(t),videos:u(t),collections:e(t)}}__webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(22);
module.exports = self.fetch.bind(self);


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNum: function() { return /* binding */ getRandomNum; }
/* harmony export */ });
const getRandomNum = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/***/ }),
/* 24 */
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

const translateGreeting = (greetingText) => {
	return greetingTranslations[greetingText];
};

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popup: function() { return /* binding */ popup; },
/* harmony export */   setErrorPopupClass: function() { return /* binding */ setErrorPopupClass; }
/* harmony export */ });
/* harmony import */ var _changeBG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const popup = document.querySelector('.popup')
const popupShadow = document.querySelector('.popup__shadow')

const setErrorPopupClass = (value) => {
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow_show')
	_changeBG__WEBPACK_IMPORTED_MODULE_0__.body.classList[value]('body_fixed')
}

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryInputValueLoad: function() { return /* binding */ getQueryInputValueLoad; },
/* harmony export */   setQueryInputValueBeforeUnload: function() { return /* binding */ setQueryInputValueBeforeUnload; }
/* harmony export */ });
/* harmony import */ var _changeBG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const getQueryInputValueLoad = () => {
	_changeBG__WEBPACK_IMPORTED_MODULE_0__.queryInput.value = localStorage.getItem('queryInputValue')
	return localStorage.getItem('queryInputValue')
}

const setQueryInputValueBeforeUnload = () => {
	const queryInputValue = String(_changeBG__WEBPACK_IMPORTED_MODULE_0__.queryInput.value).trim()
	localStorage.setItem('queryInputValue', queryInputValue)
}

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageImagesSrc: function() { return /* binding */ getStorageImagesSrc; },
/* harmony export */   setStorageImagesSrc: function() { return /* binding */ setStorageImagesSrc; },
/* harmony export */   setStorageImagesSrcDefault: function() { return /* binding */ setStorageImagesSrcDefault; }
/* harmony export */ });
const setStorageImagesSrcDefault = () => {
	const storageImagesSrc = getStorageImagesSrc()
	if (!storageImagesSrc) {
		setStorageImagesSrc('github')
	}
}

const getStorageImagesSrc = () => localStorage.getItem('source')

const setStorageImagesSrc = (value) => {
	localStorage.setItem('source', value)
}

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeQuote: function() { return /* binding */ changeQuote; }
/* harmony export */ });
/* harmony import */ var _getQuotesData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _showQuote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);



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
/* 29 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuotesData: function() { return /* binding */ getQuotesData; }
/* harmony export */ });
/* harmony import */ var _getQuotesLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


const getQuotesData = async () => {
	const quotesLang = (0,_getQuotesLanguage__WEBPACK_IMPORTED_MODULE_0__.getQuotesLanguage)()
	const fetchRequest = await fetch(quotesLang)
	const data = await fetchRequest.json()
	return data
}

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuotesLanguage: function() { return /* binding */ getQuotesLanguage; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const getQuotesLanguage = () => {
	const currLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	return currLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}

/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showQuote: function() { return /* binding */ showQuote; }
/* harmony export */ });
/* harmony import */ var _slider_getRandomNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

function showQuote(data) {
	const randomNum = (0,_slider_getRandomNum__WEBPACK_IMPORTED_MODULE_0__.getRandomNum)(0, data.length - 1)
	quote.textContent = data[randomNum].quote
	author.textContent = data[randomNum].author
}

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayList: function() { return /* binding */ createPlayList; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);


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
/* 33 */
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
/* 34 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSong: function() { return /* binding */ loadSong; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _updateSongTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);




const loadSong = () => {
	const currSong = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong__WEBPACK_IMPORTED_MODULE_1__.count]
	_switchSong__WEBPACK_IMPORTED_MODULE_1__.audio.src = currSong.src
	_switchSong__WEBPACK_IMPORTED_MODULE_1__.trackName.textContent = currSong.title
	;(0,_updateSongTime__WEBPACK_IMPORTED_MODULE_2__.updateSongTime)()
}

/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audio: function() { return /* binding */ audio; },
/* harmony export */   count: function() { return /* binding */ count; },
/* harmony export */   nextSong: function() { return /* binding */ nextSong; },
/* harmony export */   playClickedSong: function() { return /* binding */ playClickedSong; },
/* harmony export */   prevSong: function() { return /* binding */ prevSong; },
/* harmony export */   trackName: function() { return /* binding */ trackName; },
/* harmony export */   volumeBtn: function() { return /* binding */ volumeBtn; },
/* harmony export */   volumeMuteBtnIcon: function() { return /* binding */ volumeMuteBtnIcon; }
/* harmony export */ });
/* harmony import */ var _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _loadSong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _playSong_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);




const trackName = document.querySelector('.player__track-name')
const audio = document.querySelector('.player__audio')
const volumeBtn = document.querySelector('.player__sounds-volume')
const volumeMuteBtnIcon = document.querySelector(`.player__sounds-mute svg use`)

let count = 0;

const nextSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count++
	if (count > _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1) {
		count = 0;
	}
	(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)()
	;(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)()
}

const prevSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count--
	if (count < 0) {
		count = _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1
	}
	(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)()
	;(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)()
}

const playClickedSong = (e) => {
	const songNum = parseInt(e.target.getAttribute('song_number'));
	if (!isNaN(songNum)) {
		if (count !== songNum) {
			let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
			count = songNum;
			(0,_loadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)();
			(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)();
		} else {
			if (_playSong_js__WEBPACK_IMPORTED_MODULE_2__.isPlay) {
				(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.pauseSong)();
			} else {
				(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)();
			}
		}
	}
}

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFlagSong: function() { return /* binding */ checkFlagSong; },
/* harmony export */   isPlay: function() { return /* binding */ isPlay; },
/* harmony export */   pauseSong: function() { return /* binding */ pauseSong; },
/* harmony export */   playSong: function() { return /* binding */ playSong; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


let isPlay = false;
const playBtn = document.querySelector('.player__controls-play')
const playBtnIcon = document.querySelector('.player__controls-play-icon use')

const playSong = () => {
	let li = document.querySelectorAll('li')[_switchSong__WEBPACK_IMPORTED_MODULE_0__.count].classList.add('player__list-item_active')
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.trackName.classList.add('player__track-name_active')
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.play()
	playBtnIcon.setAttribute('href', './images/svg/pauseSongBtn.svg#pauseSong')
	playBtn.classList.add('player__controls-play_active')
	isPlay = true
}

const pauseSong = () => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.pause()
	playBtnIcon.setAttribute('href', './images/svg/playSongBtn.svg#playSong')
	playBtn.classList.remove('player__controls-play_active')
	isPlay = false
}

const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}

/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateSongTime: function() { return /* binding */ updateSongTime; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _getSongTimeCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);




let songCurrTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')

const updateSongTime = () => {
	songCurrTime.textContent = (0,_getSongTimeCode__WEBPACK_IMPORTED_MODULE_1__.getSongTimeCode)(_switchSong__WEBPACK_IMPORTED_MODULE_2__.audio.currentTime)
	songDurationTime.textContent = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong__WEBPACK_IMPORTED_MODULE_2__.count].duration
}

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSongTimeCode: function() { return /* binding */ getSongTimeCode; }
/* harmony export */ });
let seconds;
let minutes;

function getSongTimeCode(num) {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rewindSong: function() { return /* binding */ rewindSong; },
/* harmony export */   updateProgressBar: function() { return /* binding */ updateProgressBar; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


const progressBar = document.querySelector('.player__progress')

const updateProgressBar = (e) => {
	const { duration, currentTime } = e.srcElement
	if (duration) {
		progressBar.max = duration;
		progressBar.value = currentTime
	}
}

const rewindSong = (e) => {
	let x = e.pageX - progressBar.getBoundingClientRect().left
	let clickedValue = (x * progressBar.max) / progressBar.clientWidth;
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.currentTime = (_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.duration * clickedValue) / progressBar.max;
}

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeIcon: function() { return /* binding */ closeIcon; },
/* harmony export */   rotateIcon: function() { return /* binding */ rotateIcon; },
/* harmony export */   selectImagesSrcWrapper: function() { return /* binding */ selectImagesSrcWrapper; },
/* harmony export */   selectLanguageInner: function() { return /* binding */ selectLanguageInner; }
/* harmony export */ });
const selectLanguageInner = document.querySelector('.language__inner')
const selectImagesSrcWrapper = document.querySelector('.source')

const rotateIcon = (tag, classToggle) => {
	tag.classList.toggle(classToggle)
}

const closeIcon = (e, containsClassList, tag, removeClassList) => {
	!e.target.classList.contains(containsClassList) ? tag.classList.remove(removeClassList) : ''
}

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkChangeVolume: function() { return /* binding */ checkChangeVolume; },
/* harmony export */   checkIsMute: function() { return /* binding */ checkIsMute; },
/* harmony export */   setVolumeBtnValue: function() { return /* binding */ setVolumeBtnValue; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);



const volumeMuteBtn = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteBtnHref = (iconName) => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)
}

const checkChangeVolume = () => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = _switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeBtn.value
	;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageVolumeValue)()
	if (_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		isMute = false;
	}
}

const setVolumeBtnIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeValue
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeBtn.value = volumeButtonValue
	;(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getStorageVolumeValue)(iconName)
	isMute = isMuteValue
}

const checkIsMute = () => {
	const volumeValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getStorageVolumeValue)()
	isMute ? setVolumeBtnIcon(volumeValue, volumeValue, setMuteBtnHref('muteSongBtn.svg#muteSong'), false) : setVolumeBtnIcon(0, 0, setMuteBtnHref('unMuteSongBtn.svg#unMuteSong'), true)
}

const setVolumeBtnValue = () => {
	const volumeValue = (0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getStorageVolumeValue)()
	if (!volumeValue) {
		(0,_localStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setStorageVolumeValue)()
	}
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeValue
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeBtn.value = volumeValue
	if (_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		isMute = true;
	} else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		isMute = false;
	}
}

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorageVolumeValue: function() { return /* binding */ getStorageVolumeValue; },
/* harmony export */   setStorageVolumeValue: function() { return /* binding */ setStorageVolumeValue; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


const setStorageVolumeValue = () => {
	localStorage.setItem('volumeValue', _switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeBtn.value)
}

const getStorageVolumeValue = () => localStorage.getItem('volumeValue')

/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSelectedLanguageValue: function() { return /* binding */ changeSelectedLanguageValue; }
/* harmony export */ });
/* harmony import */ var _localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _setSelectedLanguageValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



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
/* 44 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLanguageIcon: function() { return /* binding */ changeLanguageIcon; }
/* harmony export */ });
/* harmony import */ var _localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);



const changeLanguageIcon = () => {
	const currLang = (0,_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getStorageLanguage)()
	if (currLang === 'en') {
		_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.remove('language__inner_ru')
		_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.add('language__inner_en')
	}
	else if (currLang === 'ru') {
		_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.remove('language__inner_en')
		_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_1__.selectLanguageInner.classList.add('language__inner_ru')
	}
}

/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSelectedImagesSrc: function() { return /* binding */ checkSelectedImagesSrc; }
/* harmony export */ });
/* harmony import */ var _localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _setSelectedImagesSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



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
/* 46 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSelectedImagesSrc: function() { return /* binding */ setSelectedImagesSrc; }
/* harmony export */ });
const imagesSrcSelect = document.querySelector('.source__select')
const imagesSrcSelectArr = Array.from(imagesSrcSelect.children)

const setSelectedImagesSrc = (num, value) => {
	imagesSrcSelectArr[num].selected = value
}


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callEvents: function() { return /* binding */ callEvents; },
/* harmony export */   changeEvents: function() { return /* binding */ changeEvents; },
/* harmony export */   clickEvents: function() { return /* binding */ clickEvents; },
/* harmony export */   inputEvents: function() { return /* binding */ inputEvents; }
/* harmony export */ });
/* harmony import */ var _date_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _weather_getWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _slider_changeBG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _player_playSong__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _player_switchSong__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _player_updateProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var _player_volume__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var _imagesSrc_changeImagesSrc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48);
/* harmony import */ var _changeAppText_changeAppText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5);
/* harmony import */ var _quotes_changeQoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28);
/* harmony import */ var _slider_setErrorPopupClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var _language_changeLanguageIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44);
/* harmony import */ var _settings_openSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49);
/* harmony import */ var _settings_toggleSettingsActive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13);
/* harmony import */ var _settings_closeSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50);
/* harmony import */ var _settings_removeSettingsActive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51);




















const clickEvents = {
	'.main__button_prev': () => (0,_slider_changeBG__WEBPACK_IMPORTED_MODULE_4__.changeBGOnClick)('prev'),
	'.main__button_next': () => (0,_slider_changeBG__WEBPACK_IMPORTED_MODULE_4__.changeBGOnClick)('next'),
	'.language__inner': () => (0,_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_8__.rotateIcon)(_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_8__.selectLanguageInner, 'language__select_open'),
	'.source': () => (0,_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_8__.rotateIcon)(_transformIcons_transformIcons__WEBPACK_IMPORTED_MODULE_8__.selectImagesSrcWrapper, 'source__select_open'),
	'.player__controls-play': _player_playSong__WEBPACK_IMPORTED_MODULE_5__.checkFlagSong,
	'.player__progress': (e) => (0,_player_updateProgressBar__WEBPACK_IMPORTED_MODULE_7__.rewindSong)(e),
	'.player__controls-prev': _player_switchSong__WEBPACK_IMPORTED_MODULE_6__.prevSong,
	'.player__controls-next': _player_switchSong__WEBPACK_IMPORTED_MODULE_6__.nextSong,
	'.player__list': (e) => (0,_player_switchSong__WEBPACK_IMPORTED_MODULE_6__.playClickedSong)(e),
	'.player__sounds-mute': _player_volume__WEBPACK_IMPORTED_MODULE_9__.checkIsMute,
	'.popup__button': () => {
		(0,_slider_setErrorPopupClass__WEBPACK_IMPORTED_MODULE_13__.setErrorPopupClass)('remove')
	},
	'.popup__shadow_show': () => {
		closeErrorPopup('remove')
	},
	'.settings__icon': () => {
		(0,_settings_toggleSettingsActive__WEBPACK_IMPORTED_MODULE_16__.toggleSettingsActive)(),
			(0,_settings_openSettings__WEBPACK_IMPORTED_MODULE_15__.openSettings)()
	},
	'.settings__close-button': () => {
		(0,_settings_closeSettings__WEBPACK_IMPORTED_MODULE_17__.closeSettings)(),
			(0,_settings_removeSettingsActive__WEBPACK_IMPORTED_MODULE_18__.closeSettingsActive)()
	},
	'.quotes__change-btn': _quotes_changeQoute__WEBPACK_IMPORTED_MODULE_12__.changeQuote
}

const inputEvents = {
	'.player__sounds-volume': _player_volume__WEBPACK_IMPORTED_MODULE_9__.checkChangeVolume,
	'.greeting__name': _greeting_localStorageGreeting__WEBPACK_IMPORTED_MODULE_2__.setStorageGreetingName
}

const changeEvents = {
	'.query__input': _slider_changeBG__WEBPACK_IMPORTED_MODULE_4__.changeQueryInput,
	'.source__select': (e) => (0,_imagesSrc_changeImagesSrc__WEBPACK_IMPORTED_MODULE_10__.changeImagesSrc)(e),
	'.language__select': () => {
		;(0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__.setStorageLanguage)()
		;(0,_weather_getWeather__WEBPACK_IMPORTED_MODULE_3__.getWeather)()
		;(0,_date_date__WEBPACK_IMPORTED_MODULE_0__.showDate)()
		;(0,_changeAppText_changeAppText__WEBPACK_IMPORTED_MODULE_11__.changeAppText)()
		;(0,_quotes_changeQoute__WEBPACK_IMPORTED_MODULE_12__.changeQuote)()
		;(0,_language_changeLanguageIcon__WEBPACK_IMPORTED_MODULE_14__.changeLanguageIcon)()
	},
	'.weather__input': _weather_getWeather__WEBPACK_IMPORTED_MODULE_3__.getWeather
}

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
/* 48 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeImagesSrc: function() { return /* binding */ changeImagesSrc; }
/* harmony export */ });
/* harmony import */ var _localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _slider_changeBG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);



const changeImagesSrc = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		(0,_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.setStorageImagesSrc)('github')
		;(0,_slider_changeBG__WEBPACK_IMPORTED_MODULE_1__.changeBG)()
	} else {
		(0,_localStorageImagesSrc__WEBPACK_IMPORTED_MODULE_0__.setStorageImagesSrc)('pexels')
		;(0,_slider_changeBG__WEBPACK_IMPORTED_MODULE_1__.changeBG)()
	}
}

/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openSettings: function() { return /* binding */ openSettings; },
/* harmony export */   settingsWrapper: function() { return /* binding */ settingsWrapper; }
/* harmony export */ });
const settingsWrapper = document.querySelector('.settings__wrapper')

const openSettings = () => {
	settingsWrapper.classList.toggle('settings__wrapper_show')
}

/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSettings: function() { return /* binding */ closeSettings; }
/* harmony export */ });
/* harmony import */ var _openSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


const closeSettings = () => {
	_openSettings__WEBPACK_IMPORTED_MODULE_0__.settingsWrapper.classList.remove('settings__wrapper_show')
}

/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSettingsActive: function() { return /* binding */ closeSettingsActive; }
/* harmony export */ });
/* harmony import */ var _toggleSettingsActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const closeSettingsActive = () => {
	_toggleSettingsActive__WEBPACK_IMPORTED_MODULE_0__.settingTitle.classList.remove('settings__title_active')
	_toggleSettingsActive__WEBPACK_IMPORTED_MODULE_0__.settingsButton.classList.remove('settings__button_active')
}

/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlPopupBtnHover: function() { return /* binding */ controlPopupBtnHover; }
/* harmony export */ });
const popupBtn = document.querySelector('.popup__button')

const controlPopupBtnHover = (value) => {
	popupBtn.classList[value]('popup__button_hover')
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
/* harmony import */ var _components_language_localStorageLanguage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_date_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _components_changeAppText_changeAppText_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_greeting_localStorageGreeting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _components_slider_changeBG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _components_quotes_changeQoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _components_player_createPlayList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
/* harmony import */ var _components_player_loadSong_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony import */ var _components_player_updateSongTime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);
/* harmony import */ var _components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39);
/* harmony import */ var _components_transformIcons_transformIcons_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40);
/* harmony import */ var _components_player_volume_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41);
/* harmony import */ var _components_language_changeSelectedLanguageValue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43);
/* harmony import */ var _components_language_changeLanguageIcon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(44);
/* harmony import */ var _components_imagesSrc_checkSelectedImagesSrc_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45);
/* harmony import */ var _components_imagesSrc_localStorageImagesSrc_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27);
/* harmony import */ var _components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47);
/* harmony import */ var _components_slider_controlPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52);
/* harmony import */ var _components_slider_setErrorPopupClass_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(25);
/* harmony import */ var _components_slider_localStorageSlider_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(26);
























setInterval(() => {
	(0,_components_date_time__WEBPACK_IMPORTED_MODULE_1__.showTime)()
	;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
}, 1000)

;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
;(0,_components_date_time__WEBPACK_IMPORTED_MODULE_1__.showTime)()
;(0,_components_changeAppText_changeAppText_js__WEBPACK_IMPORTED_MODULE_3__.changeAppText)()
;(0,_components_quotes_changeQoute_js__WEBPACK_IMPORTED_MODULE_7__.changeQuote)()
;(0,_components_player_createPlayList__WEBPACK_IMPORTED_MODULE_8__.createPlayList)()
;(0,_components_player_loadSong_js__WEBPACK_IMPORTED_MODULE_9__.loadSong)()
;(0,_components_language_changeSelectedLanguageValue_js__WEBPACK_IMPORTED_MODULE_15__.changeSelectedLanguageValue)()
;(0,_components_language_changeLanguageIcon_js__WEBPACK_IMPORTED_MODULE_16__.changeLanguageIcon)()
;(0,_components_imagesSrc_checkSelectedImagesSrc_js__WEBPACK_IMPORTED_MODULE_17__.checkSelectedImagesSrc)()
;(0,_components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_5__.getStorageCity)()
;(0,_components_greeting_localStorageGreeting_js__WEBPACK_IMPORTED_MODULE_4__.getStorageGreetingName)()
;(0,_components_slider_changeBG_js__WEBPACK_IMPORTED_MODULE_6__.setQueryValue)()
;(0,_components_slider_changeBG_js__WEBPACK_IMPORTED_MODULE_6__.changeBG)()
;(0,_components_player_volume_js__WEBPACK_IMPORTED_MODULE_14__.setVolumeBtnValue)()
;(0,_components_slider_localStorageSlider_js__WEBPACK_IMPORTED_MODULE_22__.getQueryInputValueLoad)()

window.addEventListener('beforeunload', () => {
	;(0,_components_language_localStorageLanguage_js__WEBPACK_IMPORTED_MODULE_0__.setStorageLanguageDefault)()
	;(0,_components_imagesSrc_localStorageImagesSrc_js__WEBPACK_IMPORTED_MODULE_18__.setStorageImagesSrcDefault)()
	;(0,_components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_5__.setStorageCity)()
	;(0,_components_slider_localStorageSlider_js__WEBPACK_IMPORTED_MODULE_22__.setQueryInputValueBeforeUnload)()
})

_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_11__.audio.addEventListener('timeupdate', function (e) {
	;(0,_components_player_updateSongTime_js__WEBPACK_IMPORTED_MODULE_10__.updateSongTime)()
	;(0,_components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_12__.updateProgressBar)(e)
})

window.addEventListener('click', function (e) {
	;(0,_components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.callEvents)(e, _components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.clickEvents)
	;(0,_components_transformIcons_transformIcons_js__WEBPACK_IMPORTED_MODULE_13__.closeIcon)(e, 'language__select', _components_transformIcons_transformIcons_js__WEBPACK_IMPORTED_MODULE_13__.selectLanguageInner, 'language__select_open')
	;(0,_components_transformIcons_transformIcons_js__WEBPACK_IMPORTED_MODULE_13__.closeIcon)(e, 'source__select', _components_transformIcons_transformIcons_js__WEBPACK_IMPORTED_MODULE_13__.selectImagesSrcWrapper, 'source__select_open')
})

_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_11__.audio.addEventListener('ended', _components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_11__.nextSong)
window.addEventListener('input', (e) => (0,_components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.callEvents)(e, _components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.inputEvents))
window.addEventListener('change', (e) => (0,_components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.callEvents)(e, _components_eventHandlers_eventHandlers_js__WEBPACK_IMPORTED_MODULE_19__.changeEvents))
_components_slider_setErrorPopupClass_js__WEBPACK_IMPORTED_MODULE_21__.popup.addEventListener('mouseleave', () => (0,_components_slider_controlPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_20__.controlPopupBtnHover)('add'))
_components_slider_setErrorPopupClass_js__WEBPACK_IMPORTED_MODULE_21__.popup.addEventListener('mouseenter', () => (0,_components_slider_controlPopupBtnHover_js__WEBPACK_IMPORTED_MODULE_20__.controlPopupBtnHover)('remove'))
}();
/******/ })()
;