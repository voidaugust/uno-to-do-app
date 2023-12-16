import { useContext } from "react"
import { useDispatch } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Text from "../../ui/Text/Text"
import Icon from "../../ui/Icons/Icon"
import { Checkbox } from "../../ui/TaskItem/TaskItem"
import SquareIconButton from "../../ui/Button/SquareIconButton"
import { 
  importantIconFilled, 
  importantIconNotFilledOnLight,
  importantIconNotFilledOnDark
} from "../../ui/Icons/iconTypes"
import { setCompleted, setImportant } from "../../store/actionCreators/dataActionsCreator"

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
          readOnly={true}
          checked={activeTask.isCompleted}
        />
      </SquareIconButton>
      
      <Text $weight="400" $mode={context.mode}>
        {activeTask.title}
      </Text>

      <SquareIconButton 
        $mode={context.mode}
        onClick={onSetImportant}
      >
        <Icon $src={isImportant} $left="calc(50% - 12px)" />
      </SquareIconButton>
    </Container>
  )
}