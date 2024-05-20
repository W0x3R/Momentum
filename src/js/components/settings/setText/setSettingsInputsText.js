import { settingsInputsText } from "./settingsInputsText"

const settingsInputsTitles = document.querySelectorAll('.settings__blocks-hide p')

export const setSettingsInputsText = (lang) => {
	settingsInputsTitles.forEach((e, i) => {
		e.textContent = settingsInputsText[lang][i]
	})
}