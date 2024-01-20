import { useContext } from "react"
import AppContext from "../../context/context"
import Container from "../../ui/Container"
import Heading from "../../ui/Text/Heading"
import Icon from "../../ui/Icons/Icon"
import { deleteListIcon, editListIcon } from "../../ui/Icons/iconTypes"
import { useDispatch, useSelector } from "react-redux"
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListUIActionsCreator"
import styled from "styled-components"
import SquareIconButton from "../../ui/Buttons/SquareIconButton"

export default function TaskListHeader() {
  const context = useContext(AppContext)

  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const taskLists = useSelector(store => store.data)
  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)

  let activeListTitle 
  if (isShowingAllTasks) activeListTitle = "Tasks"
  else if (isShowingImportant) activeListTitle = "Important"
  else activeListTitle = taskLists.find(list => list.id === activeListId).title

  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearchNotActive = searchQuery === ""
  const isListEditable = !isShowingAllTasks && !isShowingImportant

  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <Heading 
        $type="h4" $mode={context.mode}
        $listHeading $isSearchNotActive={isSearchNotActive}
      >
        {isSearchNotActive ? activeListTitle : "Search"}
      </Heading>

      {isSearchNotActive && isListEditable ? (
        <ButtonContainer>
          <SquareIconButton onClick={() => dispatch(toggleRenamingList())}>
            <Icon $src={editListIcon} $left="calc(50% - 12px)" />
          </SquareIconButton>

          <SquareIconButton onClick={() => dispatch(toggleDeletingList())}>
            <Icon $src={deleteListIcon} $left="calc(50% - 12px)" />
          </SquareIconButton>
        </ButtonContainer>
        ) : undefined
      }
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  padding-block: 12px;
  min-height: 64px;
`

const ButtonContainer = styled(Container)`
  flex-direction: row;
  width: 80px;
`