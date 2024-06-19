import muteSongIcon from '../../../../images/svg/muteSongBtn.svg'
import unMuteSongIcon from '../../../../images/svg/unMuteSongBtn.svg'

export const muteSongBtn = muteSongIcon
export const unMuteSongBtn = unMuteSongIcon
const volumeMuteBtnIcon = document.querySelector(`.player__volume-mute svg use`)

export const setMuteBtnHref = (icon, id) => volumeMuteBtnIcon.setAttribute('href', `${icon}#${id}`)