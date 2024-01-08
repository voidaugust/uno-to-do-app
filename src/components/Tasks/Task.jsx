import { useContext } from "react"
import AppContext from "../../context/context"
import { useDispatch } from "react-redux"
import { setCompleted, setImportant } from "../../store/actionCreators/dataActionsCreator"
import { Checkbox, TaskContainer, TaskInfoContainer } from "../../ui/TaskItem/TaskItem"
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

  // let dueDate
  // const today = new Date()
  // let tomorrow = new Date()
  // tomorrow.setUTCDate(today.getUTCDate() + 1)

  // const dateOptions = {
  //   weekday: "short",
  //   month: "short",
  //   day: "numeric"
  // }
  // const converted = (date) => date.toLocaleString("en-GB", dateOptions)

  // if (props.dueDate === null) dueDate = null
  // else if (converted(props.dueDate) === converted(today)) dueDate = "Today"
  // else if (converted(props.dueDate) === converted(tomorrow)) dueDate = "Tomorrow"
  // else dueDate = converted(props.dueDate)

  return (
    <TaskContainer 
      $modeBg $mode={context.mode} 
      id={props.id} onClick={() => props.setActive(props.id)}
    >
      <Container $direction="row" style={{ cursor: "pointer" }}>
        <SquareIconButton 
          $mode={context.mode}
          onClick={(e) => onSetCompleted(e)}
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

          <Container $direction="row" $justifyContent="flex-start">
            {
              props.dueDate
                ? <SecondaryText $mode={context.mode}>
                  {/* {dueDate} */}
                  {taskDueDate(props.dueDate)}
                </SecondaryText>
                : undefined
            }

            {
              props.note
                ? <SecondaryText $mode={context.mode}>
                  - {props.note}
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