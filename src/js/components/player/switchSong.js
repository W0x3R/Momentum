import playListSongs from "../../../../playListSongs.js"
import { loadSong } from "./loadSong.js"
import { playSong, checkFlagSong } from "./playSong.js"

export let count = 0;

export const nextSong = () => {
	document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count++
	if (count > playListSongs.length - 1) {
		count = 0;
	}
	loadSong()
	playSong()
}

export const prevSong = () => {
	document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count--
	if (count < 0) {
		count = playListSongs.length - 1
	}
	loadSong()
	playSong()
}

export const playClickedSong = (e) => {
	const songNum = parseInt(e.target.getAttribute('song_number'));
	if (!isNaN(songNum)) {
		if (count !== songNum) {
			document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
			count = songNum;
			loadSong();
			playSong();
		} else {
			checkFlagSong()
		}
	}
}