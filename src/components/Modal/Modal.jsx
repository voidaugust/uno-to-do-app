import { useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom'
import AppContext from '../../context/context'
import styled from 'styled-components'
import Heading from '../../ui/Text/Heading'
import { createList } from '../../store/actionCreators/dataActionsCreator'
import { toggleCreatingList } from '../../store/actionCreators/todoListUIActionsCreator'

export default function Modal() {
  const context = useContext(AppContext)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const inputRef = useRef(null)

  const isCreatingList = useSelector(store => store.todoListUI.creatingList)
  const isRenamingList = useSelector(store => store.todoListUI.renamingList)
  const isDeletingList = useSelector(store => store.todoListUI.deletingList)
  const isCreatingTodo = useSelector(store => store.todoListUI.creatingTodo)
  
  const dispatch = useDispatch()

  let onAction
  let actionTitle
  let heading
  let inputPlaceholder
  let cancel

  if (isCreatingList) {
    setIsModalOpen(true)
    onAction = dispatch(createList({
      title: inputRef.current.value !== "" ? inputRef.current.value : "New list"
    }))
    actionTitle = "Create"
    heading = "New list"
    inputPlaceholder = "Enter list title"
    cancel = dispatch(toggleCreatingList())
  }

  const onCancel = () => {
    // cancel()
    setIsModalOpen(false)
  }

  if (!isModalOpen) return null
  
  return createPortal(
    <ModalBackground>
      <ModalContainer $mode={context.mode}>
        <div className='modal-body'>
          <Heading $type="h5" $mode={context.mode}>
            Header
          </Heading>
          <input ref={inputRef} type="text" />
          <p>Sample modal</p>
        </div>
        <button onClick={onCancel}>Cancel</button>
      </ModalContainer>
    </ModalBackground>
    , document.getElementById('modal')
  )
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 666;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 10dvh 0;
  margin-inline: auto;
  width: 500px;
  padding: 24px;
  gap: 20px;
  border-radius: 28px;
  background: var(--light-surface-surface-color, #FFF);
`