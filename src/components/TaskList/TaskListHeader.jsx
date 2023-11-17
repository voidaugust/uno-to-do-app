import { useContext } from "react"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Heading from "../../ui/Text/Heading"
import Icon from "../../ui/Icons/Icon"
import { deleteListIcon, editListIcon } from "../../ui/Icons/iconTypes"
import Button from "../../ui/Button/Button"
import { useDispatch } from "react-redux"
import { toggleDeletingList, toggleRenamingList } from "../../store/actionCreators/todoListUIActionsCreator"

export default function TaskListHeader({ activeListTitle, searchQuery }) {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  const isSearchNotActive = searchQuery === ""
  
  const IMPORTANT = "Important"
  const TASKS = "Tasks"
  const isListEditable = activeListTitle !== IMPORTANT && activeListTitle !== TASKS

  return (
    <Container 
      $mode={context.mode} $direction="row"
      $justifyContent="space-between"
      $height="64px" $bgColor="transparent"
    >
      <Heading $type="h4" $color="white">
        {isSearchNotActive ? activeListTitle : "Search"}
      </Heading>

      {isSearchNotActive && isListEditable ? (
        <Container $direction="row" $width="80px">
          <Button 
            $width="40px" $height="40px"
            onClick={() => dispatch(toggleRenamingList())}
          >
            <Icon $src={editListIcon} $left="calc(50% - 12px)" />
          </Button>

          <Button 
            $width="40px" $height="40px"
            onClick={() => dispatch(toggleDeletingList())}
          >
            <Icon $src={deleteListIcon} $left="calc(50% - 12px)" />
          </Button>
        </Container>
        ) : undefined
      }
    </Container>
  )
}