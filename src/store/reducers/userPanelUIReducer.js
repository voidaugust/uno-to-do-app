import { TOGGLE_SHOWING_USER_PANEL, TOGGLE_IS_LOGOUTING, SAVE_SETTINGS } from "../actions/userPanelUIActions"
import userPanelUIInitialState from "../initialStates/userPanelUIInitialState"

export default function userPanelUIReducer(state = userPanelUIInitialState, {type, payload}) {
  switch (type) {
    case TOGGLE_SHOWING_USER_PANEL: return { 
      ...state, isShowingUserPanel: !state.isShowingUserPanel
    }

    case TOGGLE_IS_LOGOUTING: return { 
      ...state, isLogouting: !state.isLogouting
    }
    
    case SAVE_SETTINGS: return { 
      ...state,
      language: payload.language,
      palette: payload.palette,
      mode: payload.mode
    }

    default: return state
  }
}