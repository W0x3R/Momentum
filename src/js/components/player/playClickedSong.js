import { loadSong } from "./loadSong.js"
import { playSong } from "./playSong.js"
import { playbackControl } from "./playbackControl.js";
import { count, setCount } from "./setCount.js";

export const playClickedSong = (e) => {
	const songNum = parseInt(e.target.getAttribute('song_number'));
	if (!isNaN(songNum)) {
		if (count !== songNum) {
			const songList = document.querySelectorAll('.player__list-item')
			songList[count].classList.remove('player__list-item_active');
			setCount(songNum)
			loadSong();
			playSong();
		} else {
			playbackControl()
		}
	}
}