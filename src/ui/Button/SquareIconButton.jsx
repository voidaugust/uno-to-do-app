import styled from "styled-components"
import Button from "./Button"

export default function SquareIconButton(props) {
  return <StyledSquareIconButton {...props} />
}

const StyledSquareIconButton = styled(Button)`
  width: ${props => props.$size || "40px"};
  height: ${props => props.$size || "40px"};
  color: ${
    props => props.$mode === "light" 
      ? "var(--primary-purple)" 
      : "var(--on-dark-primary-purple)"
  };
`