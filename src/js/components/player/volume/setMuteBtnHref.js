const volumeMuteBtnIcon = document.querySelector(`.player__sounds-mute svg use`)

export const setMuteBtnHref = (iconName) => {
	volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)
}