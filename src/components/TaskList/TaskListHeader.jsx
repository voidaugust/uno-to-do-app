import Container from "../../ui/Containers/Container"
import Heading from "../../ui/Text/Heading"
import Icon from "../../ui/Icons/Icon"
import { deleteListIcon, editListIcon } from "../../ui/Icons/iconTypes"
import { useDispatch } from "react-redux"
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListUIActionsCreator"
import styled from "styled-components"
import SquareIconButton from "../../ui/Button/SquareIconButton"

export default function TaskListHeader({ activeListTitle, isSearchNotActive }) {
  const dispatch = useDispatch()
  
  const IMPORTANT = "Important"
  const TASKS = "Tasks"
  const isListEditable = activeListTitle !== IMPORTANT && activeListTitle !== TASKS

  return (
    <HeaderContainer>
      <Heading $type="h4" $color="white">
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
  height: 64px;
`

const ButtonContainer = styled(Container)`
  flex-direction: row;
  width: 80px;
`