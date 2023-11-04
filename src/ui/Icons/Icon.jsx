import styled from "styled-components"

export default function Icon({ $src, $top, $left }) {
  return (
    <StyledIcon
      $top={$top} $left={$left}
      dangerouslySetInnerHTML={{__html: $src }} 
    />
  )
}

const StyledIcon = styled.span`
  position: absolute;
  top: ${props => props.$top || "0"};
  left: ${props => props.$left || "0"};
`