import { useContext } from "react"
import AppContext from "../../context/context"
import { useSelector } from "react-redux"
import Container from "../../ui/Containers/Container"
import Task from "./Task"

export default function Tasks() {
  const context = useContext(AppContext)
  const activeListId = useSelector(store => store.todoListUI.activeListId)

  return (
    <Container as="ul" $marginBlock="10px 0" $gap="5px">
      <Task />
      <Task />
    </Container>
  )
}