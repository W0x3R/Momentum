import playListSongs from "../../../../playListSongs"
import { playList } from "./switchSong"

export const createPlayList = () => {
	playListSongs.forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('datanumber', i)
		playList.append(li)
	})
}

