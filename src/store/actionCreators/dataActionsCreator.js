import { CREATE_LIST, DELETE_LIST, CHANGE_LIST_TITLE, ADD_TODO_TO_LIST } from "../actions/listsDataActions"
import { CHANGE_TODO_TITLE, CHANGE_TODO_NOTE, CHANGE_DUE_DATE, SET_COMPLETED, SET_IMPORTANT, DELETE_TODO } from "../actions/todosDataActions"

const createList = () => ({type: CREATE_LIST})
const deleteList = () => ({type: DELETE_LIST})
const changeListTitle = () => ({type: CHANGE_LIST_TITLE})
const addTodoToList = () => ({type: ADD_TODO_TO_LIST})

const changeTodoTitle = () => ({type: CHANGE_TODO_TITLE})
const changeTodoNote = () => ({type: CHANGE_TODO_NOTE})
const changeDueDate = () => ({type: CHANGE_DUE_DATE})
const setCompleted = () => ({type: SET_COMPLETED})
const setImportant = () => ({type: SET_IMPORTANT})
const deleteTodo = () => ({type: DELETE_TODO})

export { 
  createList,
  deleteList,
  changeListTitle,
  addTodoToList,
  changeTodoTitle,
  changeTodoNote,
  changeDueDate,
  setCompleted,
  setImportant,
  deleteTodo
}