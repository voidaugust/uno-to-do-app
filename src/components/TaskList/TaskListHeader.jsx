import Container from "../../ui/Containers/Container"
import Heading from "../../ui/Text/Heading"
import Icon from "../../ui/Icons/Icon"
import { deleteListIcon, editListIcon } from "../../ui/Icons/iconTypes"
import Button from "../../ui/Button/Button"
import { useDispatch } from "react-redux"
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListUIActionsCreator"
import styled from "styled-components"

export default function TaskListHeader({ activeListTitle, searchQuery }) {
  const dispatch = useDispatch()

  const isSearchNotActive = searchQuery === ""
  
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
          <ListHeaderButton onClick={() => dispatch(toggleRenamingList())}>
            <Icon $src={editListIcon} $left="calc(50% - 12px)" />
          </ListHeaderButton>

          <ListHeaderButton onClick={() => dispatch(toggleDeletingList())}>
            <Icon $src={deleteListIcon} $left="calc(50% - 12px)" />
          </ListHeaderButton>
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
`

const ButtonContainer = styled(Container)`
  flex-direction: row;
  width: 80px;
`

const ListHeaderButton = styled(Button)`
  width: 40px;
  height: 40px;
`