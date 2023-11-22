import { useSelector } from "react-redux"
import Container from "../../ui/Containers/Container"
import Task from "./Task"
import { useMemo } from "react"

const ALL_TASKS = "allTasks"

export default function Tasks() {
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const taskLists = useSelector(store => store.data)
  const activeList = taskLists.find(list => list.id === activeListId)

  const isAllTasksListSelected = activeListId === ALL_TASKS
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)

  const allTasks = useMemo(() => taskLists.map(list => list.todos).flat(), [taskLists])
  const importantTasks = useMemo(() => allTasks.filter(task => task.isImportant), [allTasks])
  
  let tasks
  if (isAllTasksListSelected) tasks = allTasks
  else if (isShowingImportant) tasks = importantTasks
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