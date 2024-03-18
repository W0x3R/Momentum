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
const volumeButton = document.querySelector('.player__sounds-volume')
const volumeMuteButton = document.querySelector('.player__sounds-mute')
const volumeMuteButtonIcon = document.querySelector(`.player__sounds-mute svg use`)
let seconds;
let minutes;
let isPlay = false;
let isMute = false;
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

const updateTime = () => {
	songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
}

const loadSong = () => {
	const currentSong = playListSongs[count]
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
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count--
	if (count < 0) {
		count = playListSongs.length - 1
	}
	loadSong()
	playSong()
}

playButtonPrev.addEventListener('click', prevSong)

document.addEventListener('DOMContentLoaded', function (e) {
	if (!sessionStorage.getItem('volumeValue')) {
		sessionStorage.setItem('volumeValue', volumeButton.value)
	}
	audio.volume = sessionStorage.getItem('volumeValue')
	volumeButton.value = sessionStorage.getItem('volumeValue')
	if (audio.volume === 0) {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')
		isMute = true;
	}
	else {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')
		isMute = false;
	}
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

volumeButton.addEventListener('input', function (e) {
	audio.volume = this.value
	sessionStorage.setItem('volumeValue', volumeButton.value)
	if (audio.volume === 0) {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')
		volumeMuteButton.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')

		volumeMuteButton.removeAttribute('disabled')
		isMute = false;
	}
})

volumeMuteButton.addEventListener('click', function (e) {
	if (isMute) {
		audio.volume = sessionStorage.getItem('volumeValue')
		volumeButton.value = sessionStorage.getItem('volumeValue')
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')
		isMute = false
	}
	else {
		audio.volume = 0;
		volumeButton.value = 0;
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')

		isMute = true;
	}
})