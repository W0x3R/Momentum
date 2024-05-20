const volumeMuteBtnIcon = document.querySelector(`.player__volume-mute svg use`)

export const setMuteBtnHref = (iconName) => volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)