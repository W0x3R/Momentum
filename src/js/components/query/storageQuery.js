import { queryInput } from "./changePexelsImgOnQueryInputChange"

export const getStorageQueryInputValue = () => localStorage.getItem('queryInputValue')
export const setStorageQueryInputValue = () => localStorage.setItem('queryInputValue', (queryInput.value).trim())