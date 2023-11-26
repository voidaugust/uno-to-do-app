import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import TaskListHeader from "./TaskListHeader"
import TaskListTabs from "./TaskListTabs"
import Tasks from "../Tasks/Tasks"
import Button from "../../ui/Button/Button"
import { toggleCreatingTodo } from "../../store/actionCreators/todoListUIActionsCreator"

const TAB_TODO = "tab-todo"
const TAB_COMPLETED = "tab-completed"

export default function TaskList() {
  const context = useContext(AppContext)
  const taskLists = useSelector(store => store.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  
  const isSearchNotActive = searchQuery === ""
  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  const isUserListSelected = !isShowingAllTasks && !isShowingImportant

  const dispatch = useDispatch()

  let activeListTitle 
  if (isShowingAllTasks) activeListTitle = "Tasks"
  else if (isShowingImportant) activeListTitle = "Important"
  else activeListTitle = taskLists.find(list => list.id === activeListId).title

  const [activeTab, setActiveTab] = useState(TAB_TODO)
  const setTodoTabActive = () => setActiveTab(TAB_TODO)
  const setCompletedTabActive = () => setActiveTab(TAB_COMPLETED)

  return (
    <>
      <Container 
        $mode={context.mode} $height="100%"
        $alignItems="flex-start" $justifyContent="space-between"
      >
        <Container>
          <TaskListHeader 
            activeListTitle={activeListTitle}
            isSearchNotActive={isSearchNotActive}
          />
          <TaskListTabs 
            activeTab={activeTab}
            setTodoTabActive={setTodoTabActive}
            setCompletedTabActive={setCompletedTabActive}
            isSearchNotActive={isSearchNotActive}
          />
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