import { audio } from "./playSong"
import { setIsPlay } from "./setIsPlay"
import { playBtn, playBtnIcon } from "./playSong"

export const pauseSong = () => {
	audio.pause()
	playBtnIcon.setAttribute('href', './images/svg/playSongBtn.svg#playSong')
	playBtn.classList.remove('player__controls-play_active')
	setIsPlay(false)
}