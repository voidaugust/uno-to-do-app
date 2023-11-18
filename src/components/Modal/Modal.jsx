import { useCallback, useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { 
  changeListTitle, 
  createList, 
  deleteList
} from '../../store/actionCreators/dataActionsCreator'
import { 
  setActiveListId,
  toggleCreatingList, 
  toggleDeletingList, 
  toggleRenamingList 
} from '../../store/actionCreators/todoListUIActionsCreator'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'

const CREATE = "Create"
const RENAME = "Rename"
const DELETE = "Delete"
const ADD = "Add"

export default function Modal({ isModalOpen, setIsModalOpen }) {
  const context = useContext(AppContext)
  const inputRef = useRef(null)

  const isCreatingList = useSelector(store => store.todoListUI.creatingList)
  const isRenamingList = useSelector(store => store.todoListUI.renamingList)
  const isDeletingList = useSelector(store => store.todoListUI.deletingList)
  const isCreatingTodo = useSelector(store => store.todoListUI.creatingTodo)
  const isActionAvailable = isCreatingList || isRenamingList || isDeletingList || isCreatingTodo
  
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const activeList = useSelector(store => store.data).find(list => list.id === activeListId)
  
  const dispatch = useDispatch()

  let onAction
  let action
  let heading
  let description
  let abort

  if (isCreatingList) {
    onAction = () => {
      dispatch(createList({ 
        title: inputRef.current.value ? inputRef.current.value : "New List"
      }))
      onClose()
    }
    action = CREATE
    heading = "New list"
    description = "Enter list title"
    abort = () => dispatch(toggleCreatingList())
  }

  if (isRenamingList) {
    onAction = () => {
      dispatch(changeListTitle({ 
        listId: activeListId,
        listTitle: 
          inputRef.current.value !== ""
            ? inputRef.current.value
            : activeList.title
      }))
      onClose()
    }
    action = RENAME
    heading = "Rename list"
    description = "New title"
    abort = () => dispatch(toggleRenamingList())
  }

  if (isDeletingList) {
    onAction = () => {
      dispatch(setActiveListId({ listId: "allTasks" }))
      dispatch(deleteList({ listId: activeListId }))
      onClose()
    }
    action = DELETE
    heading = "Are you sure?"
    description = "List will be permanently deleted"
    abort = () => dispatch(toggleDeletingList())
  }

  const onClose = () => {
    isActionAvailable && abort()
    setIsModalOpen(false)
  }

  const backgroundOnClose = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onClose()
  }

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen])
  useEffect(() => {
    isActionAvailable && openModal()
  }, [isActionAvailable, openModal])

  if (!isModalOpen) return undefined

  return createPortal(
    <ModalBackground onClick={(e) => backgroundOnClose(e)}>
      <ModalContainer $mode={context.mode}>

        <ModalContent>
          <Heading $type="h5" $mode={context.mode}>
            {heading}
          </Heading>

          {action !== DELETE
            ? <Input
                ref={inputRef} $mode={context.mode}
                placeholder={description}
              />
            : <Text $mode={context.mode} $secondary>
                {description}
              </Text>
          }
        </ModalContent>

        <ModalButtons>
          <Button onClick={onClose}>Cancel</Button>
          <ActionButton onAction={onAction} action={action} />
        </ModalButtons>

      </ModalContainer>
    </ModalBackground>
    , document.getElementById('modal')
  )
}

const ActionButton = ({ onAction, action }) => {
  if (action === CREATE || action === ADD) {
    return (
      <Button
        $filled $add 
        $paddingInline="42px 24px"
        onClick={onAction}
      >
        {action}
      </Button>
    )
  }

  if (action === RENAME) {
    return (
      <Button
        $filled
        $paddingInline="24px"
        onClick={onAction}
      >
        {action}
      </Button>
    )
  }

  if (action === DELETE) {
    return (
      <Button
        $filled $warning
        $paddingInline="24px"
        onClick={onAction}
      >
        {action}
      </Button>
    )
  }
}