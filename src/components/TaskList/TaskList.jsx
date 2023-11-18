import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import TaskListHeader from "./TaskListHeader"
import TaskListTabs from "./TaskListTabs"

const TAB_TODO = "tab-todo"
const TAB_COMPLETED = "tab-completed"

export default function TaskList() {
  const context = useContext(AppContext)
  const taskLists = useSelector(store => store.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearchNotActive = searchQuery === ""

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
      <Container $mode={context.mode} $alignItems="flex-start">
        <TaskListHeader // paddings/margins/height issues here
          activeListTitle={activeListTitle}
          isSearchNotActive={isSearchNotActive}
        />
        <TaskListTabs 
          activeTab={activeTab}
          setTodoTabActive={setTodoTabActive}
          setCompletedTabActive={setCompletedTabActive}
          isSearchNotActive={isSearchNotActive}
        />
      </Container>
    </>
  )
}