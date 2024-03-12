/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPlaceHolder: function() { return /* binding */ setPlaceHolder; },
/* harmony export */   showDate: function() { return /* binding */ showDate; },
/* harmony export */   showGreetingText: function() { return /* binding */ showGreetingText; }
/* harmony export */ });
/* harmony import */ var _changeLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const time = document.querySelector('.data__time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
}

const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

const showDate = () => {
	const currentLang = (0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	const currentDate = new Date().toLocaleDateString(currentLang, dateOptions)
	date.textContent = currentDate
}

showDate()

const greetingText = document.querySelector('.greeting__text')

const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Доброго дня, ', 'Доброго вечера, ']
}

const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

const showGreetingText = () => {
	const currentLang = (0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObj[currentLang][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}

showGreetingText()

const greetingName = document.querySelector('.greeting__name')

const setPlaceHolder = () => {
	const currentLang = (0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
	currentLang === 'en' ? greetingName.placeholder = greetingPlaceHolder.en : greetingName.placeholder = greetingPlaceHolder.ru
}

setPlaceHolder()

const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showTime()

window.addEventListener('beforeunload', setGreetingName)
window.addEventListener('load', getGreetingName)





/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentLang: function() { return /* binding */ getCurrentLang; },
/* harmony export */   setSelectedValue: function() { return /* binding */ setSelectedValue; }
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);




const selectWrapper = document.querySelector('.language')
const select = document.querySelector('.language__select')
const selectChildrenArray = Array.from(select.children)

selectWrapper.addEventListener('click', function (e) {
	this.classList.toggle('language__select_open')
})

const setCurrentLang = () => {
	localStorage.setItem('language', select.value)
}

const findItem = (lang, value) => {
	const item = selectChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

const setSelectedValue = () => {
	const lang = getCurrentLang()
	if (lang === 'en') {
		findItem('ru', false)
		findItem('en', true)
	} else if (lang === 'ru') {
		findItem('en', false)
		findItem('ru', true)
	}
}

const getCurrentLang = () => localStorage.getItem('language')

select.addEventListener('change', () => {
	setCurrentLang()
	;(0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)()
	setSelectedValue()
	;(0,_date__WEBPACK_IMPORTED_MODULE_1__.showDate)()
	;(0,_date__WEBPACK_IMPORTED_MODULE_1__.showGreetingText)()
	;(0,_date__WEBPACK_IMPORTED_MODULE_1__.setPlaceHolder)()
})

window.addEventListener('click', function (e) {
	!e.target.classList.contains('language__select') ? selectWrapper.classList.remove('language__select_open') : ''
})





/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: function() { return /* binding */ getWeather; }
/* harmony export */ });
/* harmony import */ var _changeLanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const weatherCity = document.querySelector('.weather__input')
const weatherIcon = document.querySelector('.weather__icon')
const weatherError = document.querySelector('.weather_error')
const weatherTemperature = document.querySelector('.weather__values-temperature')
const weatherTemperatureDescription = document.querySelector('.weather__values-description')
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

const handleErrors = (error) => {
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.style.display = 'block';
	weatherError.textContent = `${weatherTranslations[(0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()].error}`;
};

async function getWeather() {
	try {
		const currentLang = (0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.getCurrentLang)()
		if (!currentLang) {
			localStorage.setItem('language', 'en')
		}
		(0,_changeLanguage__WEBPACK_IMPORTED_MODULE_0__.setSelectedValue)()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=${currentLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		updateUI(data, currentLang);
	}
	catch (error) {
		handleErrors(error)
	}
}

weatherCity.addEventListener('change', () => {
	getWeather()
})

const setCity = () => {
	if (weatherCity.value) {
		localStorage.setItem('city', weatherCity.value)
	}
}

window.addEventListener('beforeunload', setCity)

const getCity = () => {
	const getCity = localStorage.getItem('city')
	weatherCity.value = getCity ? getCity : 'Гомель'
	getWeather()
}

window.addEventListener('load', getCity)



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNumber: function() { return /* binding */ getRandomNumber; }
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

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



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const changeQuoteButton = document.querySelector('.quotes__change-btn')
const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

function showQuote(data) {
	const randomNumber = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(0, data.length - 1)
	quote.textContent = data[randomNumber].quote
	author.textContent = data[randomNumber].author
}

async function getQuotes() {
	try {
		const fetchRequest = await fetch('quotes.json')
		const data = await fetchRequest.json()
		showQuote(data)
		changeQuoteButton.addEventListener('click', () => showQuote(data))
	}
	catch {
		console.error('Error fetching quotes:', error);
	}

}
getQuotes()



/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playListSongs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


const trackName = document.querySelector('.player__track-name')
const playList = document.querySelector('.player__list')
const audio = document.querySelector('.player__audio')
let songCurrentTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')
let progressBar = document.querySelector('.player__progress')
const playButton = document.querySelector('.player__controls-play')
const playButtonPrev = document.querySelector('.player__controls-prev')
const playButtonNext = document.querySelector('.player__controls-next')
const playButtonIcon = document.querySelector('.player__controls-play-icon use')
const volumeButton = document.querySelector('.player__sounds-volume')
const volumeMuteButton = document.querySelector('.player__sounds-mute')
const volumeMuteButtonIcon = document.querySelector(`.player__sounds-mute svg use`)
let seconds;
let minutes;
let isPlay = false;
let isMute = false;
let count = 0;

const createPlayList = () => {
	_playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('datanumber', i)
		playList.append(li)
	})
}

createPlayList()

const updateTime = () => {
	songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime)
	songDurationTime.textContent = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][count].duration
}

const loadSong = () => {
	const currentSong = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"][count]
	audio.src = currentSong.src
	trackName.textContent = currentSong.title
	updateTime()
}

loadSong()

const playSong = () => {
	let li = document.querySelectorAll('li')[count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')

	audio.play()
	playButtonIcon.setAttribute('href', './images/svg/pause.svg#pause')
	playButton.classList.add('player__controls-play_active')
	isPlay = true
}

const pauseSong = () => {
	audio.pause()
	playButtonIcon.setAttribute('href', './images/svg/play.svg#play')
	playButton.classList.remove('player__controls-play_active')
	isPlay = false
}

const checkFlagSong = () => {
	if (isPlay) {
		pauseSong()
	}
	else {
		playSong()
	}
}

playButton.addEventListener('click', checkFlagSong)

function getTimeCodeFromNum(num) {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}



const updateProgressBar = (e) => {
	const { duration, currentTime } = e.srcElement
	if (duration) {
		progressBar.max = duration;
		progressBar.value = currentTime
	}
}

progressBar.addEventListener('click', function (e) {
	let x = e.pageX - progressBar.getBoundingClientRect().left
	let clickedValue = (x * progressBar.max) / progressBar.clientWidth;
	audio.currentTime = (audio.duration * clickedValue) / progressBar.max;
});

audio.addEventListener('timeupdate', function (e) {
	updateTime()
	updateProgressBar(e)
})

const nextSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count++
	if (count > _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1) {
		count = 0;
	}
	loadSong()
	playSong()
}

audio.addEventListener('ended', function () {
	nextSong()
})

playButtonNext.addEventListener('click', nextSong)

const prevSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count--
	if (count < 0) {
		count = _playListSongs__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1
	}
	loadSong()
	playSong()
}

playButtonPrev.addEventListener('click', prevSong)

document.addEventListener('DOMContentLoaded', function (e) {
	playList.addEventListener('click', function (e) {
		const dataNumber = parseInt(e.target.getAttribute('datanumber'));
		if (!isNaN(dataNumber)) {
			if (count !== dataNumber) {
				let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
				count = dataNumber;
				loadSong();
				playSong();
			} else {
				if (isPlay) {
					pauseSong();
				} else {
					playSong();
				}
			}
		}
	});
});

sessionStorage.setItem('volumeValue', volumeButton.value)

volumeButton.addEventListener('input', function (e) {
	audio.volume = this.value
	sessionStorage.setItem('volumeValue', volumeButton.value)
})

volumeMuteButton.addEventListener('click', function (e) {
	if (isMute) {
		audio.volume = sessionStorage.getItem('volumeValue')
		volumeButton.value = sessionStorage.getItem('volumeValue')
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')

		isMute = false
	}
	else {
		audio.volume = 0;
		volumeButton.value = 0;
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')
		isMute = true;
	}
})

/***/ }),
/* 7 */
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
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_quotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _components_changeLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);







}();
/******/ })()
;