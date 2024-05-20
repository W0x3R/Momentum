import { settingsShowInputs, getStorageSettingsCheckedInputs } from "../localStorageSettingsShow";

export const setCheckedInputsLoad = () => {
	const checkedItems = getStorageSettingsCheckedInputs()
	if (checkedItems) {
		checkedItems.map((e) => settingsShowInputs[e].checked = true)
	}
}

