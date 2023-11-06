import styled from 'styled-components'
import Container from './Container'

export default function ListPanelContainer(props) {
  return <StyledListPanelContainer {...props} />
}

const StyledListPanelContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 40px 20px;
  width: 80%;
  min-width: 240px;
  height: 100%;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`