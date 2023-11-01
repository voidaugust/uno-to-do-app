import { 
  CREATE_LIST, 
  DELETE_LIST, 
  CHANGE_LIST_TITLE, 
  ADD_TODO_TO_LIST 
} from "../actions/listsDataActions"
import { 
  CHANGE_TODO_TITLE, 
  CHANGE_TODO_NOTE, 
  CHANGE_DUE_DATE, 
  SET_COMPLETED, 
  SET_IMPORTANT, 
  DELETE_TODO 
} from "../actions/todosDataActions"

const createList = (payload) => ({type: CREATE_LIST, payload})
const deleteList = (payload) => ({type: DELETE_LIST, payload})
const changeListTitle = (payload) => ({type: CHANGE_LIST_TITLE, payload})
const addTodoToList = (payload) => ({type: ADD_TODO_TO_LIST, payload})

const changeTodoTitle = (payload) => ({type: CHANGE_TODO_TITLE, payload})
const changeTodoNote = (payload) => ({type: CHANGE_TODO_NOTE, payload})
const changeDueDate = (payload) => ({type: CHANGE_DUE_DATE, payload})
const setCompleted = (payload) => ({type: SET_COMPLETED, payload})
const setImportant = (payload) => ({type: SET_IMPORTANT, payload})
const deleteTodo = (payload) => ({type: DELETE_TODO, payload})

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