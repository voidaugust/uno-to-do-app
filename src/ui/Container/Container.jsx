import styled from "styled-components"
import { marginsAndPaddings } from "../marginsAndPaddings"
import { useSelector } from "react-redux"

export default function Container(props) {
  const context = useSelector(state => state.userPanelUI)
  const preparedProps = {
    ...props, 
    $defaultBg: `${context.mode === "light" ? "white" : "var(--dark-mode-background)"}`
  }

  return <StyledContainer {...preparedProps} />
}

const StyledContainer = styled.div`
  display: ${props => props.$display || "flex"};
  flex-direction: ${props => props.$direction || "column"};
  align-items: ${props => props.$alignItems || "center"};
  justify-content: ${props => props.$justifyContent || "center"};
  ${marginsAndPaddings};
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || null};
  background-color: ${props => props.$bgColor || props.$defaultBg};
`