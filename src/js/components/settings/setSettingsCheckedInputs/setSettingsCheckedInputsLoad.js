import { settingsShowInputs } from "../findCheckedSettingsInputs";
import { getStorageSettingsCheckedInputs } from "../settingsStorage";

export const setSettingsCheckedInputsLoad = () => {
	const settingsCheckedInputs = getStorageSettingsCheckedInputs()
	if (settingsCheckedInputs) {
		settingsCheckedInputs.map((e) => settingsShowInputs[e].checked = true)
	}
}