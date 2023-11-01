import {
  TOGGLE_CREATING_LIST,
  TOGGLE_RENAMING_LIST,
  TOGGLE_DELETING_LIST,
  TOGGLE_CREATING_TODO,
  TOGGLE_SHOWING_COMPLETED,
  TOGGLE_SHOWING_IMPORTANT,
  SET_ACTIVE_LIST_ID,
  SET_SEARCH_QUERY
} from "../actions/todoListUIActions"

const toggleCreatingList = () => ({type: TOGGLE_CREATING_LIST})
const toggleRenamingList = () => ({type: TOGGLE_RENAMING_LIST})
const toggleDeletingList = () => ({type: TOGGLE_DELETING_LIST})
const toggleCreatingTodo = () => ({type: TOGGLE_CREATING_TODO})
const toggleShowingCompleted = () => ({type: TOGGLE_SHOWING_COMPLETED})
const toggleShowingImportant = () => ({type: TOGGLE_SHOWING_IMPORTANT})
const setActiveListId = (payload) => ({type: SET_ACTIVE_LIST_ID, payload})
const setSearchQuery = (payload) => ({type: SET_SEARCH_QUERY, payload})

export {
  toggleCreatingList,
  toggleRenamingList,
  toggleDeletingList,
  toggleCreatingTodo,
  toggleShowingCompleted,
  toggleShowingImportant,
  setActiveListId,
  setSearchQuery
}