import { setQuotesActiveStyles } from "../quotes/setQuotesActiveStyles"
import { setStorageCheckedItems } from "../settings/localStorageSettingsShow"
import { setCheckedInputsClick } from "../settings/setCheckedInputsClick"
import { hideCheckedBlocksClick } from "../settings/hideCheckedBlocksClick"
import { clearGreetingsName } from "../greeting/clearGreetingsName"
import { setErrorPopupClass } from "../slider/setErrorPopupClass"
import { checkFlagSong } from "../player/playSong"
import { prevSong, playClickedSong, nextSong } from "../player/switchSong"
import { rewindSong } from "../player/updateProgressBar"
import { rotateIcon, selectLanguageInner, selectImagesSrcWrapper } from "../transformIcons/transformIcons"
import { changeBGOnClick } from "../slider/changeBG"
import { checkIsMute } from "../player/volume"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { displaySettings } from "../settings/displaySettings"
import { changeQuote } from "../quotes/changeQuote"

export const clickEvents = {
	'.main__button_prev': () => changeBGOnClick('prev'),
	'.main__button_next': () => changeBGOnClick('next'),
	'.language__inner': () => rotateIcon(selectLanguageInner, 'language__select_open'),
	'.source': () => rotateIcon(selectImagesSrcWrapper, 'source__select_open'),
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => rewindSong(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': () => {
		setErrorPopupClass('remove')
	},
	'.popup__shadow_show-slider': () => {
		setErrorPopupClass('remove')
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
		setQuotesActiveStyles()
	},
	'.settings__show': (e) => {
		setCheckedInputsClick(e)
		hideCheckedBlocksClick(e)
		setStorageCheckedItems()
	},
	'.greeting__name': clearGreetingsName
}