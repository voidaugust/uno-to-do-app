import { useContext, useMemo } from 'react'
import AppContext from '../../context/context'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDueDateChanging } from '../../store/actionCreators/todoPanelUIActionsCreator'
import { createPortal } from 'react-dom'
import Text from '../../ui/Text/Text'
import Modal from './Modal'
import Container from '../../ui/Containers/Container'
import {
  calendarIconOnLight,
  calendarIconOnDark,
  dateArrowRightIconOnLight,
  dateArrowRightIconOnDark
} from '../../ui/Icons/iconTypes'
import SquareIconButton from '../../ui/Button/SquareIconButton'
import Icon from '../../ui/Icons/Icon'
import { changeDueDate } from '../../store/actionCreators/dataActionsCreator'

export default function DueDateSettingModal() {
  const isDueDateChanging = useSelector(store => store.todoPanelUI.isDueDateChanging)
  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const activeTask = tasks.find(task => task.id === activeTaskId)

  const dispatch = useDispatch()

  const today = new Date()
  let tomorrow = new Date()
  let nextWeek = new Date()
  tomorrow.setUTCDate(today.getUTCDate() + 1)
  nextWeek.setUTCDate(today.getUTCDate() + 7)

  const onClose = () => dispatch(toggleDueDateChanging())
  const setDueDate = (date) => dispatch(changeDueDate({
    listId: activeTask.listId,
    todoId: activeTaskId,
    dueDate: date
  }))

  const setDueDateToday = () => {
    setDueDate(today)
    onClose()
  }
  const setDueDateTomorrow = () => {
    setDueDate(tomorrow)
    onClose()
  }
  const setDueDateNextWeek = () => {
    setDueDate(nextWeek)
    onClose()
  }

  if (!isDueDateChanging) return undefined
  
  return createPortal(
    <Modal
      modalHeading="Set due date"
      onModalClose={onClose}
    >
      <Container as="ul">
        <DateOption onClick={setDueDateToday}>
          Today
        </DateOption>
        <DateOption onClick={setDueDateTomorrow}>
          Tomorrow
        </DateOption>
        <DateOption onClick={setDueDateNextWeek}>
          Next Week
        </DateOption>
        <DateOption onClick={() => console.log("Pick a Date")} hasArrow>
          Pick a Date
        </DateOption>
      </Container>
    </Modal>
    , document.getElementById('modal')
  )
}

const DateOption = ({ onClick, children, hasArrow }) => {
  const context = useContext(AppContext)

  const calendarIcon = context.mode === "light" 
    ? calendarIconOnLight 
    : calendarIconOnDark

  const arrowIcon = context.mode === "light" 
    ? dateArrowRightIconOnLight
    : dateArrowRightIconOnDark

  return ( 
    <Container 
      as="li" $direction="row"
      $justifyContent="space-between"
      $height="44px" onClick={onClick}
    >

      <Container 
        $direction="row" 
        $justifyContent="flex-start"
        $cursor="pointer"
      >
        <SquareIconButton 
          $size="24px" $mode={context.mode}
        >
          <Icon 
            $src={calendarIcon} 
            $left="calc(50% - 12px)"
          />
        </SquareIconButton>

        <Text 
          $marginInline="16px 0"
          $mode={context.mode}
        >
          {children}
        </Text>
      </Container>

      { hasArrow
        ? <SquareIconButton 
            $size="24px" $mode={context.mode}
          >
            <Icon 
              $src={arrowIcon} 
              $left="calc(50% - 12px)"
            />
          </SquareIconButton>
        : undefined
      }
    </Container>
  )
}