import playListSongs from "../../../playListSongs"
const playList = document.querySelector('.player__list')
const audio = document.querySelector('.player__audio')
let songCurrentTime = document.querySelector('.player__time-current')
let songDurationTime = document.querySelector('.player__time-duration')
let progressBar = document.querySelector('.player__time-progress')
const playButton = document.querySelector('.player__controls-play')
const playButtonIcon = document.querySelector('.player__controls-play-icon use')
let seconds;
let minutes;
let isPlay = false;
let count = 0;

audio.src = playListSongs[count].src

const createPlayList = () => {
	playListSongs.forEach(e => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		playList.append(li)
	})
}

createPlayList()

const playSong = () => {
	if (isPlay) {
		playButtonIcon.setAttribute('href', './images/svg/play.svg#play')
		audio.pause()
		isPlay = false
	}
	else {
		playButtonIcon.setAttribute('href', './images/svg/pause.svg#pause')
		audio.play()
		isPlay = true
	}
}

playButton.addEventListener('click', playSong)

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

export { updateTime }
