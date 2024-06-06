import { getStorageLanguage } from "./languageStorage"
import { settingsLanguageInner } from "../settings/closeSettingsIcon"

export const changeLanguageIcon = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		settingsLanguageInner.classList.remove('settings__language-inner_ru')
		settingsLanguageInner.classList.add('settings__language-inner_en')
	}
	else if (currLang === 'ru') {
		settingsLanguageInner.classList.remove('settings__language-inner_en')
		settingsLanguageInner.classList.add('settings__language-inner_ru')
	}
}