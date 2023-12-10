import { useContext } from 'react'
import { createPortal } from 'react-dom'
import AppContext from '../../context/context'
import { 
  ModalBackground, 
  ModalContainer, 
  ModalContent, 
  ModalButtons 
} from '../../ui/ModalElements/ModalElements'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'
import ModalActionButton from './ModalActionButton'
import useModalData from './useModalData'

export default function Modal() {
  const context = useContext(AppContext)

  const modal = useModalData()

  const backgroundOnClose = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) modal.onClose()
  }

  if (!modal.isActionAvailable) return undefined
  return createPortal(
    <ModalBackground onClick={(e) => backgroundOnClose(e)}>
      <ModalContainer $mode={context.mode}>

        <ModalContent>
          <Heading $type="h4" $mode={context.mode}>
            {modal.heading}
          </Heading>

          {modal.textType === "editable"
            ? <Input
                ref={modal.inputRef} $mode={context.mode}
                placeholder={modal.description}
                autoFocus
              />
            : <Text $mode={context.mode} $secondary>
                {modal.description}
              </Text>
          }
        </ModalContent>

        <ModalButtons>
          <Button onClick={modal.onClose}>Cancel</Button>
          <ModalActionButton onAction={modal.onAction} action={modal.action} />
        </ModalButtons>

      </ModalContainer>
    </ModalBackground>
    , document.getElementById('modal')
  )
}