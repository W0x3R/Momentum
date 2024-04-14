import { settingsShowInputs, getStorageCheckedItems } from "./localStorageSettingsShow";

export const setCheckedInputsLoad = () => {
	const checkedItems = getStorageCheckedItems()
	if (checkedItems) {
		for (let i = 0; i < checkedItems.length; i++) {
			settingsShowInputs[checkedItems[i]].checked = true;
		}
	}
}