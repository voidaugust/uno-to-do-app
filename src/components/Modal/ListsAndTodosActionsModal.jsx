import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import AppContext from '../../context/context'
import Text from '../../ui/Text/Text'
import Input from '../../ui/Input/Input'
import useModalData from './useModalData'
import Modal from './Modal'

export default function ListsAndTodosActionsModal() {
  const context = useContext(AppContext)
  const modal = useModalData()
  const [isInputFocused, setInputFocus] = useState(false) 

  if (!modal.isActionAvailable) return undefined
  
  return createPortal(
    <Modal
      modalHeading={modal.heading}
      onModalAction={modal.onAction}
      modalAction={modal.action}
      onModalClose={modal.onClose}
    >

      {modal.textType === "editable"
        ? <Input
          ref={modal.inputRef} $mode={context.mode}
          placeholder={modal.description}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          $activeInput={isInputFocused} autoFocus
        />
        : <Text $mode={context.mode} $secondary>
          {modal.description}
        </Text>
      }

    </Modal>
    , document.getElementById('modal')
  )
}