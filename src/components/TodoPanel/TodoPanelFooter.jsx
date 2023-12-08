import { useContext } from "react"
import { useDispatch } from "react-redux"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Text from "../../ui/Text/Text"
import Icon from "../../ui/Icons/Icon"
import SquareIconButton from "../../ui/Button/SquareIconButton"
import { setActiveTaskId } from "../../store/actionCreators/todoListUIActionsCreator"
import { 
  arrowRightOnDarkIcon, arrowRightOnLightIcon, 
  deleteOnDarkIcon, deleteOnLightIcon 
} from "../../ui/Icons/iconTypes"
import { toggleTodoDeletingConfirmation } from "../../store/actionCreators/todoPanelUIActionsCreator"

export default function TodoPanelFooter({ activeTask }) {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  const unsetActiveTask = () => dispatch(setActiveTaskId({ id: null }))
  const onDelete = () => dispatch(toggleTodoDeletingConfirmation())

  const createdDate = new Date(activeTask.createdDate)
  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  }

  const hidePanelIcon = context.mode === "light" ? arrowRightOnLightIcon : arrowRightOnDarkIcon
  const deleteIcon = context.mode === "light" ? deleteOnLightIcon : deleteOnDarkIcon

  return (
    <Container $direction="row" $justifyContent="space-between">
      <SquareIconButton $mode={context.mode} onClick={unsetActiveTask}>
        <Icon $src={hidePanelIcon} $left="calc(50% - 12px)" />
      </SquareIconButton>

      <Text>
        Created {createdDate.toLocaleString("en-GB", dateOptions)}
      </Text>
      
      <SquareIconButton $mode={context.mode} onClick={onDelete}>
        <Icon $src={deleteIcon} $left="calc(50% - 12px)" />
      </SquareIconButton>
    </Container>
  )
}