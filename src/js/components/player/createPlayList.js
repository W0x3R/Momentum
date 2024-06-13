import playListSongs from "../../../../playListSongs"
import { sliceSongTitleLength } from "./sliceSongTitleLength"

const playList = document.querySelector('.player__list')

export const createPlayList = () => {
	playListSongs.forEach((e, i) => {
		const li = document.createElement('li')
		const songTitleSlicedText = sliceSongTitleLength(e)
		li.classList.add('player__list-item')
		li.textContent = songTitleSlicedText
		li.setAttribute('song_number', i)
		playList.append(li)
	})
}