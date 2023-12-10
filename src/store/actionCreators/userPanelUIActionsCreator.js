import { TOGGLE_SHOWING_USER_PANEL, TOGGLE_IS_LOGOUTING, SAVE_SETTINGS } from "../actions/userPanelUIActions"

const toggleShowingUserPanel = () => ({type: TOGGLE_SHOWING_USER_PANEL})
const toggleIsLogouting = () => ({type: TOGGLE_IS_LOGOUTING})
const saveSettings = (payload) => ({type: SAVE_SETTINGS, payload})

export { toggleShowingUserPanel, toggleIsLogouting, saveSettings }