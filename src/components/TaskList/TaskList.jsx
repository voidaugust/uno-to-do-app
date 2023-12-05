import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import TaskListHeader from "./TaskListHeader"
import TaskListTabs from "./TaskListTabs"
import Tasks from "../Tasks/Tasks"
import Button from "../../ui/Button/Button"
import { toggleCreatingTodo } from "../../store/actionCreators/todoListUIActionsCreator"

export default function TaskList() {
  const context = useContext(AppContext)
  
  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearching = searchQuery !== ""
  const isUserListSelected = !isShowingAllTasks && !isShowingImportant && !isSearching

  const dispatch = useDispatch()

  return (
    <>
      <Container 
        $mode={context.mode} $height="100%"
        $alignItems="flex-start" $justifyContent="space-between"
      >
        <Container>
          <TaskListHeader />
          <TaskListTabs />
          <Tasks />
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