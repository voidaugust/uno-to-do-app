import todoPanelUIInitialState from "../initialStates/todoPanelUIInitialState"
import {
  TOGGLE_TODO_TITLE_CHANGING,
  TOGGLE_DUE_DATE_CHANGING,
  TOGGLE_TODO_DELETING_CONFIRMATION
} from "../actions/todoPanelUIActions"

export default function todoPanelUIReducer(state = todoPanelUIInitialState, { type }) {
  switch (type) {
    case TOGGLE_TODO_TITLE_CHANGING: return { 
      ...state, isTodoTitleChanging: !state.isTodoTitleChanging
    }

    case TOGGLE_DUE_DATE_CHANGING: return { 
      ...state, isDueDateChanging: !state.isDueDateChanging
    }

    case TOGGLE_TODO_DELETING_CONFIRMATION: return { 
      ...state, isTodoDeletingConfirmation: !state.isTodoDeletingConfirmation
    }

    default: return state
  }
}