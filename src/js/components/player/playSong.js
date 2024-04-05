import { count, trackName, audio } from "./switchSong";

export let isPlay = false;
const playBtn = document.querySelector('.player__controls-play')
const playBtnIcon = document.querySelector('.player__controls-play-icon use')

export const playSong = () => {
	let li = document.querySelectorAll('li')[count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')
	audio.play()
	playBtnIcon.setAttribute('href', './images/svg/pauseSongBtn.svg#pauseSong')
	playBtn.classList.add('player__controls-play_active')
	isPlay = true
}

export const pauseSong = () => {
	audio.pause()
	playBtnIcon.setAttribute('href', './images/svg/playSongBtn.svg#playSong')
	playBtn.classList.remove('player__controls-play_active')
	isPlay = false
}

export const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}