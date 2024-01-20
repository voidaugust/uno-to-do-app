import { useContext } from "react"
import AppContext from "../../../context/context"
import { 
  calendarIconOnDark, calendarIconOnLight, 
  dateArrowRightIconOnDark, dateArrowRightIconOnLight 
} from "../../../ui/Icons/iconTypes"
import Container from "../../../ui/Container"
import SquareIconButton from "../../../ui/Buttons/SquareIconButton"
import Icon from "../../../ui/Icons/Icon"
import Text from "../../../ui/Text/Text"

export default function DateOptions({
  setDueDate, onClose, onCalendarShowing
}) {
  const today = new Date()
  let tomorrow = new Date()
  let nextWeek = new Date()
  tomorrow.setUTCDate(today.getUTCDate() + 1)
  nextWeek.setUTCDate(today.getUTCDate() + 7)

  const setDueDateToday = () => {
    setDueDate(today)
    onClose()
  }
  const setDueDateTomorrow = () => {
    setDueDate(tomorrow)
    onClose()
  }
  const setDueDateNextWeek = () => {
    setDueDate(nextWeek)
    onClose()
  }

  return (
    <Container as="ul">
      <DateOption onClick={setDueDateToday}>
        Today
      </DateOption>
      <DateOption onClick={setDueDateTomorrow}>
        Tomorrow
      </DateOption>
      <DateOption onClick={setDueDateNextWeek}>
        Next Week
      </DateOption>
      <DateOption onClick={onCalendarShowing} hasArrow>
        Pick a Date
      </DateOption>
    </Container>
  )
}

const DateOption = ({ onClick, children, hasArrow }) => {
  const context = useContext(AppContext)

  const calendarIcon = context.mode === "light" 
    ? calendarIconOnLight 
    : calendarIconOnDark

  const arrowIcon = context.mode === "light" 
    ? dateArrowRightIconOnLight
    : dateArrowRightIconOnDark

  return ( 
    <Container 
      as="li" $direction="row"
      $justifyContent="space-between"
      $height="44px" onClick={onClick}
    >

      <Container 
        $direction="row" 
        $justifyContent="flex-start"
        $cursor="pointer"
      >
        <SquareIconButton 
          $size="24px" $mode={context.mode}
        >
          <Icon 
            $src={calendarIcon} 
            $left="calc(50% - 12px)"
          />
        </SquareIconButton>

        <Text
          $marginInline="16px 0"
          $mode={context.mode}
        >
          {children}
        </Text>
      </Container>

      { hasArrow
        ? <SquareIconButton 
            $size="24px" $mode={context.mode}
          >
            <Icon 
              $src={arrowIcon} 
              $left="calc(50% - 12px)"
            />
          </SquareIconButton>
        : undefined
      }
    </Container>
  )
}