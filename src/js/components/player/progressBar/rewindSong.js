import { audio } from "../playbackControl/playSong";
import { progressInput } from "./updateProgressBar";

export const rewindSong = () => {
	const value = progressInput.value;
	const max = progressInput.max;
	audio.currentTime = (value / max) * audio.duration;
}
