import styled, { css } from "styled-components"
import { marginsAndPaddings } from "../marginsAndPaddings"

export default function Container(props) {
  const preparedProps = {
    ...props, 
    $defaultBg: `${props.$mode === "light" ? "white" : "var(--dark-mode-background)"}`
  }

  return <StyledContainer {...preparedProps} />
}

const StyledContainer = styled.div`
  display: ${props => props.$display || "flex"};
  position: ${props => props.$position};
  flex-direction: ${props => props.$direction || "column"};
  align-items: ${props => props.$alignItems || "center"};
  justify-content: ${props => props.$justifyContent || "center"};
  ${marginsAndPaddings};
  width: ${props => props.$width || "100%"};
  min-width: ${props => props.$minWidth};
  max-width: ${props => props.$maxWidth};
  height: ${props => props.$height || "auto"};
  background-color: ${props => props.$bgColor || props.$defaultBg};
  cursor: ${props => props.$cursor || "auto"};
  transition: all 150ms ease-in-out;

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

  ${props => props.$scrolling && css`
    overflow: scroll;
  `};

  ${props => props.$divider && css`
    margin-block: 14.5px;
    height: 1px;
    background-color: ${props => props.$mode === "light" ? "var(--light-grey)" : "var(--dark-grey)"}
  `};
`