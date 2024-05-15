import playListSongs from "../../../../../playListSongs"
import { getSongTimeCode } from "./getSongTimeCode"
import { count } from "../switchSong/setCount"
import { audio } from "../playbackControl/playSong"

let songCurrTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration-time')

export const updateSongTime = () => {
	songCurrTime.textContent = getSongTimeCode(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
}