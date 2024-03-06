import playListSongs from "../../../playListSongs"

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
let seconds;
let minutes;
let isPlay = false;
let count = 0;

const createPlayList = () => {
	playListSongs.forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('datanumber', i)
		playList.append(li)
	})
}

createPlayList()

const loadSong = () => {
	const currentSong = playListSongs[count]
	audio.src = currentSong.src
	trackName.textContent = currentSong.title
}

loadSong()

const playSong = () => {
	let li = document.querySelectorAll('li')[count].classList.add('player__list_active')
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

const updateTime = () => {
	songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
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
	let li = document.querySelectorAll('li')[count].classList.remove('player__list_active')
	count++
	if (count > playListSongs.length - 1) {
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
	let li = document.querySelectorAll('li')[count].classList.remove('player__list_active')
	count--
	if (count < 0) {
		count = playListSongs.length - 1
	}
	loadSong()
	playSong()
}

playButtonPrev.addEventListener('click', prevSong)

document.addEventListener('DOMContentLoaded', function (e) {
	playList.addEventListener('click', function (e) {
		const dataNumber = e.target.getAttribute('datanumber')
		if (dataNumber) {
			let li = document.querySelectorAll('li')[count].classList.remove('player__list_active')
			count = dataNumber
			loadSong()
			playSong()
		}
	})
})

export { updateTime }
