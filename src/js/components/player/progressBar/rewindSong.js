import { audio } from "../playbackControl/playSong";
import { progressBar } from "./updateProgressBar";

export const rewindSong = () => {
	const value = progressBar.value;
	const max = progressBar.max;
	audio.currentTime = (value / max) * audio.duration;
}
