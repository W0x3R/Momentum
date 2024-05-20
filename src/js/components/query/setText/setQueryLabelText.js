import { queryLabelText } from "./queryLabelText"

const queryLabel = document.querySelector('.query__label')

export const setQueryLabelText = (lang) => queryLabel.textContent = queryLabelText[lang]