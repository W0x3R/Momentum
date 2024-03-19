/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentLang: function() { return /* binding */ getCurrentLang; },
/* harmony export */   setCurrentLang: function() { return /* binding */ setCurrentLang; }
/* harmony export */ });
/* harmony import */ var _transformIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const getCurrentLang = () => localStorage.getItem('language')

const setCurrentLang = () => {
	localStorage.setItem('language', _transformIcon__WEBPACK_IMPORTED_MODULE_0__.select.value)
}

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeLanguageIcon: function() { return /* binding */ closeLanguageIcon; },
/* harmony export */   rotateLanguageIcon: function() { return /* binding */ rotateLanguageIcon; },
/* harmony export */   select: function() { return /* binding */ select; },
/* harmony export */   selectWrapper: function() { return /* binding */ selectWrapper; }
/* harmony export */ });
const selectWrapper = document.querySelector('.language')
const select = document.querySelector('.language__select')

const rotateLanguageIcon = () => {
	selectWrapper.classList.toggle('language__select_open')
}

const closeLanguageIcon = (e) => {
	!e.target.classList.contains('language__select') ? selectWrapper.classList.remove('language__select_open') : ''
}

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showTime: function() { return /* binding */ showTime; }
/* harmony export */ });
const time = document.querySelector('.data__time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
}



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
	const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	const currentDate = new Date().toLocaleDateString(currentLang, dateOptions)
	date.textContent = currentDate
}



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showGreetingText: function() { return /* binding */ showGreetingText; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const greetingText = document.querySelector('.greeting__text')

const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый дня, ', 'Добрый вечер, ']
}

const showGreetingText = () => {
	const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObj[currentLang][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPlaceHolderLanguage: function() { return /* binding */ setPlaceHolderLanguage; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _localStorageGreeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

const setPlaceHolderLanguage = () => {
	const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	currentLang === 'en' ? _localStorageGreeting__WEBPACK_IMPORTED_MODULE_1__.greetingName.placeholder = greetingPlaceHolder.en : _localStorageGreeting__WEBPACK_IMPORTED_MODULE_1__.greetingName.placeholder = greetingPlaceHolder.ru
}

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGreetingName: function() { return /* binding */ getGreetingName; },
/* harmony export */   greetingName: function() { return /* binding */ greetingName; },
/* harmony export */   setGreetingName: function() { return /* binding */ setGreetingName; }
/* harmony export */ });
const greetingName = document.querySelector('.greeting__name')

const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: function() { return /* binding */ getWeather; },
/* harmony export */   weatherCityInput: function() { return /* binding */ weatherCityInput; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _language_setSelectedValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _updateWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);




const weatherCityInput = document.querySelector('.weather__input')

async function getWeather() {
	try {
		const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
		if (!currentLang) {
			localStorage.setItem('language', 'en')
		}
		(0,_language_setSelectedValue__WEBPACK_IMPORTED_MODULE_1__.setSelectedValue)()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityInput.value}&lang=${currentLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		;(0,_updateWeather__WEBPACK_IMPORTED_MODULE_2__.updateUI)(data, currentLang);
	}
	catch (error) {
		(0,_updateWeather__WEBPACK_IMPORTED_MODULE_2__.handleErrors)()
	}
}

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSelectedValue: function() { return /* binding */ setSelectedValue; }
/* harmony export */ });
/* harmony import */ var _localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _transformIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const selectChildrenArray = Array.from(_transformIcon__WEBPACK_IMPORTED_MODULE_1__.select.children)

const findSelectedItem = (lang, value) => {
	const item = selectChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

const setSelectedValue = () => {
	const lang = (0,_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	if (lang === 'en') {
		findSelectedItem('ru', false)
		findSelectedItem('en', true)
	} else if (lang === 'ru') {
		findSelectedItem('en', false)
		findSelectedItem('ru', true)
	}
}

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleErrors: function() { return /* binding */ handleErrors; },
/* harmony export */   updateUI: function() { return /* binding */ updateUI; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const weatherIcon = document.querySelector('.weather__icon')
const weatherWind = document.querySelector('.weather__wind')
const weatherError = document.querySelector('.weather_error')
const weatherTemperature = document.querySelector('.weather__values-temperature')
const weatherTemperatureDescription = document.querySelector('.weather__values-description')
const weatherHumidity = document.querySelector('.weather__humidity')
const weatherTranslations = {
	en: {
		wind: 'Wind speed:',
		units: 'm/s',
		humidity: 'Humidity:',
		error: "ERROR: City wasn't found!"
	},
	ru: {
		wind: 'Скорость ветра',
		units: 'м/c',
		humidity: 'Влажность:',
		error: "Ошибка: Город не найден!"
	}
}

const updateUI = (data, currentLang) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherTranslations[currentLang].wind}: ${Math.round(data.wind.speed)} ${weatherTranslations[currentLang].units}`;
	weatherHumidity.textContent = `${weatherTranslations[currentLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.style.display = 'none';
	weatherError.textContent = '';
};

const handleErrors = () => {
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.style.display = 'block';
	weatherError.textContent = `${weatherTranslations[(0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()].error}`;
};

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCity: function() { return /* binding */ getCity; },
/* harmony export */   setCity: function() { return /* binding */ setCity; }
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);



const setCity = () => {
	if (_getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value) {
		localStorage.setItem('city', _getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value)
	}
}

const getCity = () => {
	const getCity = localStorage.getItem('city')
	_getWeather__WEBPACK_IMPORTED_MODULE_0__.weatherCityInput.value = getCity ? getCity : 'Гомель'
	;(0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)()
}

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeBg: function() { return /* binding */ changeBg; },
/* harmony export */   showBgOnClick: function() { return /* binding */ showBgOnClick; },
/* harmony export */   sliderButtonNext: function() { return /* binding */ sliderButtonNext; },
/* harmony export */   sliderButtonPrev: function() { return /* binding */ sliderButtonPrev; }
/* harmony export */ });
/* harmony import */ var _greeting_showGreetingMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _getRandomNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _getTimeOfDay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);





const body = document.body
const sliderButtonPrev = document.querySelector('.main__button_prev')
const sliderButtonNext = document.querySelector('.main__button_next')

let randomNumber = (0,_getRandomNumber__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, 20)

const changeBg = () => {
	const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_1__.getCurrentLang)();
	const greetingText = (0,_greeting_showGreetingMessage__WEBPACK_IMPORTED_MODULE_0__.showGreetingText)().split(' ')[1].slice(0, -1);
	let value = currentLang === 'en' ? greetingText : (0,_getTimeOfDay__WEBPACK_IMPORTED_MODULE_3__.translateGreeting)(greetingText)

	let randomNumberForImages = randomNumber.toString().padStart(2, '0')
	let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
	const image = new Image();
	image.src = url;
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

const showBgOnClick = (direction) => {
	randomNumber = (direction === 'prev') ?
		((randomNumber === 1) ? 20 : randomNumber - 1) :
		((randomNumber === 20) ? 1 : randomNumber + 1);
	changeBg()
}


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNumber: function() { return /* binding */ getRandomNumber; }
/* harmony export */ });
const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translateGreeting: function() { return /* binding */ translateGreeting; }
/* harmony export */ });
const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	дня: 'afternoon',
	вечер: 'evening'
};

const translateGreeting = (greetingText) => {
	return greetingTranslations[greetingText];
};

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuotes: function() { return /* binding */ getQuotes; }
/* harmony export */ });
/* harmony import */ var _getQuoutesLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _showQuotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



const changeQuoteButton = document.querySelector('.quotes__change-btn')

async function getQuotes() {
	try {
		const fetchRequest = await fetch((0,_getQuoutesLanguage__WEBPACK_IMPORTED_MODULE_0__.getQuoteLanguage)())
		const data = await fetchRequest.json()
		;(0,_showQuotes__WEBPACK_IMPORTED_MODULE_1__.showQuote)(data)
		changeQuoteButton.addEventListener('click', () => (0,_showQuotes__WEBPACK_IMPORTED_MODULE_1__.showQuote)(data))
	}
	catch {
		console.error('Error fetching quotes:', error);
	}

}




/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuoteLanguage: function() { return /* binding */ getQuoteLanguage; }
/* harmony export */ });
/* harmony import */ var _language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const getQuoteLanguage = () => {
	const currentLang = (0,_language_localStorageLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	return currentLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showQuote: function() { return /* binding */ showQuote; }
/* harmony export */ });
/* harmony import */ var _slider_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

function showQuote(data) {
	const randomNumber = (0,_slider_getRandomNumber__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(0, data.length - 1)
	quote.textContent = data[randomNumber].quote
	author.textContent = data[randomNumber].author
}

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayList: function() { return /* binding */ createPlayList; },
/* harmony export */   playList: function() { return /* binding */ playList; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const playList = document.querySelector('.player__list')

const createPlayList = () => {
	_playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('datanumber', i)
		playList.append(li)
	})
}

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSong: function() { return /* binding */ loadSong; },
/* harmony export */   updateTime: function() { return /* binding */ updateTime; }
/* harmony export */ });
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



let seconds;
let minutes;
let songCurrentTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')

function getTimeCodeFromNum(num) {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

const updateTime = () => {
	songCurrentTime.textContent = getTimeCodeFromNum(_switchSong__WEBPACK_IMPORTED_MODULE_1__.audio.currentTime)
	songDurationTime.textContent = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong__WEBPACK_IMPORTED_MODULE_1__.count].duration
}

const loadSong = () => {
	const currentSong = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][_switchSong__WEBPACK_IMPORTED_MODULE_1__.count]
	_switchSong__WEBPACK_IMPORTED_MODULE_1__.audio.src = currentSong.src
	_switchSong__WEBPACK_IMPORTED_MODULE_1__.trackName.textContent = currentSong.title
	updateTime()
}



/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audio: function() { return /* binding */ audio; },
/* harmony export */   count: function() { return /* binding */ count; },
/* harmony export */   nextSong: function() { return /* binding */ nextSong; },
/* harmony export */   playClickedSong: function() { return /* binding */ playClickedSong; },
/* harmony export */   prevSong: function() { return /* binding */ prevSong; },
/* harmony export */   trackName: function() { return /* binding */ trackName; },
/* harmony export */   volumeButton: function() { return /* binding */ volumeButton; },
/* harmony export */   volumeMuteButtonIcon: function() { return /* binding */ volumeMuteButtonIcon; }
/* harmony export */ });
/* harmony import */ var _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _updateLoadSong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _playSong_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);




const trackName = document.querySelector('.player__track-name')
const audio = document.querySelector('.player__audio')
const volumeButton = document.querySelector('.player__sounds-volume')
const volumeMuteButtonIcon = document.querySelector(`.player__sounds-mute svg use`)

let count = 0;

const nextSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count++
	if (count > _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1) {
		count = 0;
	}
	(0,_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)()
	;(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)()
}

const prevSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count--
	if (count < 0) {
		count = _playListSongs_js__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1
	}
	(0,_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)()
	;(0,_playSong_js__WEBPACK_IMPORTED_MODULE_2__.playSong)()
}

const playClickedSong = (e) => {
	const dataNumber = parseInt(e.target.getAttribute('datanumber'));
	if (!isNaN(dataNumber)) {
		if (count !== dataNumber) {
			let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
			count = dataNumber;
			(0,_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_1__.loadSong)();
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
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFlagSong: function() { return /* binding */ checkFlagSong; },
/* harmony export */   isPlay: function() { return /* binding */ isPlay; },
/* harmony export */   pauseSong: function() { return /* binding */ pauseSong; },
/* harmony export */   playButton: function() { return /* binding */ playButton; },
/* harmony export */   playSong: function() { return /* binding */ playSong; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


let isPlay = false;
const playButton = document.querySelector('.player__controls-play')
const playButtonIcon = document.querySelector('.player__controls-play-icon use')

const playSong = () => {
	let li = document.querySelectorAll('li')[_switchSong__WEBPACK_IMPORTED_MODULE_0__.count].classList.add('player__list-item_active')
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.trackName.classList.add('player__track-name_active')
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.play()
	playButtonIcon.setAttribute('href', './images/svg/pause.svg#pause')
	playButton.classList.add('player__controls-play_active')
	isPlay = true
}

const pauseSong = () => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.pause()
	playButtonIcon.setAttribute('href', './images/svg/play.svg#play')
	playButton.classList.remove('player__controls-play_active')
	isPlay = false
}

const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}



/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInputChangeVolume: function() { return /* binding */ checkInputChangeVolume; },
/* harmony export */   checkIsMute: function() { return /* binding */ checkIsMute; },
/* harmony export */   setButtonValueContentLoaded: function() { return /* binding */ setButtonValueContentLoaded; },
/* harmony export */   volumeMuteButton: function() { return /* binding */ volumeMuteButton; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);



const volumeMuteButton = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteButtonHref = (iconName) => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeMuteButtonIcon.setAttribute('href', `./images/svg/${iconName}`)
}

const checkInputChangeVolume = () => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = _switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeButton.value
	;(0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setVolumeButtonValue)()
	if (_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		setMuteButtonHref('noVolume.svg#mute')
		volumeMuteButton.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		setMuteButtonHref('volume.svg#volume-on')
		volumeMuteButton.removeAttribute('disabled')
		isMute = false;
	}
}

const setVolumeButtonIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = volumeValue
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeButton.value = volumeButtonValue
	;(0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)(iconName)
	isMute = isMuteValue
}

const checkIsMute = () => {
	isMute ? setVolumeButtonIcon((0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)(), (0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)(), setMuteButtonHref('volume.svg#volume-on'), false) : setVolumeButtonIcon(0, 0, setMuteButtonHref('noVolume.svg#mute'), true)
}

const setButtonValueContentLoaded = () => {
	if (!(0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)()) {
		(0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.setVolumeButtonValue)()
	}
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume = (0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)()
	_switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeButton.value = (0,_sessionStoragePlayer__WEBPACK_IMPORTED_MODULE_1__.getVolumeButtonValue)()
	if (_switchSong__WEBPACK_IMPORTED_MODULE_0__.audio.volume === 0) {
		setMuteButtonHref('noVolume.svg#mute')
		isMute = true;
	}
	else {
		setMuteButtonHref('volume.svg#volume-on')
		isMute = false;
	}
}

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVolumeButtonValue: function() { return /* binding */ getVolumeButtonValue; },
/* harmony export */   setVolumeButtonValue: function() { return /* binding */ setVolumeButtonValue; }
/* harmony export */ });
/* harmony import */ var _switchSong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


const setVolumeButtonValue = () => {
	sessionStorage.setItem('volumeValue', _switchSong__WEBPACK_IMPORTED_MODULE_0__.volumeButton.value)
}

const getVolumeButtonValue = () => {
	return sessionStorage.getItem('volumeValue')
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
/* harmony import */ var _components_language_localStorageLanguage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _components_date_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _components_greeting_showGreetingMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_greeting_setPlaceholderLanguage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _components_greeting_localStorageGreeting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _components_weather_getWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _components_quotes_getQuotes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _components_player_createPlayList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _components_player_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var _components_player_playSong_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony import */ var _components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23);
/* harmony import */ var _components_language_transformIcon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2);
/* harmony import */ var _components_language_setSelectedValue_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9);
/* harmony import */ var _components_player_volume_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24);



















const playButtonPrev = document.querySelector('.player__controls-prev')
const playButtonNext = document.querySelector('.player__controls-next')

setInterval(() => {
	;(0,_components_date_time__WEBPACK_IMPORTED_MODULE_1__.showTime)()
	;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
}, 1000)

;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
;(0,_components_date_time__WEBPACK_IMPORTED_MODULE_1__.showTime)()
;(0,_components_greeting_showGreetingMessage_js__WEBPACK_IMPORTED_MODULE_3__.showGreetingText)()
;(0,_components_greeting_setPlaceholderLanguage_js__WEBPACK_IMPORTED_MODULE_4__.setPlaceHolderLanguage)()
;(0,_components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__.changeBg)()
;(0,_components_quotes_getQuotes_js__WEBPACK_IMPORTED_MODULE_9__.getQuotes)()
;(0,_components_player_createPlayList__WEBPACK_IMPORTED_MODULE_10__.createPlayList)()
;(0,_components_player_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_11__.loadSong)()

window.addEventListener('beforeunload', () => {
	;(0,_components_greeting_localStorageGreeting_js__WEBPACK_IMPORTED_MODULE_5__.setGreetingName)()
	;(0,_components_language_localStorageLanguage_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentLang)()
	;(0,_components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_7__.setCity)()
})

window.addEventListener('load', () => {
	;(0,_components_greeting_localStorageGreeting_js__WEBPACK_IMPORTED_MODULE_5__.getGreetingName)()
	;(0,_components_weather_localStorageWeather_js__WEBPACK_IMPORTED_MODULE_7__.getCity)()
})

_components_weather_getWeather__WEBPACK_IMPORTED_MODULE_6__.weatherCityInput.addEventListener('change', _components_weather_getWeather__WEBPACK_IMPORTED_MODULE_6__.getWeather)

_components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__.sliderButtonPrev.addEventListener('click', () => (0,_components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__.showBgOnClick)('prev'))
_components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__.sliderButtonNext.addEventListener('click', () => (0,_components_slider_changeBackground__WEBPACK_IMPORTED_MODULE_8__.showBgOnClick)('next'))


_components_player_playSong_js__WEBPACK_IMPORTED_MODULE_12__.playButton.addEventListener('click', _components_player_playSong_js__WEBPACK_IMPORTED_MODULE_12__.checkFlagSong)

_components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.progressBar.addEventListener('click', function (e) {
	let x = e.pageX - _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.progressBar.getBoundingClientRect().left
	let clickedValue = (x * _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.progressBar.max) / _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.progressBar.clientWidth;
	_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.audio.currentTime = (_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.audio.duration * clickedValue) / _components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.progressBar.max;
});

_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.audio.addEventListener('timeupdate', function (e) {
	(0,_components_player_updateLoadSong_js__WEBPACK_IMPORTED_MODULE_11__.updateTime)()
	;(0,_components_player_updateProgressBar_js__WEBPACK_IMPORTED_MODULE_14__.updateProgressBar)(e)
})

_components_language_transformIcon_js__WEBPACK_IMPORTED_MODULE_15__.select.addEventListener('change', () => {
	;(0,_components_language_localStorageLanguage_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentLang)()
	;(0,_components_weather_getWeather__WEBPACK_IMPORTED_MODULE_6__.getWeather)()
	;(0,_components_language_setSelectedValue_js__WEBPACK_IMPORTED_MODULE_16__.setSelectedValue)()
	;(0,_components_date_date__WEBPACK_IMPORTED_MODULE_2__.showDate)()
	;(0,_components_greeting_showGreetingMessage_js__WEBPACK_IMPORTED_MODULE_3__.showGreetingText)()
	;(0,_components_greeting_setPlaceholderLanguage_js__WEBPACK_IMPORTED_MODULE_4__.setPlaceHolderLanguage)()
	;(0,_components_quotes_getQuotes_js__WEBPACK_IMPORTED_MODULE_9__.getQuotes)()
})

_components_language_transformIcon_js__WEBPACK_IMPORTED_MODULE_15__.selectWrapper.addEventListener('click', function () {
	;(0,_components_language_transformIcon_js__WEBPACK_IMPORTED_MODULE_15__.rotateLanguageIcon)()
})

window.addEventListener('click', function (e) {
	;(0,_components_language_transformIcon_js__WEBPACK_IMPORTED_MODULE_15__.closeLanguageIcon)(e)
})

_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.audio.addEventListener('ended', function () {
	;(0,_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.nextSong)()
})
playButtonNext.addEventListener('click', _components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.nextSong)
playButtonPrev.addEventListener('click', _components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.prevSong)

_components_player_createPlayList__WEBPACK_IMPORTED_MODULE_10__.playList.addEventListener('click', function (e) {
	;(0,_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.playClickedSong)(e)
});

_components_player_switchSong_js__WEBPACK_IMPORTED_MODULE_13__.volumeButton.addEventListener('input', function () {
	(0,_components_player_volume_js__WEBPACK_IMPORTED_MODULE_17__.checkInputChangeVolume)()
})

_components_player_volume_js__WEBPACK_IMPORTED_MODULE_17__.volumeMuteButton.addEventListener('click', function (e) {
	;(0,_components_player_volume_js__WEBPACK_IMPORTED_MODULE_17__.checkIsMute)()
})

document.addEventListener('DOMContentLoaded', function (e) {
	;(0,_components_player_volume_js__WEBPACK_IMPORTED_MODULE_17__.setButtonValueContentLoaded)()
});
}();
/******/ })()
;