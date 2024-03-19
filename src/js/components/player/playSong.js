import { count, trackName, audio } from "./switchSong";

export let isPlay = false;
export const playButton = document.querySelector('.player__controls-play')
const playButtonIcon = document.querySelector('.player__controls-play-icon use')

export const playSong = () => {
	let li = document.querySelectorAll('li')[count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')
	audio.play()
	playButtonIcon.setAttribute('href', './images/svg/pause.svg#pause')
	playButton.classList.add('player__controls-play_active')
	isPlay = true
}

export const pauseSong = () => {
	audio.pause()
	playButtonIcon.setAttribute('href', './images/svg/play.svg#play')
	playButton.classList.remove('player__controls-play_active')
	isPlay = false
}

export const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}

