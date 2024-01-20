import { useContext } from "react"
import { useDispatch } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Container"
import Icon from "../../ui/Icons/Icon"
import { Checkbox } from "../../ui/TaskItem"
import SquareIconButton from "../../ui/Buttons/SquareIconButton"
import { 
  importantIconFilled, 
  importantIconNotFilledOnLight,
  importantIconNotFilledOnDark
} from "../../ui/Icons/iconTypes"
import { changeTodoTitle, setCompleted, setImportant } from "../../store/actionCreators/dataActionsCreator"
import { toggleTodoTitleChanging } from "../../store/actionCreators/todoPanelUIActionsCreator"
import Input from "../../ui/Input"

export default function TodoPanelHeader({ activeTask }) {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  const onSetCompleted = () => dispatch(setCompleted({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))
  const onSetImportant = () => dispatch(setImportant({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))
  const changeTitle = (title) => dispatch(changeTodoTitle({
    listId: activeTask.listId,
    todoId: activeTask.id,
    todoTitle: title 
  }))

  const importantIconNotFilled = 
    context.mode === "light" 
      ? importantIconNotFilledOnLight 
      : importantIconNotFilledOnDark 
  const isImportant = activeTask.isImportant ? importantIconFilled : importantIconNotFilled

  return (
    <Container $direction="row" $justifyContent="space-between">
      <SquareIconButton 
        $mode={context.mode}
        onClick={onSetCompleted}
      >
        <Checkbox 
          $mode={context.mode}
          checked={activeTask.isCompleted}
          $isCompleted={activeTask.isCompleted}
        />
      </SquareIconButton>

      <Input 
        $mode={context.mode} $field $center $size="22px"
        value={activeTask.title}
        onChange={(e) => changeTitle(e.target.value)}
        onFocus={() => dispatch(toggleTodoTitleChanging())}
        onBlur={() => dispatch(toggleTodoTitleChanging())}
      />

      <SquareIconButton 
        $mode={context.mode}
        onClick={onSetImportant}
      >
        <Icon $src={isImportant} $left="calc(50% - 12px)" />
      </SquareIconButton>
    </Container>
  )
}