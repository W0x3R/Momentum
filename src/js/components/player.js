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
	playListSongs.forEach(e => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		playList.append(li)
	})
}

createPlayList()

const loadSong = () => {
	audio.src = playListSongs[count].src
	trackName.textContent = playListSongs[count].title
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

audio.addEventListener('timeupdate', function () {
	updateTime()
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

export { updateTime }
