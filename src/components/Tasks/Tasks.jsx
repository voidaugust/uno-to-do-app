import { useSelector } from "react-redux"
import Container from "../../ui/Containers/Container"
import Task from "./Task"

export default function Tasks({ 
  allTasks, isAllTasksListSelected,
  importantTasks, isImportantTasksListSelected
}) {
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const activeList = useSelector(store => store.data).find(list => list.id === activeListId)
  
  let tasks
  if (isAllTasksListSelected) tasks = allTasks
  else if (isImportantTasksListSelected) tasks = importantTasks
  else tasks = activeList.todos

  return (
    tasks.length > 0 
      ? <Container as="ul" $marginBlock="10px 0" $gap="5px">
        {
          tasks.map(task => (
            <Task 
              key={task.id} id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              isImportant={task.isImportant}
              createdDate={task.createdDate}
              dueDate={task.dueDate}
            />
          ))
        }
      </Container> 
      : undefined
  )
}