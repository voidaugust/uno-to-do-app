import { useSelector } from 'react-redux'
import Container from '../Container/Container'

export default function MainWrapper({ children }) {
  const context = useSelector(state => state.userPanelUI)

  return (
    <Container 
      $bgColor={context.mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-background)"}
    >
      <Container $direction="row" $height="100dvh">
        {children}
      </Container>
    </Container>
  )
}