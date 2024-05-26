export const settingsShowInputs = document.querySelectorAll('.settings__blocks-hide input')

export const findCheckedSettingsInputs = () => Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)