import { useContext } from 'react'
import AppContext from '../../context/context'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDueDateChanging } from '../../store/actionCreators/todoPanelUIActionsCreator'
import { createPortal } from 'react-dom'
import Text from '../../ui/Text/Text'
import Input from '../../ui/Input/Input'
import Modal from './Modal'

export default function DueDateSettingModal() {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  const isDueDateChanging = useSelector(store => store.todoPanelUI.isDueDateChanging)
  const onClose = () => dispatch(toggleDueDateChanging())

  if (!isDueDateChanging) return undefined
  
  return createPortal(
    <Modal
      modalHeading="Set due date"
      onModalClose={onClose}
    >
      smth
    </Modal>
    , document.getElementById('modal')
  )
}