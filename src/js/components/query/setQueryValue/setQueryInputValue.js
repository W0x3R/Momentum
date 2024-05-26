import { queryInput } from "../changePexelsImgOnQueryInputChange"
import { getStorageQueryInputValue } from "../localStorageQuery"

export const setQueryInputValue = () => queryInput.value = getStorageQueryInputValue()