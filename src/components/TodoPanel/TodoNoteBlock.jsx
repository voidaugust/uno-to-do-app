import { useContext, useRef } from "react"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Input from "../../ui/Input/Input"
import { changeTodoNote } from "../../store/actionCreators/dataActionsCreator"
import { useDispatch, useSelector } from "react-redux"
import { toggleNoteChanging } from "../../store/actionCreators/todoPanelUIActionsCreator"

export default function TodoNoteBlock({ activeTask }) {
  const context = useContext(AppContext)
  const todoNoteRef = useRef('')
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const dispatch = useDispatch()

  const setNote = (note) => dispatch(changeTodoNote({
    listId: activeListId,
    todoId: activeTask.id,
    todoNote: note 
  }))

  return (
    <Container 
      $direction="row" 
      $justifyContent="start"
      $width="100%"
      $cursor="pointer"
    >
      <Input 
        ref={todoNoteRef} 
        $mode={context.mode} $field
        placeholder="Add Note" value={activeTask.note}
        onChange={(e) => setNote(e.target.value)}
        onFocus={() => dispatch(toggleNoteChanging())}
        onBlur={() => dispatch(toggleNoteChanging())}
      />
    </Container>
  )
}