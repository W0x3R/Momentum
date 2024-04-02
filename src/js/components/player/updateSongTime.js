import playListSongs from "../../../../playListSongs"
import { getSongTimeCode } from "./getSongTimeCode"
import { audio, count } from "./switchSong"


let songCurrentTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')

export const updateSongTime = () => {
	songCurrentTime.textContent = getSongTimeCode(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
}