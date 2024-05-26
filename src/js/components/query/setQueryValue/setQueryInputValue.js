import { queryInput } from "../changePexelsImgOnQueryInputChange"
import { getStorageQueryInputValue } from "../storageQuery"

export const setQueryInputValue = () => queryInput.value = getStorageQueryInputValue()