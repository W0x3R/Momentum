import { queryInput } from "../changePexelsImgOnQueryInputChange"
import { getStorageQueryInputValue } from "../../slider/localStorageSlider"

export const setQueryInputValue = () => queryInput.value = getStorageQueryInputValue()