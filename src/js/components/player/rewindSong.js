import { audio } from "./playbackControl/playSong";
import { progressBar } from "./updateProgressBar";

export const rewindSong = (e) => {
	let x = e.pageX - progressBar.getBoundingClientRect().left
	let clickedValue = (x * progressBar.max) / progressBar.clientWidth;
	audio.currentTime = (audio.duration * clickedValue) / progressBar.max;
}