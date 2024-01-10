import { useContext } from "react"
import AppContext from "../../context/context"
import { useDispatch, useSelector } from "react-redux"
import { setCompleted, setImportant } from "../../store/actionCreators/dataActionsCreator"
import { CheckboxWithCustomBg, TaskContainer, TaskInfoContainer } from "../../ui/TaskItem/TaskItem"
import Container from "../../ui/Containers/Container"
import SquareIconButton from "../../ui/Button/SquareIconButton"
import Icon from "../../ui/Icons/Icon"
import { 
  importantIconFilled, 
  importantIconNotFilledOnLight,
  importantIconNotFilledOnDark
} from "../../ui/Icons/iconTypes"
import Text from "../../ui/Text/Text"
import taskDueDate from "./taskDueDate"

export default function Task(props) {
  const context = useContext(AppContext)
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const dispatch = useDispatch()
  
  const importantIconNotFilled = 
    context.mode === "light" 
      ? importantIconNotFilledOnLight 
      : importantIconNotFilledOnDark 
  const isImportant = props.isImportant ? importantIconFilled : importantIconNotFilled

  const onSetCompleted = (e) => {
    e.stopPropagation()
    dispatch(setCompleted({ 
      listId: props.listId,
      todoId: props.id
    }))
  }

  const onSetImportant = (e) => {
    e.stopPropagation()
    dispatch(setImportant({ 
      listId: props.listId,
      todoId: props.id
    }))
  }

  return (
    <TaskContainer 
      $modeBg $mode={context.mode} $activeTask={activeTaskId === props.id}
      id={props.id} onClick={() => props.setActive(props.id)}
    >
      <Container $direction="row" style={{ cursor: "pointer" }}>
        <SquareIconButton 
          $mode={context.mode}
          onClick={(e) => onSetCompleted(e)}
        >
          <CheckboxWithCustomBg 
            $mode={context.mode}
            checked={props.isCompleted}
            $isCompleted={props.isCompleted}
          />
        </SquareIconButton>

        <TaskInfoContainer>
          <Text $mode={context.mode}>
            {props.title}
          </Text>

          <Container $direction="row" $justifyContent="flex-start">
            {
              props.dueDate
                ? <SecondaryText $mode={context.mode}>
                  {taskDueDate(props.dueDate)}
                </SecondaryText>
                : undefined
            }

            {
              props.dueDate && props.note
                ? <SecondaryText $mode={context.mode}>
                  &nbsp;-&nbsp; 
                </SecondaryText>
                : undefined
            }

            {
              props.note
                ? <SecondaryText $mode={context.mode}>
                  {props.note}
                </SecondaryText>
                : undefined
            }
          </Container>

        </TaskInfoContainer>
      </Container>

      <SquareIconButton 
        $mode={context.mode}
        onClick={(e) => onSetImportant(e)}
      >
        <Icon $src={isImportant} $left="calc(50% - 12px)" />
      </SquareIconButton>

    </TaskContainer>
  )
}

const SecondaryText = ({ children }) => {
  const context = useContext(AppContext)
  return (
    <Text 
      $mode={context.mode}
      $size="14px"
      $secondary
    >
      {children}
    </Text>
  )
}