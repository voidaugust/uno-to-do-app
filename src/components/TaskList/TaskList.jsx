import { useContext, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import TaskListHeader from "./TaskListHeader"
import TaskListTabs from "./TaskListTabs"
import Tasks from "../Tasks/Tasks"
import Button from "../../ui/Button/Button"
import { toggleCreatingTodo } from "../../store/actionCreators/todoListUIActionsCreator"
import { setActiveTaskId } from "../../store/actionCreators/todoPanelUIActionsCreator"
import TasksNotFound from "../Tasks/TasksNotFound"

export default function TaskList() {
  const context = useContext(AppContext)

  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearching = searchQuery !== ""
  const isUserListSelected = !isShowingAllTasks && !isShowingImportant && !isSearching
  
  const taskLists = useSelector(store => store.data)
  const allTasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const searchedTasks = useMemo(() => allTasks.filter(
    task => task.title.toLowerCase().includes(searchQuery.toLowerCase())
  ), [allTasks, searchQuery])
  const noTasksFound = isSearching && searchedTasks.length === 0

  const dispatch = useDispatch()
  const unsetActiveTask = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) dispatch(setActiveTaskId({ id: null }))
  }

  return (
    <>
      <Container 
        $mode={context.mode} $height="100%"
        $alignItems="flex-start" $justifyContent="space-between"
        onClick={(e) => unsetActiveTask(e)}
      >
        <Container>
          <TaskListHeader />
          {isUserListSelected ? <TaskListTabs /> : undefined}
          {noTasksFound ? <TasksNotFound /> : <Tasks />}
        </Container>

        {isUserListSelected 
          ? <Button 
            $add $alignLeft $opaque
            $width="100%" $mode={context.mode}
            onClick={() => dispatch(toggleCreatingTodo())}
          >
            Add a task
          </Button>
          : undefined
        }
      </Container>
    </>
  )
}