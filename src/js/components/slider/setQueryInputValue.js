import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { getStorageQueryInputValue } from "./localStorageSlider"

export const setQueryInputValue = () => {
	queryInput.value = getStorageQueryInputValue()
}