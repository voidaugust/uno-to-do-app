import todoPanelUIInitialState from "../initialStates/todoPanelUIInitialState"
import {
  TOGGLE_TODO_TITLE_CHANGING,
  TOGGLE_DUE_DATE_CHANGING,
  TOGGLE_TODO_NOTE_CHANGING,
  TOGGLE_TODO_DELETING_CONFIRMATION,
  SET_ACTIVE_TASK_ID
} from "../actions/todoPanelUIActions"

export default function todoPanelUIReducer(state = todoPanelUIInitialState, { type, payload }) {
  switch (type) {
    case SET_ACTIVE_TASK_ID: return { 
      ...state, 
      activeTaskId: payload.id 
    }

    case TOGGLE_TODO_TITLE_CHANGING: return { 
      ...state, isTodoTitleChanging: !state.isTodoTitleChanging
    }

    case TOGGLE_DUE_DATE_CHANGING: return { 
      ...state, isDueDateChanging: !state.isDueDateChanging
    }

    case TOGGLE_TODO_NOTE_CHANGING: return { 
      ...state, isNoteChanging: !state.isNoteChanging
    }

    case TOGGLE_TODO_DELETING_CONFIRMATION: return { 
      ...state, isTodoDeletingConfirmation: !state.isTodoDeletingConfirmation
    }

    default: return state
  }
}