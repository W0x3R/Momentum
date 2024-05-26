import { languageSelect } from "./setSelectedLanguageValue"

export const getStorageLanguage = () => localStorage.getItem('language') || 'en'

export const setStorageLanguage = () => localStorage.setItem('language', languageSelect.value)