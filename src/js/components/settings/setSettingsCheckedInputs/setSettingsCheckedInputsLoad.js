import { settingsShowInputs } from "../checkedSettingsInputsFinder";
import { getStorageSettingsCheckedInputs } from "../settingsStorage";

export const setSettingsCheckedInputsLoad = () => {
	const settingsCheckedInputs = getStorageSettingsCheckedInputs()
	if (settingsCheckedInputs) {
		settingsCheckedInputs.map((e) => settingsShowInputs[e].checked = true)
	}
}