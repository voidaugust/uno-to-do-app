import { useSelector } from "react-redux"
import Container from "../../ui/Containers/Container"
import Task from "./Task"
import { useMemo } from "react"

export default function Tasks({ 
  isAllTasksListSelected,
  isImportantTasksListSelected // ! redo using store
}) {
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const taskLists = useSelector(store => store.data)
  const activeList = taskLists.find(list => list.id === activeListId)
  const importantTasks = 1

  const allTasks = useMemo(() => taskLists.map(list => list.todos).flat(), [taskLists])
  
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