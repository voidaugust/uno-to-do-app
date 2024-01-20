import { useContext } from 'react'
import AppContext from '../../context/context'
import { toggleDueDateChanging } from '../../store/actionCreators/todoPanelUIActionsCreator'
import SquareIconButton from '../../ui/Buttons/SquareIconButton'
import { 
  taskEmptyDueDateOnLightIcon,
  taskEmptyDueDateOnDarkIcon,
  taskDueDateOnLightIcon,
  taskDueDateOnDarkIcon
} from '../../ui/Icons/iconTypes'
import {  } from '../../ui/Icons/iconTypes'
import Icon from '../../ui/Icons/Icon'
import { useDispatch } from 'react-redux'
import Text from '../../ui/Text/Text'
import Container from '../../ui/Container'

export default function TodoDueDateBlock({ activeTask }) {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  const onDueDateSetup = () => dispatch(toggleDueDateChanging())
  const dueDate = activeTask.dueDate
  const isDueDate = dueDate !== null

  const taskEmptyDueDateIcon =
    context.mode === "light"
      ? taskEmptyDueDateOnLightIcon
      : taskEmptyDueDateOnDarkIcon

  const taskDueDateIcon =
    context.mode === "light"
      ? taskDueDateOnLightIcon
      : taskDueDateOnDarkIcon

  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  }
  
  return (
    <Container 
      $direction="row" 
      $justifyContent="start"
      $marginBlock="10px"
      $width="100%"
      $cursor="pointer"
    >

      <SquareIconButton $size="24px"
        $mode={context.mode}
        onClick={onDueDateSetup}
      >
        <Icon 
          $src={isDueDate ? taskDueDateIcon : taskEmptyDueDateIcon} 
          $left="calc(50% - 12px)"
        />
      </SquareIconButton>

      <Text 
        $mode={context.mode} $marginInline="16px 0" 
        $color={
          isDueDate 
            ? null
            : context.mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey)"
        }
        onClick={onDueDateSetup}
      >
        {
          isDueDate
            ? `Due ${dueDate.toLocaleString("en-GB", dateOptions)}`
            : "Add Due Date"
        }
      </Text>
    </Container>
  )
}