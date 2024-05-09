import { rotateQuotesChangeBtn } from "../quotes/rotateQuotesChangeBtn"
import { setStorageCheckedItems } from "../settings/localStorageSettingsShow"
import { setCheckedInputsClick } from "../settings/setCheckedInputsClick"
import { hideCheckedBlocksClick } from "../settings/hideCheckedBlocksClick"
import { clearGreetingsName } from "../greeting/clearGreetingsName"
import { controlErrorPopupClass } from "../slider/controlErrorPopupClass"
import { playbackControl } from "../player/playbackControl"
import { prevSong, playClickedSong } from "../player/switchSong"
import { nextSong } from "../player/nextSong"
import { rewindSong } from "../player/updateProgressBar"
import { changePexelsImagesClick } from "../slider/changePexelsImages"
import { changeGithubImagesClick } from "../slider/changeGithubImages"
import { checkIsMute } from "../player/volume"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { displaySettings } from "../settings/displaySettings"
import { changeQuote } from "../quotes/changeQuote"

export const clickEvents = {
	'.main__button_prev': () => {
		changeGithubImagesClick('prev')
		changePexelsImagesClick('prev')
	},
	'.main__button_next': () => {
		changeGithubImagesClick('next')
		changePexelsImagesClick('next')
	},
	'.player__controls-play': playbackControl,
	'.player__progress': (e) => rewindSong(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': () => {
		controlErrorPopupClass('remove')
	},
	'.popup__shadow_show-slider': () => {
		controlErrorPopupClass('remove')
	},
	'.settings__icon': () => {
		setSettingsActiveStyles('toggle'),
			displaySettings('toggle')
	},
	'.settings__close-button': () => {
		displaySettings('remove'),
			setSettingsActiveStyles('remove')
	},
	'.quotes__change-btn': () => {
		changeQuote()
		rotateQuotesChangeBtn()
	},
	'.settings__show': (e) => {
		setCheckedInputsClick(e)
		hideCheckedBlocksClick(e)
		setStorageCheckedItems()
	},
	'.greeting__name': clearGreetingsName
}