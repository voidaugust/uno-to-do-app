import { useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { marginsAndPaddings } from "../marginsAndPaddings"

export default function Text(props) {
  const context = useSelector(state => state.userPanelUI)
  const preparedProps = {
    ...props, 
    $defaultColor: `${context.mode === "light" ? "black" : "white"}`
  }

  return <StyledText {...preparedProps} />
}

const StyledText = styled.p`
  ${marginsAndPaddings};
  font-size: ${props => props.$size || "16px"};
  line-height: ${props => props.$height || "150%"};
  width: ${props => props.$width};
  text-align: ${props => props.$align || "left"};
  font-style: ${props => props.$textStyle || "normal"};
  font-weight: ${props => props.$weight || "500"};
  color: ${props => props.$color || props.$defaultColor};
  text-wrap: balance;

  ${props => props.$secondary && css`
    color: ${props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"}
  `}

  ${props => props.$purple && css`
    color: ${
      props => props.$mode === "light" 
        ? "var(--primary-purple)" 
        : "var(--on-dark-primary-purple)"
    }
  `}
`