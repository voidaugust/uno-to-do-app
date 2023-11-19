import { useContext } from "react"
import AppContext from "../../context/context"
import TaskItem from "../../ui/TaskItem/TaskItem"

export default function Task() {
  const context = useContext(AppContext)
  
  return (
    <TaskItem 
      $mode={context.mode}
    />
  )
}