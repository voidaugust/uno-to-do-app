import { 
  deleteList, deleteTodo 
} from "./dataActionsCreator"
import { 
  setActiveListId, setActiveTaskId, 
  toggleShowingAllTasks, toggleShowingImportant 
} from "./todoListUIActionsCreator"
import { 
  saveSettings, toggleShowingUserPanel 
} from "./userPanelUIActionsCreator"

const saveSettingsAndCloseUserPanel = (payload) => {
  return (dispatch) => {
    dispatch(saveSettings(payload))
    dispatch(toggleShowingUserPanel())
  }
}

const showAllTasks = () => {
  return (dispatch) => {
    dispatch(toggleShowingAllTasks({ isShowingAllTasks: true }))
    dispatch(toggleShowingImportant({ isShowingImportant: false }))
    dispatch(setActiveListId({ listId: null }))
  }
}

const showImportantTasks = () => {
  return (dispatch) => {
    dispatch(toggleShowingImportant({ isShowingImportant: true }))
    dispatch(toggleShowingAllTasks({ isShowingAllTasks: false }))
    dispatch(setActiveListId({ listId: null }))
  }
}

const setAndShowActiveList = (payload) => {
  return (dispatch) => {
    dispatch(setActiveListId({ listId: payload.listId }))
    dispatch(toggleShowingImportant({ isShowingImportant: false }))
    dispatch(toggleShowingAllTasks({ isShowingAllTasks: false }))
  }
}

const confirmDeletingList = (payload) => {
  return (dispatch) => {
    dispatch(showAllTasks())
    dispatch(deleteList({ listId: payload.listId }))
  }
}

const confirmDeletingTodo = (payload) => {
  return (dispatch) => {
    dispatch(deleteTodo({ 
      listId: payload.listId,
      todoId: payload.todoId
    }))
    dispatch(setActiveTaskId({ id: null }))
  }
}

export {
  saveSettingsAndCloseUserPanel,
  showAllTasks,
  showImportantTasks,
  setAndShowActiveList,
  confirmDeletingList,
  confirmDeletingTodo
}