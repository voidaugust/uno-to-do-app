import { useSelector } from "react-redux"
import styled from "styled-components"
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
`