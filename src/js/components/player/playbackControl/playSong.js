import { count } from "../switchSong/setCount";
import { setIsPlay } from "./setIsPlay";
import { removeProgressInputDisabled } from "../progressBar/removeProgressInputDisabled";
import pauseSongIcon from '../../../../images/svg/pauseSongBtn.svg'

export const trackName = document.querySelector('.player__track-name')
export const audio = document.querySelector('.player__audio')
export const playBtn = document.querySelector('.player__playback-play')
export const playBtnIcon = document.querySelector('.player__playback-play-icon use')

export const playSong = () => {
	document.querySelectorAll('li')[count].classList.add('player__list-item_active')
	trackName.classList.add('player__track-name_active')
	audio.play()
	playBtnIcon.setAttribute('href', `${pauseSongIcon}#pauseSong`)
	playBtn.classList.add('player__playback-play_active')
	setIsPlay(true)
	removeProgressInputDisabled()
}