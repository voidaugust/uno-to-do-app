import { useContext } from "react"
import { useSelector } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import TaskListHeader from "./TaskListHeader"

export default function TaskList() {
  const context = useContext(AppContext)
  const taskLists = useSelector(store => store.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)

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

  return (
    <>
      <Container 
        $mode={context.mode}
        $alignItems="flex-start"
        $height="64px"
        $bgColor="transparent"
      >
        <TaskListHeader 
          activeListTitle={activeListTitle}
          searchQuery={searchQuery}
        />
      </Container>
    </>
  )
}