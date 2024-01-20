import Container from './Container'

export default function MainWrapper({ $mode, children }) {
  return (
    <Container 
      $bgColor={$mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-background)"}
    >
      <Container $direction="row" $height="100dvh">
        {children}
      </Container>
    </Container>
  )
}