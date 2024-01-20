import { useSelector } from "react-redux"
import NoTasks from "../Tasks/NoTasks"
import Tasks from "../Tasks/Tasks"

export default function SelectedTasks({
  noTasksFound, noImportantTasks
}) {
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isNotSearching = searchQuery === ""
  
  return (
    <>
      {
        noTasksFound 
          ? <NoTasks
              heading="Task not found"
              text="We searched high and low but couldn't find what you're looking for"
            /> 
          : noImportantTasks && isNotSearching
            ? <NoTasks
                heading="Important Tasks"
                text="Try starring some tasks to see them here"
              /> 
            : <Tasks />
      }
    </>
  )
}