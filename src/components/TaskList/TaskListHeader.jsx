import { useContext } from "react"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Heading from "../../ui/Text/Heading"
import Icon from "../../ui/Icons/Icon"
import { deleteTaskIcon, editTaskIcon } from "../../ui/Icons/iconTypes"
import Button from "../../ui/Button/Button"

export default function TaskListHeader({ activeListTitle, searchQuery }) {
  const context = useContext(AppContext)

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
          <Button $icon $height="40px">
            <Icon $src={editTaskIcon} $left="calc(50% - 12px)" />
          </Button>

          <Button $icon>
            <Icon $src={deleteTaskIcon} $left="calc(50% - 12px)" />
          </Button>
        </Container>
        ) : undefined
      }
    </Container>
  )
}