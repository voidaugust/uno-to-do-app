import styled, { css } from "styled-components"
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
  max-width: ${props => props.$maxWidth};
  height: ${props => props.$height};
  background-color: ${props => props.$bgColor || props.$defaultBg};

  ${props => props.$mobileHide && css`
    @media only screen and (max-width: 990px) {
      display: none;
    }
  `};

  ${props => props.$mobileCenter && css`
    @media only screen and (max-width: 990px) {
      width: 100%;
      align-items: center;
    }
  `};
`