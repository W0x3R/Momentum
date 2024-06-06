import { audio } from "../playbackControl/playSong";
import { progressBar } from "./updateProgressBar";

export const rewindSong = () => {
	const value = parseFloat(progressBar.value);
	const max = parseFloat(progressBar.max);
	if (!isNaN(value) && !isNaN(max)) {
		audio.currentTime = (value / max) * audio.duration;
	}
}
