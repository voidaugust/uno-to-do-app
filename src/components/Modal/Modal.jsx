import { useContext } from 'react'
import AppContext from '../../context/context'
import { 
  ModalBackground, 
  ModalContainer, 
  ModalContent, 
  ModalButtons 
} from '../../ui/ModalElements'
import Heading from '../../ui/Text/Heading'
import Button from '../../ui/Buttons/Button'
import ModalActionButton from './ModalActionButton'

export default function Modal({ 
  modalHeading, onModalAction, modalAction, 
  onModalClose, children
}) {
  const context = useContext(AppContext)

  const backgroundOnClose = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onModalClose()
  }

  return (
    <ModalBackground onClick={(e) => backgroundOnClose(e)}>
      <ModalContainer $mode={context.mode}>

        <ModalContent>
          <Heading $type="h4" $mode={context.mode}>
            {modalHeading}
          </Heading>
            {children}
        </ModalContent>

        <ModalButtons>
          <Button onClick={onModalClose}>Cancel</Button>
          { modalAction 
            ? <ModalActionButton onAction={onModalAction} action={modalAction} /> 
            : undefined
          }
        </ModalButtons>

      </ModalContainer>
    </ModalBackground>
  )
}