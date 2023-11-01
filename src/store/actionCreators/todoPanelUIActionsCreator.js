import {
  TOGGLE_TODO_TITLE_CHANGING,
  TOGGLE_DUE_DATE_CHANGING,
  TOGGLE_TODO_DELETING_CONFIRMATION
} from "../actions/todoPanelUIActions"

const toggleTodoTitleChanging = () => ({type: TOGGLE_TODO_TITLE_CHANGING})
const toggleDueDateChanging = () => ({type: TOGGLE_DUE_DATE_CHANGING})
const toggleTodoDeletingConfirmation = () => ({type: TOGGLE_TODO_DELETING_CONFIRMATION})

export {
  toggleTodoTitleChanging,
  toggleDueDateChanging,
  toggleTodoDeletingConfirmation
}