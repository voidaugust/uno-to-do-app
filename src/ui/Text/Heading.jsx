import styled, { css } from "styled-components"
import { marginsAndPaddings } from "../marginsAndPaddings"

export default function Heading(props) {
  const defaultSize = () => {
    switch (props.$type) {
      case "h1": return "48px"
      case "h2": return "36px"
      case "h3": return "32px"
      case "h4": return "28px"
      case "h5": return "24px"
      case "h6": return "20px"
      default: return "36px"
    }
  }

  const preparedProps = {
    ...props, 
    $defaultColor: `${props.$mode === "light" ? "black" : "white"}`,
    $defaultSize: defaultSize()
  }

  switch (props.$type) {
    case "h1": return <StyledH1 {...preparedProps} />
    case "h2": return <StyledH2 {...preparedProps} />
    case "h3": return <StyledH3 {...preparedProps} />
    case "h4": return <StyledH4 {...preparedProps} />
    case "h5": return <StyledH5 {...preparedProps} />
    case "h6": return <StyledH6 {...preparedProps} />
    default:   return <StyledH2 {...preparedProps} />
  }
}

const StylesForHeading = css`
  ${marginsAndPaddings};
  font-size: ${props => props.$size || props.$defaultSize};
  font-weight: ${props => props.$fontWeight || "400"};
  text-align: ${props => props.$align || "left"};
  color: ${props => props.$color || props.$defaultColor};
  text-wrap: balance;
`

const StyledH1 = styled.h1`${StylesForHeading}`
const StyledH2 = styled.h2`${StylesForHeading}`
const StyledH3 = styled.h3`${StylesForHeading}`
const StyledH4 = styled.h4`${StylesForHeading}`
const StyledH5 = styled.h5`${StylesForHeading}`
const StyledH6 = styled.h6`${StylesForHeading}`