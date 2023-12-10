import { useDispatch, useSelector } from "react-redux"
import { useMemo, useRef } from "react"
import { 
  CREATE, RENAME, DELETE_LIST, 
  ADD, DELETE_TASK,
  IS_LOGOUTING
} from "./modalScenarios"
import { 
  addTodoToList, 
  changeListTitle,
  createList, 
  deleteList, 
  deleteTodo
} from "../../store/actionCreators/dataActionsCreator"
import { 
  setActiveTaskId,
  toggleCreatingList, 
  toggleCreatingTodo, 
  toggleDeletingList, 
  toggleRenamingList, 
  toggleShowingAllTasks
} from "../../store/actionCreators/todoListUIActionsCreator"
import { toggleIsLogouting } from "../../store/actionCreators/userPanelUIActionsCreator"
import { toggleTodoDeletingConfirmation } from "../../store/actionCreators/todoPanelUIActionsCreator"

export default function useModalData() {
  const isCreatingList = useSelector(store => store.todoListUI.creatingList)
  const isRenamingList = useSelector(store => store.todoListUI.renamingList)
  const isDeletingList = useSelector(store => store.todoListUI.deletingList)
  const isCreatingTodo = useSelector(store => store.todoListUI.creatingTodo)
  const isDeletingTodo = useSelector(store => store.todoPanelUI.isTodoDeletingConfirmation)
  const isLogouting = useSelector(store => store.userPanelUI.isLogouting)
  const isActionAvailable = 
    isCreatingList || isRenamingList || isDeletingList || 
    isCreatingTodo || isDeletingTodo || isLogouting
  
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const activeList = useSelector(store => store.data).find(list => list.id === activeListId)

  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const activeTask = tasks.find(task => task.id === activeTaskId)

  const dispatch = useDispatch()
  const inputRef = useRef(null)
  let textType
  let onAction
  let action
  let heading
  let description
  let abort

  if (isCreatingList) {
    onAction = () => {
      dispatch(createList({ 
        title: inputRef.current.value ? inputRef.current.value : "New List"
      }))
      onClose()
    }
    action = CREATE
    heading = "New list"
    description = "Enter list title"
    abort = () => dispatch(toggleCreatingList())
  }

  if (isRenamingList) {
    onAction = () => {
      dispatch(changeListTitle({ 
        listId: activeListId,
        listTitle: 
          inputRef.current.value !== ""
            ? inputRef.current.value
            : activeList.title
      }))
      onClose()
    }
    action = RENAME
    heading = "Rename list"
    description = "New title"
    abort = () => dispatch(toggleRenamingList())
  }

  if (isDeletingList) {
    onAction = () => {
      dispatch(toggleShowingAllTasks())
      dispatch(deleteList({ listId: activeListId }))
      onClose()
    }
    action = DELETE_LIST
    heading = "Are you sure?"
    description = "List will be permanently deleted"
    abort = () => dispatch(toggleDeletingList())
  }

  if (isCreatingTodo) {
    onAction = () => {
      dispatch(addTodoToList({ 
        listId: activeListId,
        todoTitle: inputRef.current.value ? inputRef.current.value : "Task"
      }))
      onClose()
    }
    action = ADD
    heading = "Add a task"
    description = "Add a task"
    abort = () => dispatch(toggleCreatingTodo())
  }

  if (isDeletingTodo) {
    onAction = () => {
      dispatch(deleteTodo({ 
        listId: activeTask.listId,
        todoId: activeTaskId
      }))
      dispatch(setActiveTaskId({ id: null }))
      onClose()
    }
    action = DELETE_TASK
    heading = "Are you sure?"
    description = "Task will be permanently deleted"
    abort = () => dispatch(toggleTodoDeletingConfirmation())
  }

  if (isLogouting) {
    onAction = () => onClose()
    action = IS_LOGOUTING
    heading = "Sign out"
    description = "Are you sure you would like to sign out?"
    abort = () => dispatch(toggleIsLogouting())
  }

  const onClose = () => isActionAvailable && abort()

  textType = 
    (action !== DELETE_LIST 
    && action !== DELETE_TASK 
    && action !== IS_LOGOUTING)
      ? "editable"
      : "uneditable"

  return {
    isActionAvailable, 
    inputRef,
    textType,
    onAction, 
    action, 
    heading,
    description,
    onClose
  }
}