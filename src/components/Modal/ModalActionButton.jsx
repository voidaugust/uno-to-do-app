import Button from "../../ui/Button/Button"
import { 
  CREATE, RENAME, DELETE_LIST, 
  ADD, DELETE_TASK, SAVE_SETTINGS,
  IS_LOGOUTING, SAVE_CUSTOM_DUE_DATE
} from "./modalScenarios"

export default function ModalActionButton ({ onAction, action }) {
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

  if (action === RENAME || action === SAVE_SETTINGS || action === SAVE_CUSTOM_DUE_DATE) {
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

  if (action === DELETE_LIST || action === DELETE_TASK || action === IS_LOGOUTING) {
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