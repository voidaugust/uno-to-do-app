import { useContext } from "react"
import AppContext from "../../context/context"
import ListItem from "../../ui/ListItem"
import { useDispatch, useSelector } from "react-redux"
import { showAllTasks, showImportantTasks } from '../../store/actionCreators/thunks'

export default function ImportantAndAllTasksSelector() {
  const context = useContext(AppContext)
  const IMPORTANT = "important"
  const ALL_TASKS = "allTasks"

  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  const dispatch = useDispatch()

  return (
    <>
      <ListItem 
        key={IMPORTANT} $listType={IMPORTANT} 
        $mode={context.mode} $active={isShowingImportant}
        onClick={() => dispatch(showImportantTasks())}
      />

      <ListItem
        key={ALL_TASKS} $listType={ALL_TASKS} 
        $mode={context.mode} $active={isShowingAllTasks}
        onClick={() => dispatch(showAllTasks())}
      />
    </>
  )
}