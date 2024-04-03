import playListSongs from "../../../../playListSongs"
import { getSongTimeCode } from "./getSongTimeCode"
import { audio, count } from "./switchSong"

let songCurrTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')

export const updateSongTime = () => {
	songCurrTime.textContent = getSongTimeCode(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
}