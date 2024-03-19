import playListSongs from "../../../../playListSongs"
import { count,audio,trackName } from "./switchSong";

let seconds;
let minutes;
let songCurrentTime = document.querySelector('.player__current-time')
let songDurationTime = document.querySelector('.player__duration')

function getTimeCodeFromNum(num) {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

export const updateTime = () => {
	songCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime)
	songDurationTime.textContent = playListSongs[count].duration
}

export const loadSong = () => {
	const currentSong = playListSongs[count]
	audio.src = currentSong.src
	trackName.textContent = currentSong.title
	updateTime()
}

