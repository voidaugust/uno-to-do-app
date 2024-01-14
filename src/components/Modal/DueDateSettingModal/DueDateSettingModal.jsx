import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDueDateChanging } from '../../../store/actionCreators/todoPanelUIActionsCreator'
import { createPortal } from 'react-dom'
import Modal from '../Modal'
import { changeDueDate } from '../../../store/actionCreators/dataActionsCreator'
import { SAVE_CUSTOM_DUE_DATE } from '../modalScenarios'
import DateOptions from './DateOptions'
import CalendarModule from './CalendarModule'

export default function DueDateSettingModal() {
  const isDueDateChanging = useSelector(store => store.todoPanelUI.isDueDateChanging)
  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoPanelUI.activeTaskId)
  const activeTask = tasks.find(task => task.id === activeTaskId)

  const dispatch = useDispatch()
  const [isCalendarShown, showCalendar] = useState(false)
  const [customDueDate, changeCustomDueDate] = useState(new Date())

  const setDueDate = (date) => dispatch(changeDueDate({
    listId: activeTask.listId,
    todoId: activeTaskId,
    dueDate: date
  }))

  const onClose = () => {
    dispatch(toggleDueDateChanging())
    showCalendar(false)
  }

  const setCustomDueDate = (date) => {
    setDueDate(date)
    onClose()
  }

  const onCalendarShowing = () => {
    activeTask.dueDate && changeCustomDueDate(activeTask.dueDate)
    showCalendar(true)
  }

  if (!isDueDateChanging) return undefined
  
  return createPortal(
    <Modal
      modalHeading={isCalendarShown ? "Select date" : "Set due date"}
      onModalAction={isCalendarShown ? () => setCustomDueDate(customDueDate) : undefined}
      modalAction={isCalendarShown ? SAVE_CUSTOM_DUE_DATE : undefined}
      onModalClose={onClose}
    >
      {
        isCalendarShown
          ? <CalendarModule
            activeTask={activeTask}
            customDueDate={customDueDate} 
            changeCustomDueDate={changeCustomDueDate} 
          />
          : <DateOptions 
            setDueDate={setDueDate}
            onClose={onClose} 
            onCalendarShowing={onCalendarShowing}
          />
      }
    </Modal>
    , document.getElementById('modal')
  )
}