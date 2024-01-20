import { useContext } from 'react'
import AppContext from '../../../context/context'
import Calendar from 'react-calendar'
import Container from '../../../ui/Container'
import Text from '../../../ui/Text/Text'
import 'react-calendar/dist/Calendar.css'
import { createGlobalStyle } from 'styled-components'
import { 
  dateArrowRightIconOnDark, dateArrowRightIconOnLight 
} from "../../../ui/Icons/iconTypes"
import Icon from '../../../ui/Icons/Icon'
import { defaultAnimation } from '../../../ui/defaultAnimation'

export default function CalendarModule({
  customDueDate,changeCustomDueDate
}) {
  const context = useContext(AppContext)

  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  }

  return (
    <Container>
      <CustomCalendarStyles $mode={context.mode} />

      <Text 
        $mode={context.mode} $size="32px"
        $width="100%" $align="left"
      >
        {customDueDate.toLocaleString("en-GB", dateOptions)}
      </Text>

      <Calendar 
        value={customDueDate}
        onClickDay={changeCustomDueDate} 
        locale="en-GB" minDetail="month"
        prevLabel={<MonthSwitchButton mirrored />} 
        nextLabel={<MonthSwitchButton />} 
        prev2Label={null} next2Label={null}
      />
    </Container>
  )
}

const MonthSwitchButton = ({ mirrored }) => {
  const context = useContext(AppContext)
  const arrowIcon = context.mode === "light" 
    ? dateArrowRightIconOnLight
    : dateArrowRightIconOnDark
  
  return (
    <Container $position="relative" $mode={context.mode}>
      <Icon 
        $src={arrowIcon} 
        $left="calc(50% - 12px)"
        $mirrored={mirrored}
      />
    </Container>
  )
}

const CustomCalendarStyles = createGlobalStyle`
  .react-calendar {
    width: 100%;
    background: transparent;
    border: 0;
    font-family: Roboto, sans-serif !important;
    font-size: var(--default-font-size);
  }

  abbr {
    text-decoration: none;
  }

  .react-calendar button {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    color: ${props => (props.$mode === 'light' ? 'black' : 'white')};
  }

  .react-calendar__navigation {
    height: 54px;
  }

  .react-calendar__navigation button:disabled {
    background-color: transparent;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: transparent;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 20px;
    color: ${props => (props.$mode === 'light' ? 'var(--primary-purple)' : 'var(--on-dark-primary-purple)')};
  }

  .react-calendar__month-view__weekdays {
    text-transform: capitalize;
    color: ${props => (props.$mode === 'light' ? 'black' : 'white')};
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${props => (props.$mode === 'light' ? 'var(--dark-primary-purple-variant)' : 'var(--light-primary-purple-variant)')} !important;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: var(--outline-grey) !important;
  }

  .react-calendar__tile--now {
    background: transparent;
    border: 3px solid ${props => (props.$mode === 'light' ? 'var(--primary-purple)' : 'var(--on-dark-primary-purple)')} !important;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${props => (props.$mode === 'light' ? 'var(--over-light-surface-grey)' : 'var(--over-dark-surface-grey)')};
    ${defaultAnimation}
  }

  .react-calendar__tile--active {
    background: ${props => (props.$mode === 'light' ? 'var(--primary-purple)' : 'var(--on-dark-primary-purple)')};
    color: white !important;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${props => (props.$mode === 'light' ? 'var(--primary-purple)' : 'var(--on-dark-primary-purple)')};
  }
`