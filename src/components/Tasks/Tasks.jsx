import { useDispatch, useSelector } from "react-redux"
import Container from "../../ui/Containers/Container"
import Task from "./Task"
import { useMemo } from "react"
import { setActiveTaskId } from "../../store/actionCreators/todoListUIActionsCreator/"

export default function Tasks() {
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const taskLists = useSelector(store => store.data)
  const activeList = taskLists.find(list => list.id === activeListId)

  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearching = searchQuery !== ""

  const allTasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const importantTasks = useMemo(() => allTasks.filter(task => task.isImportant), [allTasks])
  const searchedTasks = useMemo(() => allTasks.filter(
    task => task.title.toLowerCase().includes(searchQuery.toLowerCase())
  ), [allTasks, searchQuery])

  const dispatch = useDispatch()
  const setActiveTask = (id) => dispatch(setActiveTaskId({ id }))

  let tasks

  if (isSearching) tasks = searchedTasks
  else if (isShowingAllTasks) tasks = allTasks
  else if (isShowingImportant) tasks = importantTasks
  else tasks = activeList.todos

  return (
    tasks.length > 0 
      ? <Container 
        as="ul" $marginBlock="10px 0" $gap="5px" $height="100%"
      >
        {
          tasks.map(task => (
            <Task 
              key={task.id} title={task.title} 
              id={task.id} listId={task.listId}
              isCompleted={task.isCompleted}
              isImportant={task.isImportant}
              createdDate={task.createdDate}
              dueDate={task.dueDate}
              setActive={setActiveTask}
            />
          ))
        }
      </Container> 
      : undefined
  )
}