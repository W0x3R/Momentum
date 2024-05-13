import { settingsShowInputs, getStorageCheckedItems } from "./localStorageSettingsShow";

export const setCheckedInputsLoad = () => {
	const checkedItems = getStorageCheckedItems()
	if (checkedItems) {
		checkedItems.map((e) => settingsShowInputs[e].checked = true)
	}
}

