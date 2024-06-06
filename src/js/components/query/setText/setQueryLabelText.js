import { queryLabelText } from "./queryLabelText"

const queryLabel = document.querySelector('.settings__query-label')

export const setQueryLabelText = (lang) => queryLabel.textContent = queryLabelText[lang]