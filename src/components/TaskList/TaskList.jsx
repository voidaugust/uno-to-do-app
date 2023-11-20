import { useContext, useMemo, useState } from "react"
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
const ALL_TASKS = "allTasks"
const IMPORTANT = "important"

export default function TaskList() {
  const context = useContext(AppContext)
  const taskLists = useSelector(store => store.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearchNotActive = searchQuery === ""

  // const allTasks = useMemo(() => taskLists.map(list => list.todos).flat(), [taskLists])
  // const importantTasks = useMemo(() => allTasks.filter(task => task.isImportant), [allTasks])

  const isAllTasksListSelected = activeListId === ALL_TASKS
  const isImportantTasksListSelected = activeListId === IMPORTANT
  const isUserListSelected = !isAllTasksListSelected && !isImportantTasksListSelected

  const dispatch = useDispatch()

  let activeListTitle 
  
  switch (activeListId) {
    case "important": 
      activeListTitle = "Important"
      break
    case "allTasks": 
      activeListTitle = "Tasks"
      break
    default: 
      activeListTitle = taskLists.find(list => list.id === activeListId).title
      break
  }

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
          <Tasks 
            // allTasks={allTasks}
            isAllTasksListSelected={isAllTasksListSelected}
            // importantTasks={importantTasks}
            isImportantTasksListSelected={isImportantTasksListSelected}
          />
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