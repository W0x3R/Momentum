import { getStorageLanguage } from "../language/localStorageLanguage";
import { setSettingsTitleText } from "./setSettingsTitleText";

export const changeSettingsTitleText = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setSettingsTitleText('en') : setSettingsTitleText('ru')
}