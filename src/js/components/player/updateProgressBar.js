import { audio } from "./playSong";

const progressBar = document.querySelector('.player__progress')

export const updateProgressBar = (e) => {
	const { duration, currentTime } = e.srcElement
	if (duration) {
		progressBar.max = duration;
		progressBar.value = currentTime
	}
}

export const rewindSong = (e) => {
	let x = e.pageX - progressBar.getBoundingClientRect().left
	let clickedValue = (x * progressBar.max) / progressBar.clientWidth;
	audio.currentTime = (audio.duration * clickedValue) / progressBar.max;
}