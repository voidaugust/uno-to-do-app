import {
  TOGGLE_CREATING_LIST,
  TOGGLE_RENAMING_LIST,
  TOGGLE_DELETING_LIST,
  TOGGLE_CREATING_TODO,
  TOGGLE_SHOWING_COMPLETED,
  TOGGLE_SHOWING_ALL_TASKS,
  TOGGLE_SHOWING_IMPORTANT,
  SET_ACTIVE_LIST_ID,
  SET_ACTIVE_TASK_ID,
  SET_SEARCH_QUERY
} from "../actions/todoListUIActions"

const toggleCreatingList = () => ({type: TOGGLE_CREATING_LIST})
const toggleRenamingList = () => ({type: TOGGLE_RENAMING_LIST})
const toggleDeletingList = () => ({type: TOGGLE_DELETING_LIST})
const toggleCreatingTodo = () => ({type: TOGGLE_CREATING_TODO})
const toggleShowingCompleted = (payload) => ({type: TOGGLE_SHOWING_COMPLETED, payload})
const toggleShowingAllTasks = (payload) => ({type: TOGGLE_SHOWING_ALL_TASKS, payload})
const toggleShowingImportant = (payload) => ({type: TOGGLE_SHOWING_IMPORTANT, payload})
const setActiveListId = (payload) => ({type: SET_ACTIVE_LIST_ID, payload})
const setActiveTaskId = (payload) => ({type: SET_ACTIVE_TASK_ID, payload})
const setSearchQuery = (payload) => ({type: SET_SEARCH_QUERY, payload})

export {
  toggleCreatingList,
  toggleRenamingList,
  toggleDeletingList,
  toggleCreatingTodo,
  toggleShowingCompleted,
  toggleShowingAllTasks,
  toggleShowingImportant,
  setActiveListId,
  setActiveTaskId,
  setSearchQuery
}