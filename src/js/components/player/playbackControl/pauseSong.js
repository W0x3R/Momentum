import { audio, playBtn, playBtnIcon } from "./playSong"
import { setIsPlay } from "./setIsPlay"
import playSongIcon from '../../../../images/svg/playSongBtn.svg'

export const pauseSong = () => {
	audio.pause()
	playBtnIcon.setAttribute('href', `${playSongIcon}#playSong`)
	playBtn.classList.remove('player__playback-play_active')
	setIsPlay(false)
}