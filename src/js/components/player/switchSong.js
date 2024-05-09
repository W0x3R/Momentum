import playListSongs from "../../../../playListSongs.js"
import { loadSong } from "./loadSong.js"
import { playSong } from "./playSong.js"
import { playbackControl } from "./playbackControl.js";
import { count, setCount, decrementCount } from "./setCount.js";

export const prevSong = () => {
	document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	decrementCount()
	if (count < 0) {
		setCount(playListSongs.length - 1)
	}
	loadSong()
	playSong()
}

export const playClickedSong = (e) => {
	const songNum = parseInt(e.target.getAttribute('song_number'));
	if (!isNaN(songNum)) {
		if (count !== songNum) {
			document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
			setCount(songNum)
			loadSong();
			playSong();
		} else {
			playbackControl()
		}
	}
}