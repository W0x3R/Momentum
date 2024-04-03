import playListSongs from "../../../../playListSongs.js"
import { loadSong } from "./loadSong.js"
import { playSong, pauseSong, isPlay } from "./playSong.js"

export const trackName = document.querySelector('.player__track-name')
export const audio = document.querySelector('.player__audio')
export const volumeBtn = document.querySelector('.player__sounds-volume')
export const volumeMuteBtnIcon = document.querySelector(`.player__sounds-mute svg use`)

export let count = 0;

export const nextSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	count++
	if (count > playListSongs.length - 1) {
		count = 0;
	}
	loadSong()
	playSong()
}

export const prevSong = () => {
	let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
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
			let li = document.querySelectorAll('li')[count].classList.remove('player__list-item_active');
			count = songNum;
			loadSong();
			playSong();
		} else {
			if (isPlay) {
				pauseSong();
			} else {
				playSong();
			}
		}
	}
}