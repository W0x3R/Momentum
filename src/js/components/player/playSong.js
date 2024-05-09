import { count } from "./switchSong";
import { isPlay, setIsPlay } from "./setIsPlay";
import { pauseSong } from "./pauseSong";

export const trackName = document.querySelector('.player__track-name')
export const audio = document.querySelector('.player__audio')
export const playBtn = document.querySelector('.player__controls-play')
export const playBtnIcon = document.querySelector('.player__controls-play-icon use')

export const playSong = () => {
	document.querySelectorAll('li')[count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')
	audio.play()
	playBtnIcon.setAttribute('href', './images/svg/pauseSongBtn.svg#pauseSong')
	playBtn.classList.add('player__controls-play_active')
	setIsPlay(true)
}

export const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}