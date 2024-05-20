import { settingsShowInputs } from "../findCheckedSettingsInputs";
import { getStorageSettingsCheckedInputs } from "../localStorageSettings";

export const setSettingsCheckedInputsLoad = () => {
	const checkedItems = getStorageSettingsCheckedInputs()
	if (checkedItems) {
		checkedItems.map((e) => settingsShowInputs[e].checked = true)
	}
}