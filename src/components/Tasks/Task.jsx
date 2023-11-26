import { useContext } from "react"
import AppContext from "../../context/context"
import { useDispatch, useSelector } from "react-redux"
import { setCompleted, setImportant } from "../../store/actionCreators/dataActionsCreator"
import { Checkbox, TaskContainer, TaskInfoContainer } from "../../ui/TaskItem/TaskItem"
import Container from "../../ui/Containers/Container"
import SquareIconButton from "../../ui/Button/SquareIconButton"
import Icon from "../../ui/Icons/Icon"
import { importantIconFilled, importantIconNotFilled } from "../../ui/Icons/iconTypes"
import Text from "../../ui/Text/Text"

export default function Task(props) {
  const context = useContext(AppContext)
  const dispatch = useDispatch()
  
  const isImportant = props.isImportant ? importantIconFilled : importantIconNotFilled

  const onSetCompleted = () => dispatch(setCompleted({ 
    listId: props.listId,
    todoId: props.id
  }))

  const onSetImportant = () => dispatch(setImportant({ 
    listId: props.listId,
    todoId: props.id
  }))

  return (
    <TaskContainer $modeBg $mode={context.mode} id={props.id}>
      <Container $direction="row">
        <SquareIconButton 
          $mode={context.mode}
          onClick={onSetCompleted}
        >
          <Checkbox 
            $mode={context.mode}
            readOnly={true}
            checked={props.isCompleted}
          />
        </SquareIconButton>

        <TaskInfoContainer>
          <Text $mode={context.mode}>
            {props.title}
          </Text>
        </TaskInfoContainer>
      </Container>

      <SquareIconButton 
        $mode={context.mode}
        onClick={onSetImportant}
      >
        <Icon $src={isImportant} $left="calc(50% - 12px)" />
      </SquareIconButton>

    </TaskContainer>
  )
}