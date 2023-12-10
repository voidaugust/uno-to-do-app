import { saveSettings, toggleShowingUserPanel } from "./userPanelUIActionsCreator"

const saveSettingsAndCloseUserPanel = (payload) => {
  return (dispatch) => {
    dispatch(saveSettings(payload))
    dispatch(toggleShowingUserPanel())
  }
}

// 5–6 more of these!

export {
  saveSettingsAndCloseUserPanel,
}