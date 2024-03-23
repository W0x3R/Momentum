import playListSongs from "../../../../playListSongs"

const playList = document.querySelector('.player__list')

export const createPlayList = () => {
	playListSongs.forEach((e, i) => {
		const li = document.createElement('li')
		li.classList.add('player__list-item')
		li.textContent = e.title
		li.setAttribute('datanumber', i)
		playList.append(li)
	})
}