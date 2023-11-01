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
      language: (state.language === payload.language) ? state.language : payload.language,
      palette: (state.palette === payload.palette) ? state.palette : payload.palette,
      mode: (state.mode === payload.mode) ? state.mode : payload.mode
    }

    default: try {  
      return state
    } catch {
      throw new Error("invalid action type: " + type)
    }
  }
}