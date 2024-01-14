import {
  SET_ACTIVE_TASK_ID,
  TOGGLE_TODO_TITLE_CHANGING,
  TOGGLE_DUE_DATE_CHANGING,
  TOGGLE_TODO_NOTE_CHANGING,
  TOGGLE_TODO_DELETING_CONFIRMATION
} from "../actions/todoPanelUIActions"

const setActiveTaskId = (payload) => ({type: SET_ACTIVE_TASK_ID, payload})
const toggleTodoTitleChanging = () => ({type: TOGGLE_TODO_TITLE_CHANGING})
const toggleDueDateChanging = () => ({type: TOGGLE_DUE_DATE_CHANGING})
const toggleNoteChanging = () => ({type: TOGGLE_TODO_NOTE_CHANGING})
const toggleTodoDeletingConfirmation = () => ({type: TOGGLE_TODO_DELETING_CONFIRMATION})

export {
  setActiveTaskId,
  toggleTodoTitleChanging,
  toggleDueDateChanging,
  toggleNoteChanging,
  toggleTodoDeletingConfirmation
}