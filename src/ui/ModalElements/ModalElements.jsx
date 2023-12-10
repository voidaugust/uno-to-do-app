import styled from "styled-components"
import { marginsAndPaddings } from "../marginsAndPaddings"

const ModalBackground = (props) => {
  return <StyledModalBackground {...props} />
}

const ModalContainer = (props) => {
  return <StyledModalContainer {...props} />
}

const ModalContent = (props) => {
  return <StyledModalContent {...props} />
}

const ModalButtons = (props) => {
  return <StyledModalButtons {...props} />
}

const StyledModalBackground = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
`

const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-block: 10dvh 0;
  margin-inline: auto;
  width: 500px;
  height: ${props => props.$height};
  padding: 24px;
  gap: ${props => props.$gap || "20px"};
  border-radius: 28px;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  gap: ${props => props.$gap || "20px"};
`

const StyledModalButtons = styled(StyledModalContent)`
  flex-direction: row;
  justify-content: ${props => props.$justifyContent || "flex-end"};
  ${marginsAndPaddings}
  gap: 10px;
`

export { ModalBackground, ModalContainer, ModalContent, ModalButtons }