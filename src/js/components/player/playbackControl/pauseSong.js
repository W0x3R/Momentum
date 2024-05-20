import { audio, playBtn, playBtnIcon } from "./playSong"
import { setIsPlay } from "./setIsPlay"

export const pauseSong = () => {
	audio.pause()
	playBtnIcon.setAttribute('href', './images/svg/playSongBtn.svg#playSong')
	playBtn.classList.remove('player__playback-play_active')
	setIsPlay(false)
}